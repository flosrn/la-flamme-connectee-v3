import React from "react";
import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";

export default function HeaderSection({ currentUser }) {
  return (
    <Header
      color="transparent"
      links={<HeaderLinks user={currentUser} />}
      fixed
      user={currentUser}
      hiddenLogo
      changeColorOnScroll={{
        height: 50,
        color: "dark",
        navColor: "black"
      }}
    />
  );
}
