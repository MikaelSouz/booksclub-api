import { User } from "../models";
import * as Yup from "yup";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Mail from "../libs/Mail";
import { differenceInHours } from "date-fns";
import * as dotenv from "dotenv";
import UploadImage from "../libs/UploadImage";
dotenv.config();

class UserController {
  async login(req, res) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email("Email inválido.")
          .required("Email é obrigatório."),
        password: Yup.string().required("Senha é obrigatória."),
      });

      await schema.validate(req.body);

      const user = await User.findOne({
        where: {
          email: req.body.email,
        },
      });

      const checkPassword = await bcrypt.compare(
        req.body.password,
        user.password_hash
      );

      if (!user || !checkPassword) {
        return res.status(401).json({ error: "Usuário ou senha inválidos." });
      }

      const token = jwt.sign({ id: user.id }, process.env.JWT_HASH, {
        expiresIn: "30d",
      });

      const { id, name, email, avatar_url, createdAt } = user;

      return res.json({
        user: {
          id,
          name,
          email,
          avatar_url,
          createdAt,
        },
        token,
      });
    } catch (error) {
      return res.status(400).json({ error: error?.message });
    }
  }

  async create(req, res) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string()
          .required("Nome é obrigatório.")
          .min(3, "Nome deve conter no mínimo 3 caracteres."),
        email: Yup.string()
          .email("Email inválido.")
          .required("Email é obrigatório."),
        password: Yup.string()
          .required("Senha é obrigatória.")
          .min(6, "Senha deve conter no mínimo 6 caracteres"),
      });

      await schema.validate(req.body);
      const existedUser = await User.findOne({
        where: { email: req.body.email },
      });

      if (existedUser) {
        return res.status(400).json({ error: "Usuário já cadastrado." });
      }

      const hashPassword = await bcrypt.hash(req.body.password, 8);

      const user = new User({
        ...req.body,
        password: "",
        password_hash: hashPassword,
      });

      await user.save();

      return res.json({ user });
    } catch (error) {
      return res.status(400).json({ error: error?.message });
    }
  }

  async update(req, res) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().min(3, "Nome deve conter no mínimo 3 caracteres."),
        email: Yup.string().email("Email inválido."),
        password: Yup.string().min(
          6,
          "Senha deve conter no mínimo 6 caracteres"
        ),
      });

      await schema.validate(req.body);
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(404).json({ error: "Usuário não encontrado." });
      }
      const { name, email, password } = req.body;

      if (name) {
        user.name = name;
      }

      if (email) {
        user.email = email;
      }

      if (password) {
        user.password_hash = await bcrypt.hash(password, 8);
      }

      await user.save();

      return res.json(user);
    } catch (error) {
      return res.status(400).json({ error: error?.message });
    }
  }

  async uploadAvatar(req, res) {
    try {
      const schema = Yup.object().shape({
        base64: Yup.string().required("Base64 é obrigatório."),
        mime: Yup.string().required("Mime é obrigatório."),
      });

      await schema.validate(req.body);
      const { base64, mime } = req.body;

      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(404).json({ error: "Usuário não encontrado." });
      }

      if (user.avatar_url) {
        const splited = user.avatar_url.split("/");
        const oldKey = splited[splited?.length - 1];

        const deleteResponse = await UploadImage.delete(oldKey);

        if (deleteResponse?.error) {
          return res.status(500).json({ error: deleteResponse });
        }
      }

      const key = `user_${user.id}_${new Date().getTime()}`;

      const response = await UploadImage.upload(key, base64, mime);

      if (response?.error) {
        return res
          .status(400)
          .json({ error: "Erro ao fazer upload da imagem." });
      }

      await user.update({
        avatar_url: response?.Location,
      });

      return res.json(user);
    } catch (error) {
      return res.status(400).json({ error: error?.message });
    }
  }

  async get(req, res) {
    try {
      if (!req.userId) {
        return res.status(401).json({ error: "Id não informado." });
      }

      const user = await User.findOne({
        where: {
          id: Number(req.userId),
        },
      });

      if (!user) {
        return res.status(404).json({ error: "Usuário não encontrado." });
      }

      return res.json(user);
    } catch (error) {
      return res.status(400).json({ error: error?.message });
    }
  }

  async forgotPassword(req, res) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email("Email inválido.")
          .required("Email é obrigatório."),
      });

      await schema.validate(req.body);

      const user = await User.findOne({
        where: {
          email: req.body.email,
        },
      });

      if (!user) {
        return res.status(404).json({ error: "Email não está cadastrado." });
      }

      const token = Math.random().toString().slice(2, 8);
      console.log({ token: token });

      const reset_password_token_sent_at = new Date();
      const reset_password_token = await bcrypt.hash(token, 8);

      await user.update({
        reset_password_token_sent_at,
        reset_password_token,
      });

      const { name, email } = user;

      const mailResult = await Mail.sendForgotPasswordEmail(email, name, token);

      if (mailResult?.error) {
        return res.status(400).json({ error: "Email não enviado." });
      }

      return res.json({ success: true });
    } catch (error) {
      return res.status(400).json({ error: error?.message });
    }
  }

  async resetPassword(req, res) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email("Email inválido.")
          .required("Email é obrigatório."),
        token: Yup.string().required("Token é obrigatório."),
        password: Yup.string()
          .required("Senha é obrigatória")
          .min(6, "Senha deve conter no mínimo 6 caracteres"),
      });

      await schema.validate(req.body);

      const user = await User.findOne({
        where: {
          email: req.body.email,
        },
      });

      if (!user) {
        return res.status(404).json({ error: "Email não está cadastrado." });
      }

      if (!user.reset_password_token && user.reset_password_token_sent_at) {
        return res
          .status(400)
          .json({ error: "Alteração de senha não foi solicitada." });
      }

      const differenceHours = differenceInHours(
        new Date(),
        user.reset_password_token_sent_at
      );

      if (differenceHours > 3) {
        return res.status(401).json({ error: "Token expirado." });
      }

      const checkToken = await bcrypt.compare(
        req.body.token,
        user.reset_password_token
      );

      if (!checkToken) {
        return res.status(401).json({ error: "Token inválido" });
      }

      const passwordHash = await bcrypt.hash(req.body.password, 8);

      await user.update({
        password_hash: passwordHash,
        reset_password_token: null,
        reset_password_token_sent_at: null,
      });

      return res.json({ success: true });
    } catch (error) {
      return res.status(400).json({ error: error?.message });
    }
  }
}

export default new UserController();
