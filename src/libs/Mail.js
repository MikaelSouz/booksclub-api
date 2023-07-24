import NodeMailjet from "node-mailjet";
import dotenv from "dotenv";
dotenv.config();

const mailjet = NodeMailjet.apiConnect(
  process.env.MAILJET_API_KEY,
  process.env.MAILJET_SECRET_KEY
);

class Mail {
  async sendForgotPasswordEmail(email, name, token) {
    try {
      const result = await mailjet.post("send", { version: "v3.1" }).request({
        Messages: [
          {
            From: {
              Email: "rodrigues.mikael@hotmail.com",
              Name: "BookClub",
            },
            To: [
              {
                Email: email,
                Name: name,
              },
            ],
            TemplateID: 4973047,
            TemplateLanguage: true,
            Subject: "Alteração de senha",
            Variables: {
              name: name,
              token: token,
            },
          },
        ],
      });
    } catch (error) {
      return { error };
    }
  }
}

export default new Mail();
