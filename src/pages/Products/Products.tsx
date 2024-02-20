import React from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  ProductsContainer,
  BackLinkWrapper,
  LinkBackIcon,
} from "./Products.styled";

export default function Products() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <ProductsContainer>
      <BackLinkWrapper onClick={goBack}>
        <LinkBackIcon />
      </BackLinkWrapper>
    </ProductsContainer>
  );
}
