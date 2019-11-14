import React, { useState, useEffect, createContext } from "react";
import Cookies from "js-cookie";

const fakeCart = [
  { id: "prod_GB4kHqmbn25Bq3", name: "flam'connect" },
  { id: "prod_GB5utpMXlpVFSL", name: "volcano'connect" }
];

export const ShoppingCartContext = createContext();

export function ShoppingCartProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const cart = Cookies.getJSON("cart");
    console.log("cart from cookies : ", cart);

    if (cart) {
      setProducts(cart);
    }
  }, []);

  const addItem = product => {
    const newItem = products.find(item => item.id === product.id);
    console.log("newItem : ", newItem);
    if (!newItem) {
      product.quantity = 1;
      setProducts(products.concat(product));
      Cookies.set("cart", products);
    } else {
      setProducts(
        products.map(item => (item.id === newItem.id ? Object.assign({}, item, { quantity: item.quantity + 1 }) : item))
      );
      Cookies.set("cart", products);
    }
  };

  const removeItem = product => {
    // console.log("product : ", product);
  };

  return (
    <ShoppingCartContext.Provider value={{ products, addItem, removeItem, total }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
