import useMiddleware from "middlewares/useMiddleware";

const handler = (req, res) => {
  if (req.method === "GET") {
    if (req.user) {
      const { firstName, lastName, email, profilePicture, dateOfBirth, address } = req.user;
      return res.status(200).send({
        status: "success",
        data: {
          isLoggedIn: true,
          user: {
            firstName,
            lastName,
            email,
            profilePicture,
            dateOfBirth,
            address
          }
        }
      });
    }
    return res.status(200).send({
      status: "error",
      data: {
        isLoggedIn: false,
        user: {}
      }
    });
  }
  if (req.method === "DELETE") {
    delete req.session.userId;
    return res.status(200).send({
      status: "success",
      message: "Vous êtes déconnecté"
    });
  }
  return res.status(405).end();
};

export default useMiddleware(handler);
