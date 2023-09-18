import React from "react";
import RootLayout from "../../../components/Layouts/RootLayout";

const ProductsHomePage = () => {
  return (
    <div>
      <h1>This is products home page...</h1>
    </div>
  );
};

export default ProductsHomePage;

ProductsHomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
