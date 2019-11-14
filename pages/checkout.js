import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "components/CustomButtons/Button";

const dev = process.env.NODE_ENV !== "production";
export const server = dev ? "http://localhost:3000" : "https://laflammeconnectee.fr";

function CheckoutPage() {
  const [stripe, setStripe] = useState(null);

  useEffect(() => setStripe(window.Stripe(process.env.STRIPE_PUBLIC_KEY_TEST)), []);

  const goToCheckout = () => {
    const values = {
      name: "flo"
    };
    axios
      .post("/api/checkout/getCheckoutSession", values)
      .then(response => {
        stripe.redirectToCheckout({
          sessionId: response.data.id
        });
      })
      .catch(error => {
        console.log("error : ", error);
      });
  };

  return <Button onClick={goToCheckout}>Pay</Button>;
}

export default CheckoutPage;
