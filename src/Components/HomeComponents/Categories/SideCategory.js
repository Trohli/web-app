import React from "react";
import { SidebarOption, SidebarH3 } from "./CategoriesElements";

function SideCategory({ text, Icon }) {
  return (
    <>
      <SidebarOption spaced>
        <SidebarH3> {text} </SidebarH3>
        <Icon />
      </SidebarOption>
    </>
  );
}

export default SideCategory;
