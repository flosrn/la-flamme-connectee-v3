import React, { useState, useEffect } from "react";
// core components
import MediaSvg from "components/Media/MediaSvg";
import LayoutPage from "components/Page/LayoutPage";
// sections
// images
import backgroundImage from "static/img/contura/background-contura2.jpg";
import svg1 from "static/img/svg/undraw_add_to_cart_vkjp.svg";
import axios from "axios";
import ProductSection from "../src/sections/HomePage/ProductsSection";

function ProductsPage() {
  const [products, setProducts] = useState(null);

  // useEffect(() => {
  //   axios
  //     .get("/api/checkout/getProductsList")
  //     .then(response => {
  //       const productData = response.data.data;
  //       setProducts(productData);
  //     })
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
