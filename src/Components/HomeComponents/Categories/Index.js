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
  StoreTop,
  StoreSlider,
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
  ToStoresContainer,
  ToStoresIcon,
  ToStoresText,
  StoreTopContainer,
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

  const storeCategoryData = [
    {
      store: "st.Kicks",
      storeImg: "./images/sk.png",
      tagA: "shoes",
      tagB: "clothes",
      tagC: "rings",
      tagD: "fashion",
      id: 1,
    },
    {
      store: "Royals",
      storeImg: "./images/sk.png",
      tagA: "shoes",
      tagB: "clothes",
      tagC: "rings",
      tagD: "fashion",
      id: 2,
    },
    {
      store: "st.Kicks",
      storeImg: "./images/sk.png",
      tagA: "shoes",
      tagB: "clothes",
      tagC: "rings",
      tagD: "fashion",
      id: 3,
    },
    {
      store: "st.Kicks",
      storeImg: "./images/sk.png",
      tagA: "shoes",
      tagB: "clothes",
      tagC: "rings",
      tagD: "fashion",
      id: 4,
    },
    {
      store: "st.Kicks",
      storeImg: "./images/sk.png",
      tagA: "shoes",
      tagB: "clothes",
      tagC: "rings",
      tagD: "fashion",
      id: 5,
    },
    {
      store: "st.Kicks",
      storeImg: "./images/sk.png",
      tagA: "shoes",
      tagB: "clothes",
      tagC: "rings",
      tagD: "fashion",
      id: 6,
    },
  ];

  const responsive = {
    540: { items: 1 },
    622: { items: 2 },
    770: { items: 3 },
    1025: { items: 4 },
  };

  const NearbystoreItems = storeCategoryData.map(
    ({ store, storeImg, tagA, tagB, tagC, tagD, id }, i) => (
      <StoreCategories
        key={id + i}
        store={store}
        storeImg={storeImg}
        tagA={tagA}
        tagB={tagB}
        tagC={tagC}
        tagD={tagD}
      />
    )
  );
  const NewstoreItems = storeCategoryData.map(
    ({ store, storeImg, tagA, tagB, tagC, tagD, id }, i) => (
      <StoreCategories
        main
        key={id + i}
        store={store}
        storeImg={storeImg}
        tagA={tagA}
        tagB={tagB}
        tagC={tagC}
        tagD={tagD}
      />
    )
  );

  return (
    <>
      <CategorieSection>
        <SideCategoriesContainer>
          <SidebarOption active>
            <SidebarH3>All Categories</SidebarH3>
          </SidebarOption>
          {sidebarData.map(({ icon, text }, i) => (
            <SideCategory key={i} Icon={icon} text={text} />
          ))}
        </SideCategoriesContainer>
        <StoreCategoriesContainer>
          <StoreContainer main>
            <StoreTopContainer>
              <StoresH3>Nearby Stores</StoresH3>
              <ToStoresContainer to="/stores">
                <ToStoresText>To Stores</ToStoresText>
                <ToStoresIcon />
              </ToStoresContainer>
            </StoreTopContainer>
            <StoreSlider>
              <AliceCarousel
                autoPlay
                infinite
                mouseTracking
                items={NearbystoreItems}
                animationType="fadeout"
                autoPlayInterval="8000"
                controlsStrategy="responsive"
                disableDotsControls="true"
                disableButtonsControls="true"
                responsive={responsive}
              />
            </StoreSlider>
          </StoreContainer>
          <StoreContainer>
            <StoreTop>
              <StoresH3 main>New Stores</StoresH3>
              <ToStoresContainer main to="/stores">
                <ToStoresText>To Stores</ToStoresText>
                <ToStoresIcon />
              </ToStoresContainer>
            </StoreTop>
            <StoreSlider>
              <AliceCarousel
                autoPlay
                infinite
                mouseTracking
                items={NewstoreItems}
                animationType="fadeout"
                autoPlayInterval="8000"
                controlsStrategy="responsive"
                disableDotsControls="true"
                disableButtonsControls="true"
                responsive={responsive}
              />
            </StoreSlider>
          </StoreContainer>
        </StoreCategoriesContainer>
      </CategorieSection>
    </>
  );
}

export default Categories;
