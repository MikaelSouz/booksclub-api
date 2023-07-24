import { User } from "../models";
import * as Yup from "yup";
import bcrypt from "bcrypt";

class UserController {
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
}

export default new UserController();
