import SecureLS from "secure-ls";

// Local storage encryption
export default function manageLocalStorage(method, name, value) {
  const ls = new SecureLS();
  switch (method) {
    case "set":
      return ls.set(name, value);
    case "get":
      return ls.get(name);
    case "remove":
      return ls.remove(name);
    default:
      return null;
  }
}
