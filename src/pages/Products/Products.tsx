import React, { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  ProductsContainer,
  BackLinkWrapper,
  LinkBackIcon,
  CardContainer,
  CardMenu,
  CardImg,
  CardTextContainer,
  CardTitle,
  ColorWrapper,
  ColorContainer,
  ColorText,
  CardImgWrapper,
  PriceWrapper,
  PriceDollar,
  Price,
  CardImgNews,
  AddBtn,
} from "./Products.styled";

const cardsColors = {
  shirt: "#e2d7c2",
  bag: "#E7C495",
  white: "#FFFFFF",
  black: "#000",
  green: "#20c997",
  top: "#4263eb",
  sale: "#f03e3e",
};

export default function Products() {
  const navigate = useNavigate();
  const [scrollable, setScrollable] = useState(false);
  const containerRef = useRef();

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const container = containerRef.current;
    const handleScroll = () => {
      setScrollable(container.scrollTop > 0);
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ProductsContainer ref={containerRef} $scrollable={scrollable}>
      <BackLinkWrapper onClick={goBack}>
        <LinkBackIcon />
      </BackLinkWrapper>
      <CardMenu>
        <li>
          <CardContainer>
            <CardImgWrapper>
              <CardImgNews $cardsColors={cardsColors.top}>Top</CardImgNews>
              <CardImg
                src="./images/product1.jpg"
                alt="Unisex Tri-Blend T-Shirt"
              />
            </CardImgWrapper>
            <CardTextContainer>
              <CardTitle>Unisex Tri-Blend T-Shirt</CardTitle>
              <ColorContainer>
                <ColorText>Color:</ColorText>
                <ColorWrapper $cardsColors={cardsColors.shirt}></ColorWrapper>
                <ColorText>Oatmeal Triblend</ColorText>
              </ColorContainer>
              <div>
                <ColorText>Size: XS/S/M/L/XL</ColorText>
              </div>
              <PriceWrapper>
                <PriceDollar>$</PriceDollar>
                <Price>24.75</Price>
              </PriceWrapper>
              <AddBtn type="button">Add to cart</AddBtn>
            </CardTextContainer>
          </CardContainer>
        </li>
        <li>
          <CardContainer>
            <CardImgWrapper>
              <CardImg src="./images/product2.jpg" alt="Large Eco Tote" />
            </CardImgWrapper>
            <CardTextContainer>
              <CardTitle>Large Eco Tote</CardTitle>
              <ColorContainer>
                <ColorText>Color:</ColorText>
                <ColorWrapper $cardsColors={cardsColors.bag}></ColorWrapper>
                <ColorText>Oyster</ColorText>
              </ColorContainer>
              <div>
                <ColorText>Size: One size</ColorText>
              </div>
              <PriceWrapper>
                <PriceDollar>$</PriceDollar>
                <Price>24.95</Price>
              </PriceWrapper>
              <AddBtn type="button">Add to cart</AddBtn>
            </CardTextContainer>
          </CardContainer>
        </li>
        <li>
          <CardContainer>
            <CardImgWrapper>
              <CardImgNews $cardsColors={cardsColors.green}>New</CardImgNews>
              <CardImg src="./images/product3.jpg" alt="Laptop Sleeve" />
            </CardImgWrapper>
            <CardTextContainer>
              <CardTitle>Laptop Sleeve</CardTitle>
              <div>
                <ColorText>Size: 13″</ColorText>
              </div>
              <PriceWrapper>
                <PriceDollar>$</PriceDollar>
                <Price>24.95</Price>
              </PriceWrapper>
              <AddBtn type="button">Add to cart</AddBtn>
            </CardTextContainer>
          </CardContainer>
        </li>
        <li>
          <CardContainer>
            <CardImgWrapper>
              <CardImgNews $cardsColors={cardsColors.sale}>Sale</CardImgNews>
              <CardImg src="./images/product4.jpg" alt="Snap Case for iPhone" />
            </CardImgWrapper>
            <CardTextContainer>
              <CardTitle>Snap Case for iPhone</CardTitle>
              <ColorContainer>
                <ColorText>Color:</ColorText>
                <ColorWrapper $cardsColors={cardsColors.white}></ColorWrapper>
                <ColorText>Glossy</ColorText>
              </ColorContainer>
              <div>
                <ColorText>Size: iPhone 13</ColorText>
              </div>
              <PriceWrapper>
                <PriceDollar>$</PriceDollar>
                <Price>19.95</Price>
              </PriceWrapper>
              <AddBtn type="button">Add to cart</AddBtn>
            </CardTextContainer>
          </CardContainer>
        </li>
        <li>
          <CardContainer>
            <CardImgWrapper>
              <CardImg
                src="./images/product5.jpg"
                alt="All-Over Print Premium Pillow"
              />
            </CardImgWrapper>
            <CardTextContainer>
              <CardTitle>All-Over Premium Pillow</CardTitle>
              <ColorContainer>
                <ColorText>Color:</ColorText>
                <ColorWrapper $cardsColors={cardsColors.white}></ColorWrapper>
                <ColorText>White</ColorText>
              </ColorContainer>
              <div>
                <ColorText>Size: 18″×18″</ColorText>
              </div>
              <PriceWrapper>
                <PriceDollar>$</PriceDollar>
                <Price>25.95</Price>
              </PriceWrapper>
              <AddBtn type="button">Add to cart</AddBtn>
            </CardTextContainer>
          </CardContainer>
        </li>
        <li>
          <CardContainer>
            <CardImgWrapper>
              <CardImg src="./images/product6.jpg" alt="Jigsaw Puzzle" />
            </CardImgWrapper>
            <CardTextContainer>
              <CardTitle>Jigsaw Puzzle</CardTitle>
              <div>
                <ColorText>Size: 252 pieces</ColorText>
              </div>
              <PriceWrapper>
                <PriceDollar>$</PriceDollar>
                <Price>22.95</Price>
              </PriceWrapper>
              <AddBtn type="button">Add to cart</AddBtn>
            </CardTextContainer>
          </CardContainer>
        </li>
        <li>
          <CardContainer>
            <CardImgWrapper>
              <CardImg
                src="./images/product7.jpg"
                alt="Premium Luster Photo Paper Framed Poster"
              />
            </CardImgWrapper>
            <CardTextContainer>
              <CardTitle>Premium Framed Poster</CardTitle>
              <ColorContainer>
                <ColorText>Color:</ColorText>
                <ColorWrapper $cardsColors={cardsColors.white}></ColorWrapper>
                <ColorText>White</ColorText>
              </ColorContainer>
              <div>
                <ColorText>Size: 8″×10″</ColorText>
              </div>
              <PriceWrapper>
                <PriceDollar>$</PriceDollar>
                <Price>28</Price>
              </PriceWrapper>
              <AddBtn type="button">Add to cart</AddBtn>
            </CardTextContainer>
          </CardContainer>
        </li>
        <li>
          <CardContainer>
            <CardImgWrapper>
              <CardImgNews $cardsColors={cardsColors.sale}>Sale</CardImgNews>
              <CardImg
                src="./images/product8.jpg"
                alt="Hardcover Bound Notebook"
              />
            </CardImgWrapper>
            <CardTextContainer>
              <CardTitle>Hardcover Notebook</CardTitle>
              <ColorContainer>
                <ColorText>Color:</ColorText>
                <ColorWrapper $cardsColors={cardsColors.black}></ColorWrapper>
                <ColorText>Black</ColorText>
              </ColorContainer>
              <div>
                <ColorText>Size: 5.5″×8.5″</ColorText>
              </div>
              <PriceWrapper>
                <PriceDollar>$</PriceDollar>
                <Price>19.95</Price>
              </PriceWrapper>
              <AddBtn type="button">Add to cart</AddBtn>
            </CardTextContainer>
          </CardContainer>
        </li>
      </CardMenu>
    </ProductsContainer>
  );
}
