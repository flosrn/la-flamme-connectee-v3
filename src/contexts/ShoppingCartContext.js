import React, { useState, useEffect, createContext } from "react";
import manageLocalStorage from "utils/manageLocalStorage";

export const ShoppingCartContext = createContext();

export function ShoppingCartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const cart = manageLocalStorage("get", "cart");
    const cartTotal = manageLocalStorage("get", "cartTotal");
    cart && cart.length > 0 && setItems(cart);
    cartTotal && setTotal(cartTotal);
  }, []);

  const totalCalculation = () => {
    const price = [];
    items.length > 0 &&
      items.map(item => {
        price.push(item.price * item.quantity);
      });
    return price.length > 0 ? price.reduce((a, b) => a + b, 0) : 0;
  };

  useEffect(() => {
    manageLocalStorage("set", "cart", items);
    const deliveryMethodLS = manageLocalStorage("get", "delivery_method");
    const shippingCost = deliveryMethodLS ? deliveryMethodLS.cost : 0;
    const amount = totalCalculation() + shippingCost;
    // manageLocalStorage("set", "cartTotal", amount);
    setTotal(amount);
  }, [items]);

  useEffect(() => {
    manageLocalStorage("set", "cartTotal", total);
  }, [total]);

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
    global.analytics.track(`${product.name} retiré du panier`);
  };

  const emptyCart = () => {
    setItems([]);
    setTotal(0);
    manageLocalStorage("remove", "cart");
    manageLocalStorage("remove", "cartTotal");
    manageLocalStorage("remove", "delivery_method");
  };

  const storeCart = cart => {
    setItems(cart);
  };

  const addShippingFees = (method, cost) => {
    const amount = totalCalculation();
    method === "colissimo" && setTotal(amount + cost);
    method === "relay" && setTotal(amount);
  };

  return (
    <ShoppingCartContext.Provider value={{ items, addItem, removeItem, emptyCart, storeCart, addShippingFees, total }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
