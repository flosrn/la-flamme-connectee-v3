import axios from "axios";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import getApiUrl from "utils/getApiUrl";
import redirectTo from "utils/redirectTo";

// LOGIN
export function login({ type, email, password, setLoading }) {
  axios.post(`${getApiUrl()}/auth/${type}`, { email, password }).then(response => {
    Swal.fire({
      type: response.data.status,
      title: response.data.message,
      text: response.data.text,
      confirmButtonColor: "#ff7961"
    }).then(result => {
      if (response.data.status === "success" && result.value) {
        const cart = Cookies.getJSON("cart");
        if (cart.length > 0) {
          redirectTo("/shopping-cart");
        } else {
          redirectTo("/");
        }
      }
    });
    if (response.data.status === "success" && type !== "forgotPassword") {
      Cookies.set("token", response.data.data.token, {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000)
      });
    }
    setLoading(false);
  });
}

// REGISTER
export function register({ firstName, lastName, email, password, passwordConfirm, setLoading }) {
  axios
    .post(`${getApiUrl()}/auth/register`, { firstName, lastName, email, password, passwordConfirm })
    .then(response => {
      Swal.fire({
        type: response.data.status,
        title: response.data.message,
        confirmButtonColor: "#ff7961"
      }).then(result => {
        if (response.data.status === "success" && result.value) {
          const cart = Cookies.getJSON("cart");
          if (cart.length > 0) {
            redirectTo("/shopping-cart");
          } else {
            redirectTo("/");
          }
        }
      });
      if (response.data.status === "success") {
        Cookies.set("token", response.data.data.token, {
          expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000)
        });
      }
      setLoading(false);
    });
}

// LOGOUT
export function logout() {
  axios.get(`${getApiUrl()}/auth/logout`).then(response => {
    Swal.fire({
      type: response.data.status,
      title: response.data.message,
      timer: 4000
    });
    if (response.data.status === "success") {
      Cookies.remove("token");
      redirectTo("/login?action=login");
    }
  });
}

// RESET PASSWORD
export function resetPassword({ password, passwordConfirm, token, setLoading }) {
  axios.patch(`${getApiUrl()}/auth/resetPassword`, { password, passwordConfirm, token }).then(response => {
    Swal.fire({
      type: response.data.status,
      title: response.data.message,
      text: response.data.text,
      confirmButtonColor: "#ff7961"
    }).then(result => {
      if (response.data.status === "success" && result.value) {
        redirectTo("/login?action=login");
      }
    });
    setLoading(false);
  });
}

// UPDATE PROFILE
export function updateProfile({ values, setEditMode, setLoading }) {
  setLoading(true);
  axios.patch(`${getApiUrl()}/users/updateProfile`, { values }).then(response => {
    setTimeout(() => {
      Swal.fire({
        type: response.data.status,
        title: response.data.message,
        confirmButtonColor: "#ff7961",
        position: "bottom"
      });
      setEditMode(false);
      setLoading(false);
    }, 1500);
  });
}

// UPDATE PASSWORD
export function updatePassword({ userId, values, setEditMode, setLoading, setValues }) {
  axios.patch(`${getApiUrl()}/auth/updatePassword`, { userId, values }).then(response => {
    setTimeout(() => {
      Swal.fire({
        type: response.data.status,
        title: response.data.message,
        confirmButtonColor: "#ff7961",
        position: "bottom"
      });
      setEditMode(false);
      setLoading(false);
      if (response.data.status === "success") {
        setValues({
          ...values,
          passwordCurrent: "",
          password: "",
          passwordConfirm: ""
        });
      }
    }, 1500);
  });
}

// GET PRODUCTS
export function getProducts({ setProducts }) {
  axios
    .get(`${getApiUrl()}/products/getProducts`)
    .then(response => {
      setProducts(response.data.data.products);
    })
    .catch(error => {
      console.log("error : ", error);
    });
}

// GET ORDERS
export function getOrders({ userId, setOrders }) {
  axios
    .get(`${getApiUrl()}/orders/${userId}`)
    .then(response => {
      setOrders(response.data.data.orders);
    })
    .catch(error => {
      console.log("error : ", error);
    });
}

// CREATE CHECKOUT SESSION
export function createCheckoutSession({ values, currentUser, items, stripe, setLoading }) {
  axios
    .patch(`${getApiUrl()}/users/updateProfile`, {
      values
    })
    .then(() => {
      setTimeout(() => {
        axios
          .post(`${getApiUrl()}/checkout/createCheckoutSession`, { currentUser, items })
          .then(response => {
            stripe.redirectToCheckout({
              sessionId: response.data.session.id
            });
          })
          .catch(error => {
            console.log("error : ", error);
          });
        setLoading(false);
      }, 1500);
    });
  setLoading(false);
}
