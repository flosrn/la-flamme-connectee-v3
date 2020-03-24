import React, { useState, useEffect, createContext } from "react";
import manageLocalStorage from "../../utils/manageLocalStorage";

export const CheckoutContext = createContext();

export function CheckoutProvider({ children }) {
  const [address, setAddress] = useState(null);
  const [deliveryMethod, setDeliveryMethod] = useState(null);

  useEffect(() => {
    const addressLS = manageLocalStorage("get", "checkout_address");
    const deliveryMethodLS = manageLocalStorage("get", "delivery_method");
    addressLS && setAddress(addressLS);
    deliveryMethodLS && setDeliveryMethod(deliveryMethodLS);
  }, []);

  const storeAddress = data => {
    setAddress(data);
    manageLocalStorage("set", "checkout_address", address);
  };

  const storeDeliveryMethod = data => {
    setDeliveryMethod(data);
    manageLocalStorage("set", "delivery_method", data);
  };

  return (
    <CheckoutContext.Provider value={{ address, storeAddress, deliveryMethod, storeDeliveryMethod }}>
      {children}
    </CheckoutContext.Provider>
  );
}
