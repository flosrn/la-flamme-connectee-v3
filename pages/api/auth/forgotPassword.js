import crypto from "crypto";
import EmailToClient from "utils/emailToClient";
import useMiddleware from "middlewares/useMiddleware";

const handler = (req, res) => {
  if (req.method === "POST") {
    const { email } = req.body;
    if (!email) return res.send({ status: "error", message: "Veuillez entrer votre adresse mail." });

    return req.db
      .collection("users")
      .findOne({ email })
      .then(user => {
        if (!user) return Promise.reject(Error("Cette adresse email n'existe pas."));

        const token = crypto.randomBytes(32).toString("hex");
        const resetPasswordToken = crypto
          .createHash("sha256")
          .update(token)
          .digest("hex");
        const resetPasswordExpire = Date.now() + 3600000; // Available for 1h
        const resetURL = `http://localhost:3000/resetPassword/${token}`;

        req.db.collection("users").findOneAndUpdate({ email }, { $set: { resetPasswordToken, resetPasswordExpire } });
        return new EmailToClient(user, resetURL)
          .sendPasswordReset()
          .then(() => {
            return res.send({
              status: "success",
              message: "Email envoyé avec succès.",
              text: "Cliquez sur le lien dans le mail que vous allez recevoir afin de changer de mot de passe"
            });
          })
          .catch(() => {
            res.send({
              status: "error",
              message: "Une erreur est survenue lors de l'envoie du mail, veuillez réessayer ultérieurement."
            });
          });
      });
  }
  return res.status(405).end();
};

export default useMiddleware(handler);
