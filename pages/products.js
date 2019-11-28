import React, { useState, useEffect } from "react";
// core components
import MediaSvg from "components/Media/MediaSvg";
import LayoutPage from "components/Page/LayoutPage";
// sections
// images
import backgroundImage from "public/img/contura/background-contura2.jpg";
import svg1 from "public/img/svg/undraw_add_to_cart_vkjp.svg";
import axios from "axios";
import ProductSection from "../src/sections/HomePage/ProductsSection";
import getHost from "../server/api/get-host";

function ProductsPage() {
  const [products, setProducts] = useState(null);

  // useEffect(() => {
  //   axios
  //     .get(`${getHost()}/products/getProducts`)
  //     .then(response => {})
  //     .catch(error => {
  //       console.log("error : ", error);
  //     });
  // }, []);

  return (
    <LayoutPage backgroundImage={backgroundImage} sectionId="products" backgroundPosition="100% 100%">
      <MediaSvg src={svg1} alt="add-to-cart" size="medium" mt={50} />
      <ProductSection />
    </LayoutPage>
  );
}

export default ProductsPage;
