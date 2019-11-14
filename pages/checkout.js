import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Button from "components/CustomButtons/Button";
import { ShoppingCartContext } from "src/contexts/ShoppingCartContext";

const dev = process.env.NODE_ENV !== "production";
export const server = dev ? "http://localhost:3000" : "https://laflammeconnectee.fr";

function CheckoutPage() {
  const [stripe, setStripe] = useState(null);
  const { items, addItem, removeItem, total } = useContext(ShoppingCartContext);
  console.log("items : ", items);
  useEffect(() => {
    setStripe(window.Stripe(process.env.STRIPE_PUBLIC_KEY_TEST));
  }, []);

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

  return (
    <div>
      <div>{items && items.map(item => <p>{item.name}</p>)}</div>
      <Button onClick={addItem}>+</Button>
      <Button onClick={goToCheckout}>Pay</Button>
    </div>
  );
}

export default CheckoutPage;
