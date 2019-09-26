import crypto from "crypto";
import bcrypt from "bcryptjs";
import useMiddleware from "middlewares/useMiddleware";

const handler = (req, res) => {
  if (req.method === "PATCH") {
    const { password, token } = req.body;
    if (!password) return res.send({ status: "error", message: "Veuillez entrer un nouveau mot de passe." });

    const hashedPassword = bcrypt.hashSync(password);
    const hashedToken = crypto
      .createHash("sha256")
      .update(token)
      .digest("hex");

    return req.db
      .collection("users")
      .findOneAndUpdate(
        {
          resetPasswordToken: hashedToken,
          resetPasswordExpire: { $gt: Date.now() }
        },
        {
          $set: {
            password: hashedPassword,
            resetPasswordToken: undefined,
            resetPasswordExpire: undefined
          }
        }
      )
      .then(result => {
        if (result.value) {
          return res.send({
            status: "ok",
            message: "Votre nouveau mot de passe à bien été pris en compte, veuillez vous connecter."
          });
        }
        return res.send({
          status: "error",
          message: `Il semblerait que le délai de changement de mot de passe ai expiré, veuillez faire "mot de passe oublié" à nouveau.`
        });
      });
  }
  return res.status(405).end();
};

export default useMiddleware(handler);
