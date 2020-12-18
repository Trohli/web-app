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
  FashionIcon,
  MobileIcon,
  AssesoriesIcon,
  ElectronicsIcon,
  LaptopIcon,
  GamesIcon,
  GadgetsIcon,
  FitnessIcon,
  ExpandIcon,
} from "./CategoriesElements";
import SideCategory from "./SideCategory";
import StoreCategories from "./StoreCategories";

function Categories() {
  const sidebarData = [
    {
      icon: AssesoriesIcon,
      text: "Accessories",
    },
    {
      icon: LaptopIcon,
      text: "Laptops",
    },
    {
      icon: FashionIcon,
      text: "Fashion",
    },
    {
      icon: ElectronicsIcon,
      text: "Electronics",
    },
    {
      icon: GamesIcon,
      text: "Games",
    },
    {
      icon: MobileIcon,
      text: "Phones",
    },
    {
      icon: GadgetsIcon,
      text: "Gadgets",
    },
    {
      icon: FitnessIcon,
      text: "Fitness",
    },
    {
      icon: ExpandIcon,
      text: "Show more",
    },
  ];

  const storeCategoryData = [{}];

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
