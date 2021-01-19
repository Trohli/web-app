import styled from "styled-components";
import { Button } from "@material-ui/core";
import { VscDeviceMobile } from "react-icons/vsc";
import { MdDevicesOther } from "react-icons/md";
import { MdFitnessCenter } from "react-icons/md";
import { CgSmartphoneChip } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdWatch } from "react-icons/io";
import { IoMdShirt } from "react-icons/io";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";

export const CategorieSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  margin: 20px auto;
  height: 100%;
  max-width: 1300px;
  width: 100%;
  box-sizing: border-box;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;
export const StoreCategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.8;
  justify-content: space-between;
  padding: 0 30px;
  max-width: 1050px;
  width: 100%;
  box-sizing: border-box;

  @media screen and (max-width: 1200px) {
    flex: 1;
    max-width: 1300px;
    width: 100%;
    padding: 0;
  }
`;
export const StoreContainer = styled.div`
  background: ${({ main }) =>
    main ? "var(--mainTheme) " : "var(--lightTheme) "};
  padding: 5px 30px;
  border-radius: 1px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;
export const StoreSlider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const StoreTag = styled.div`
  display: flex;
  flex-direction: column;
  height: 130px;
  width: 95%;
  margin-bottom: 10px;
  margin-left: 10px;
  padding: 10px;
  box-sizing: border-box;
  background: ${({ main }) =>
    main ? "var(--mainTheme) " : "var(--lightTheme) "};
`;

export const StoreTagTop = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex: 1;
`;
export const StoreTagTopContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  height: 100%;
  justify-content: space-evenly;
  box-sizing: border-box;
`;

export const StoreImg = styled.img`
  height: 80px;
  width: 80px;
`;

export const StoresH3 = styled.div`
  margin-bottom: 10px;
  font-size: ${({ small }) => (small ? "16px" : "20px")};
  font-weight: ${({ small }) => (small ? "bold" : "bolder")};
  color: ${({ main }) => (main ? "var(--mainTheme) " : "var(--subTheme) ")};
`;
export const StoresContentH3 = styled.div`
  font-size: ${({ small }) => (small ? "16px" : "20px")};
  font-weight: ${({ small }) => (small ? "bold" : "bolder")};
  color: ${({ main }) => (main ? " var(--lightTheme)  " : " var(--mainTheme)")};
`;

export const StoreBtn = styled(Button)`
  border-radius: 8px !important;
  background: ${({ main }) =>
    main ? "var(--lightTheme) " : " var(--mainTheme) "} !important;
  padding: 5px !important;
  color: ${({ main }) =>
    main ? " var(--mainTheme)  " : "var(--lightTheme)  "} !important;
  font-size: 15px !important;
  font-weight: bold !important;
  margin: 5px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ main }) =>
      main ? " var(--mainTheme)" : "var(--lightTheme)  "} !important;
    color: ${({ main }) =>
      main ? "  var(--lightTheme)  " : " var(--mainTheme)"} !important;
  }
`;

export const StoreTagButtom = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

export const StoreTagButtomH4 = styled.h4`
  font-size: 12px;
  color: ${({ main }) =>
    main ? " var(--lightTheme) " : " var(--mainTheme)  "} !important;
  font-weight: lighter;
`;

export const SideCategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.2;
  padding: 10px 10px;
  justify-content: space-between;
  box-sizing: border-box;

  @media screen and (max-width: 1200px) {
    flex-direction: row;
    overflow-x: scroll;
    width: 100%;
  }
`;

export const SidebarOption = styled.div`
  width: 100%;
  min-width: 150px;
  height: 30px;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  align-items: center;
  margin: 0 5px;
  justify-content: ${({ spaced }) => (spaced ? "space-between" : "center")};
  box-sizing: border-box;
  background: ${({ active }) =>
    active ? "var(--mainTheme)" : "var(--lightTheme) "};
  color: ${({ active }) =>
    active ? "var(--lightTheme)" : "var(--mainTheme) !important"};
  cursor: ${({ active }) => (active ? "none" : "pointer")};

  &:hover {
    transform: scale(${({ spaced }) => (spaced ? "1.04" : "1")});
    transition: all 0.2s ease-in-out;
    background: var(--mainTheme);
    color: var(--lightTheme) !important;
  }
`;
export const SidebarH3 = styled.div`
  font-size: 16px;
  font-weight: bolder;
`;

export const SidebarImg = styled.img`
  height: 10px;
  z-index: 1;
  color: var(--lightTheme);
`;
export const FashionIcon = styled(IoMdShirt)`
  font-size: 20px !important;
`;
export const MobileIcon = styled(VscDeviceMobile)`
  font-size: 20px !important;
`;
export const GadgetsIcon = styled(MdDevicesOther)`
  font-size: 20px !important;
`;
export const AssesoriesIcon = styled(IoMdWatch)`
  font-size: 20px !important;
`;
export const ElectronicsIcon = styled(CgSmartphoneChip)`
  font-size: 20px !important;
`;
export const LaptopIcon = styled(LaptopMacIcon)`
  font-size: 20px !important;
`;
export const GamesIcon = styled(SportsEsportsIcon)`
  font-size: 20px !important;
`;
export const FitnessIcon = styled(MdFitnessCenter)`
  font-size: 20px !important;
`;
export const ExpandIcon = styled(IoIosArrowDown)`
  font-size: 20px !important;
`;
