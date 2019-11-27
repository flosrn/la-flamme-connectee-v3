import jwt from "jsonwebtoken";
import cookie from "js-cookie";
import nextCookie from "next-cookies";
import fetch from "isomorphic-unfetch";
import axios from "axios";
import getHost from "./get-host";

export const WINDOW_USER_SCRIPT_VARIABLE = "__USER__";

const signToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
};

export const createSendToken = async user => {
  const token = await signToken(user._id);
  const cookieOptions = {
    expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000)
  };
  cookie.set("token", token, cookieOptions);
};

export const logout = () => {
  cookie.remove("token");
  window.localStorage.setItem("logout", Date.now());
  window.location.href = "/";
};

export const getSessionFromServer = async ctx => {
  const { token } = await nextCookie(ctx);

  const apiUrl = `${getHost()}/users/profile`;

  let currentUser = {};

  if (token) {
    await axios
      .get(apiUrl, {
        // credentials: "include",
        headers: {
          Authorization: `Bearer ${token}`
          // ContentType: "application/json",
          // AccessControlAllowOrigin: "*"
        }
      })
      .then(response => {
        const { user } = response.data.data;
        currentUser = user || {};
        return { currentUser };
      })
      .catch(error => {
        window.location.href = "/";
        return { currentUser };
      });
  }
  return { currentUser };
};

export const getSessionFromClient = () => {
  console.log("getSessionFromClient");
  if (typeof window !== "undefined") {
    const currentUser = window[WINDOW_USER_SCRIPT_VARIABLE] || {};
    return { currentUser };
  }
  return { currentUser: {} };
};

export const authInitialProps = async ctx => {
  return getSessionFromServer(ctx);
  // return ctx.req ? await getSessionFromServer(ctx) : await getSessionFromClient();
};

export const getUserScript = user => {
  return `${WINDOW_USER_SCRIPT_VARIABLE} = ${JSON.stringify(user)};`;
};
