import React, { useState } from "react";
import {
  OptionContainer,
  OptionText,
  VideoIcon,
  HomeIcon,
  SearchIcon,
  ClassIcon,
  CodeIcon,
  TagIcon,
} from "./NavOptionElements";

function NavOptions({
  Link,
  Home,
  Search,
  Videos,
  Classes,
  Snippets,
  Tags,
  Text,
}) {
  const [face, setFace] = useState(false);

  const ShowFace = () => setFace(!face);

  return (
    <>
      <OptionContainer
        to={Link}
        onMouseEnter={ShowFace}
        onMouseLeave={ShowFace}
      >
        {Home && <HomeIcon />}
        {Search && <SearchIcon />}
        {Videos && <VideoIcon />}
        {Classes && <ClassIcon />}
        {Snippets && <CodeIcon />}
        {Tags && <TagIcon />}
        <OptionText shown={face}>{Text}</OptionText>
      </OptionContainer>
    </>
  );
}

export default NavOptions;
