import useMiddleware from "src/middlewares/useMiddleware";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY_TEST);

const dev = process.env.NODE_ENV !== "production";
export const server = dev ? "http://localhost:3000" : "https://laflammeconnectee.fr";

const handler = async (req, res) => {
  const { name } = req.body;
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        name: "T-shirt",
        description: "Comfortable cotton t-shirt",
        images: ["https://example.com/t-shirt.png"],
        amount: 500,
        currency: "eur",
        quantity: 1
      }
    ],
    success_url: `${server}/checkout/success/session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${server}/checkout/cancel`
  });

  res.json(session);
};

export default useMiddleware(handler);
