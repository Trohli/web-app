import React from "react";
import { SidebarOption, SidebarH3, SidebarImg } from "./CategoriesElements";

function SideCategory({ text, Icon }) {
  return (
    <>
      <SidebarOption spaced>
        <SidebarH3> {text} </SidebarH3>
        <SidebarImg src={Icon} />
      </SidebarOption>
    </>
  );
}

export default SideCategory;
