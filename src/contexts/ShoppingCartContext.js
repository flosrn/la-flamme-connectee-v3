import React, { useState, useEffect, createContext } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const fakeCart = [
  { id: "prod_GB4kHqmbn25Bq3", name: "flam'connect" },
  { id: "prod_GB5utpMXlpVFSL", name: "volcano'connect" }
];

export const ShoppingCartContext = createContext();

export function ShoppingCartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const cart = Cookies.getJSON("cart");
    console.log("cart from cookies : ", cart);

    if (cart) {
      setItems(cart);
    }

    axios
      .get("/api/checkout/getProductsList")
      .then(response => {
        console.log("response : ", response);
      })
      .catch(error => {
        console.log("error : ", error);
      });
  }, []);

  useEffect(() => {
    Cookies.set("cart", items);
    console.log("items : ", items);
  }, [items]);

  const addItem = product => {
    const newItem = items.find(item => item.id === product.id);
    if (!newItem) {
      product.quantity = 1;
      setItems(items.concat(product));
    } else {
      setItems(
        items.map(item => (item.id === newItem.id ? Object.assign({}, item, { quantity: item.quantity + 1 }) : item))
      );
    }
  };

  const removeItem = product => {
    const itemIndex = items.find(item => item.id === product.id);
    if (itemIndex && itemIndex.quantity > 1) {
      setItems(
        items.map(item => (item.id === itemIndex.id ? Object.assign({}, item, { quantity: item.quantity - 1 }) : item))
      );
    }
  };

  const deleteItem = productId => {
    if (items.length > 1) {
      items.map(item => {
        if (item.id === productId) {
          setItems(items.splice(item, 1));
        }
      });
    } else {
      setItems([]);
    }
  };

  return (
    <ShoppingCartContext.Provider value={{ items, addItem, removeItem, deleteItem, total }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
