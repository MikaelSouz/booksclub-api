import { User } from "../models";

class UserController {
  async create(req, res) {
    const user = new User({
      name: "Mikael",
      email: "mikael@teste",
      password: "teste123",
      password_hash: "teste123",
      reset_password_token: "teste-token",
      reset_password_token_sent_at: new Date(),
      avatar_url: "teste-url",
    });

    await user.save();

    return res.json({ user });
  }
}

export default new UserController();
