import React from "react";
import {
  MostSearchSection,
  MostSearchH2,
  SearchKeyWordsContainer,
  KeyWordRow,
  MostSearchH3,
} from "./MostSearchElements";

function MostSearch() {
  return (
    <>
      <MostSearchSection>
        <MostSearchH2>Most Search Keywords</MostSearchH2>
        <SearchKeyWordsContainer>
          <KeyWordRow>
            <MostSearchH3 bold start end>
              Laptops :
            </MostSearchH3>
            <MostSearchH3>Apple Laptop</MostSearchH3>
            <MostSearchH3>Apple Laptop</MostSearchH3>
            <MostSearchH3>Apple Laptop</MostSearchH3>
            <MostSearchH3>Apple Laptop</MostSearchH3>
            <MostSearchH3>Apple Laptop</MostSearchH3>
            <MostSearchH3>Apple Laptop</MostSearchH3>
            <MostSearchH3>Apple Laptop</MostSearchH3>
            <MostSearchH3 end>Apple Laptop</MostSearchH3>
          </KeyWordRow>
          <KeyWordRow>
            <MostSearchH3 bold start end>
              Tablets :
            </MostSearchH3>
            <MostSearchH3>Apple Laptop</MostSearchH3>
            <MostSearchH3>Apple Laptop</MostSearchH3>
            <MostSearchH3>Apple Laptop</MostSearchH3>
            <MostSearchH3>Apple Laptop</MostSearchH3>
            <MostSearchH3>Apple Laptop</MostSearchH3>
            <MostSearchH3>Apple Laptop</MostSearchH3>
            <MostSearchH3>Apple Laptop</MostSearchH3>
            <MostSearchH3>Apple Laptop</MostSearchH3>
            <MostSearchH3 end>Apple Laptop</MostSearchH3>
          </KeyWordRow>
          <KeyWordRow>
            <MostSearchH3 bold start end>
              Mobile Phones :
            </MostSearchH3>
            <MostSearchH3>Apple Laptop</MostSearchH3>
            <MostSearchH3>Apple Laptop</MostSearchH3>
            <MostSearchH3>Apple Laptop</MostSearchH3>
            <MostSearchH3>Apple Laptop</MostSearchH3>
            <MostSearchH3>Apple Laptop</MostSearchH3>
            <MostSearchH3>Apple Laptop</MostSearchH3>
            <MostSearchH3 end>Apple Laptop</MostSearchH3>
          </KeyWordRow>
        </SearchKeyWordsContainer>
      </MostSearchSection>
    </>
  );
}

export default MostSearch;
