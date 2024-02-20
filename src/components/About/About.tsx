import React, { Suspense, useEffect, useRef, useState } from "react";
import {
  AboutContainer,
  ImgWrapper,
  AboutTextWrapper,
  Image,
  AboutTitle,
  AboutText,
  ProductsBtn,
} from "./About.styled";
import { Link, Outlet, useLocation } from "react-router-dom";
import Products from "../../pages/Products/Products";

export default function About() {
  const location = useLocation();
  const isHomePage = location.pathname === "/italiya/";

  // const toggleProducts = () => {
  //   setShowProducts((prev) => !prev);
  // };

  return (
    <AboutContainer>
      <ImgWrapper>
        <Image
          src="./images/italiya.jpg"
          alt="Hello, My name is Italiya, I'm a lovely orange cat"
        />
      </ImgWrapper>
      <AboutTextWrapper>
        {isHomePage ? (
          <>
            <AboutTitle>
              Meet Italiya: The Purrsonality Behind Whisker Wonders
            </AboutTitle>
            <AboutText>
              Step into the enchanting world of Italiya, our charismatic orange
              cat. Indulge in whisker wonders with our curated collection of
              cat-themed treasures — cozy t-shirts, charming cups, and
              delightful souvenirs. Embrace feline magic and bring a touch of
              Italiya's charm into your everyday moments. Explore, shop, and
              immerse yourself in the joy of cats!
            </AboutText>
            <ProductsBtn>
              <Link to="products">showproducts</Link>
            </ProductsBtn>
          </>
        ) : (
          <Suspense>
            <Outlet />
          </Suspense>
        )}
      </AboutTextWrapper>
    </AboutContainer>
  );
}
