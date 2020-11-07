import styled from "styled-components";
import { Link } from "react-router-dom";
import { SiHomeassistant } from "react-icons/si";
import { FaSearchengin } from "react-icons/fa";
import { MdSlowMotionVideo } from "react-icons/md";
import { VscSymbolClass } from "react-icons/vsc";
import { FaCode } from "react-icons/fa";
import { ImPriceTags } from "react-icons/im";

export const OptionContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--LightTheme);
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
`;
export const OptionText = styled.h5`
  font-weight: lighter;
  color: var(--darkTheme);
  background: var(--LightTheme);
  border-radius: 4px;
  padding: 5px;
  font-size: 15px;
  transition: 0.2s ease-in-out;
  visibility: ${({ shown }) => (shown ? "visible" : "hidden")};
`;
export const HomeIcon = styled(SiHomeassistant)`
  font-size: 35px;
  margin: 5px;
`;
export const SearchIcon = styled(FaSearchengin)`
  font-size: 35px;
  margin: 5px;
`;
export const VideoIcon = styled(MdSlowMotionVideo)`
  font-size: 35px;
  margin: 5px;
`;
export const ClassIcon = styled(VscSymbolClass)`
  font-size: 35px;
  margin: 5px;
`;
export const CodeIcon = styled(FaCode)`
  font-size: 35px;
  margin: 5px;
`;
export const TagIcon = styled(ImPriceTags)`
  font-size: 35px;
  margin: 5px;
`;
