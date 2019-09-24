import isEmail from "validator/lib/isEmail";
import bcrypt from "bcryptjs";
import useMiddleware from "../../middlewares/useMiddleware";

const handler = (req, res) => {
  if (req.method === "POST") {
    const { email, firstName, lastName, password } = req.body;
    if (!isEmail(email)) {
      return res.send({
        status: "error",
        message: "L'adresse email est invalide"
      });
    }
    return req.db
      .collection("users")
      .countDocuments({ email })
      .then(count => {
        if (count) {
          return Promise.reject(Error(`L'adresse email ${email} existe déjà, veuillez vous connecter`));
        }
        return bcrypt.hashSync(password);
      })
      .then(hashedPassword =>
        req.db.collection("users").insertOne({
          email,
          password: hashedPassword,
          firstName,
          lastName,
          mobile: "",
          dateOfBirth: {
            day: null,
            month: null,
            year: null
          },
          adress: {
            street: "",
            city: "",
            zip: ""
          }
        })
      )
      .then(user => {
        req.session.userId = user.insertedId;
        res.status(201).send({
          status: "ok",
          message: "User signed up successfully"
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
