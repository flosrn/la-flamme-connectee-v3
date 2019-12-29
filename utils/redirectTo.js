import Router from "next/router";

export default function redirectTo(destination) {
  Router.push(destination).then(() => window.scrollTo(0, 0));
}
