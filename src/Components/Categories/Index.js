import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import {
  SideCategoriesContainer,
  CategorieSection,
  StoreCategoriesContainer,
  SidebarOption,
  SidebarH3,
  StoreContainer,
  StoresH3,
} from "./CategoriesElements";
import SideCategory from "./SideCategory";
import StoreCategories from "./StoreCategories";

function Categories() {
  const sidebarData = [
    {
      icon: "./images/accessoriesIcon.png",
      text: "Accessories",
    },
    {
      icon: "./images/laptopsIcon.png",
      text: "Laptops",
    },
    {
      icon: "./images/fasionIcon.png",
      text: "Fashion",
    },
    {
      icon: "./images/electronicsIcon.png",
      text: "Electronics",
    },
    {
      icon: "./images/gamesIcon.png",
      text: "Games",
    },
    {
      icon: "./images/phoneIcon.png",
      text: "Phones",
    },
    {
      icon: "./images/phoneIcon.png",
      text: "Tablets",
    },
    {
      icon: "./images/phoneIcon.png",
      text: "Fitness",
    },
    {
      icon: "./images/phoneIcon.png",
      text: "Show more",
    },
  ];

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
    1100: { items: 4 },
  };

  return (
    <>
      <CategorieSection>
        <SideCategoriesContainer>
          <SidebarOption active>
            <SidebarH3>All Categories</SidebarH3>
          </SidebarOption>
          {sidebarData.map(({ icon, text }) => (
            <SideCategory Icon={icon} text={text} />
          ))}
        </SideCategoriesContainer>
        <StoreCategoriesContainer>
          <StoreContainer main>
            <StoresH3>Nearby Stores</StoresH3>
            <AliceCarousel
              autoPlay
              infinite
              mouseTracking
              animationType="fadeout"
              autoPlayInterval="8000"
              controlsStrategy="responsive"
              disableDotsControls="true"
              disableButtonsControls="true"
              responsive={responsive}
            >
              <StoreCategories />
              <StoreCategories />
              <StoreCategories />
              <StoreCategories />
            </AliceCarousel>
          </StoreContainer>
          <StoreContainer>
            <StoresH3 main>New Stores</StoresH3>
            <AliceCarousel
              autoPlay
              infinite
              mouseTracking
              animationType="fadeout"
              autoPlayInterval="8000"
              controlsStrategy="responsive"
              disableDotsControls="true"
              disableButtonsControls="true"
              responsive={responsive}
            >
              <StoreCategories main />
              <StoreCategories main />
              <StoreCategories main />
              <StoreCategories main />
            </AliceCarousel>
          </StoreContainer>
        </StoreCategoriesContainer>
      </CategorieSection>
    </>
  );
}

export default Categories;
