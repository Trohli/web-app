import styled from "styled-components";
import { Button } from "@material-ui/core";

export const CategorieSection = styled.section`
  display: flex;
  align-items: center;
  margin: 20px 0;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  flex-wrap: wrap;
`;
export const StoreCategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  height: 420px;
  padding: 0 30px;
  max-width: 1100px;
  width: 100%;
  box-sizing: border-box;
`;
export const StoreContainer = styled.div`
  background: ${({ main }) =>
    main ? "var(--mainTheme) " : "var(--lightTheme) "};
  padding: 5px 30px;
  border-radius: 1px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 220px;
  height: 100%;
  margin-bottom: 20px;
`;
export const StoreTag = styled.div`
  display: flex;
  flex-direction: column;
  height: 130px;
  width: 220px;
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
  padding: 10px 20px;
  height: 450px;
  box-sizing: border-box;
`;

export const SidebarOption = styled.div`
  width: 100%;
  height: 30px;
  border-radius: 8px;
  padding: 10px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: ${({ spaced }) => (spaced ? "space-between" : "center")};
  box-sizing: border-box;
  background: ${({ active }) =>
    active ? "var(--mainTheme)" : "var(--lightTheme) "};
  color: ${({ active }) => (active ? "var(--lightTheme)" : "var(--mainTheme)")};
  cursor: ${({ active }) => (active ? "none" : "pointer")};

  &:hover {
    transition: all 0.2s ease-in-out;
    background: var(--mainTheme);
    color: var(--lightTheme);
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
