import bcrypt from "bcryptjs";
import useMiddleware from "../../middlewares/useMiddleware";

const handler = (req, res) => {
  if (req.method === "POST") {
    const { email, password } = req.body;

    return req.db
      .collection("users")
      .findOne({ email })
      .then(user => {
        if (user) {
          return bcrypt.compare(password, user.password).then(result => {
            if (result) return Promise.resolve(user);
            return Promise.reject(Error("Le mot de passe que vous avez entré est incorrect"));
          });
        }
        return Promise.reject(Error("Cette adresse email n'existe pas"));
      })
      .then(user => {
        req.session.userId = user._id;
        return res.send({
          status: "ok",
          message: `Bienvenue, ${user.firstName} !`
        });
      })
      .catch(error =>
        res.send({
          status: "error",
          message: error.toString()
        })
      );
  }
  return res.status(405).end();
};

export default useMiddleware(handler);
