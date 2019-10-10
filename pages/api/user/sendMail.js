import EmailForUs from "utils/emailForUs";
import useMiddleware from "src/middlewares/useMiddleware";

const handler = (req, res) => {
  if (req.method === "POST") {
    console.log("req.body : ", req.body);
    const { name, email, content } = req.body;
    if (!name) return res.send({ status: "error", message: "Veuillez renseigner votre nom." });
    if (!email) return res.send({ status: "error", message: "Veuillez entrer votre adresse mail." });

    return new EmailForUs(name, email, content)
      .sendContactEmail()
      .then(() => {
        return res.send({
          status: "success",
          message: "Email envoyé avec succès."
        });
      })
      .catch(error => {
        console.log("error : ", error);
        res.send({
          status: "error",
          message: error.toString()
        });
      });
  }
  return res.status(405).end();
};

export default useMiddleware(handler);
