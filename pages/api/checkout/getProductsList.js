import useMiddleware from "src/middlewares/useMiddleware";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY_TEST);

const handler = async (req, res) => {
  const products = await stripe.products.list();
  res.json(products);
};

export default useMiddleware(handler);
