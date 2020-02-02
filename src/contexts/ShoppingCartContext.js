import React, { useState, useEffect, createContext } from "react";
import manageLocalStorage from "utils/manageLocalStorage";

export const ShoppingCartContext = createContext();

export function ShoppingCartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const cart = manageLocalStorage("get", "cart");
    const cartTotal = manageLocalStorage("get", "cartTotal");
    if (cart && cart.length > 0) {
      setItems(cart);
      setTotal(cartTotal);
    }
  }, []);

  useEffect(() => {
    manageLocalStorage("set", "cart", items);
    manageLocalStorage("set", "cartTotal", total);
  }, [items]);

  const addItem = product => {
    const newItem = items.find(item => item.id === product.id);
    if (!newItem) {
      product.quantity = 1;
      const itemsDestructured = [...items];
      const newArr = itemsDestructured.concat(product);
      setItems(newArr);
    } else {
      setItems(
        items.map(item => (item.id === newItem.id ? Object.assign({}, item, { quantity: item.quantity + 1 }) : item))
      );
    }
    setTotal(total + product.price);
  };

  const removeItem = product => {
    const newItem = items.find(item => item.id === product.id);
    if (newItem && newItem.quantity > 1) {
      setItems(
        items.map(item => (item.id === newItem.id ? Object.assign({}, item, { quantity: item.quantity - 1 }) : item))
      );
    } else {
      const itemsDestructured = [...items];
      const index = itemsDestructured.findIndex(item => item.id === newItem.id);
      itemsDestructured.splice(index, 1);
      setItems(itemsDestructured);
    }
    setTotal(total - product.price);
  };

  const emptyCart = () => {
    setItems([]);
    setTotal(0);
  };

  return (
    <ShoppingCartContext.Provider value={{ items, addItem, removeItem, emptyCart, total }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
