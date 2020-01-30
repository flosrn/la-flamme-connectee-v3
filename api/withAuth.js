import React from "react";
import Router from "next/router";
import nextCookie from "next-cookies";
import axios from "axios";
import getApiUrl from "utils/getApiUrl";

export const auth = (props, ctx) => {
  const { token } = nextCookie(ctx);
  const isProtectRoute = (props && props.isProtect) || null;
  // If there's no token, it means the user is not logged in
  // If is a protected route, redirect user to login page
  if (!token && isProtectRoute) {
    if (typeof window === "undefined") {
      ctx.res.writeHead(302, { Location: "/login?action=login" });
      ctx.res.end();
    } else {
      Router.push("/login?action=login").then(() => window.scrollTo(0, 0));
    }
  }
  return token;
};

// export const logout = () => {
//   cookie.remove("token");
//   // to support logging out from all windows
//   window.localStorage.setItem("logout", Date.now());
//   Router.push("/login?action=login").then(() => window.scrollTo(0, 0));
// };

export const withAuthSync = WrappedComponent => {
  const Wrapper = props => {
    return <WrappedComponent {...props} />;
  };

  Wrapper.getInitialProps = async ctx => {
    const componentProps = WrappedComponent.getInitialProps && (await WrappedComponent.getInitialProps(ctx));

    const token = auth(componentProps, ctx);
    const apiUrl = `${getApiUrl()}/users/profile`;
    let currentUser = {};

    if (token) {
      await axios
        .get(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(response => {
          const { user } = response.data.data;
          currentUser = user || {};
        })
        .catch(err => {});
    }
    return { ...componentProps, currentUser };
  };
  return Wrapper;
};
