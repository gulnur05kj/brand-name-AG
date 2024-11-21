import { styled, Typography } from "@mui/material";
import React from "react";
import { Icons } from "../assets";

export const Footer = () => {
  return (
    <footer>
      <StyledDIV>
        <StyledDiv>
          <p>
            <Icons.BrandName />
          </p>
          <StyledMain>
            <StyledNav>
              <StyledA href="#"> О нас</StyledA>
              <StyledA href="#"> Контакты </StyledA>
            </StyledNav>
            <StyledNav>
              <StyledA href="#">Способы оплаты</StyledA>
              <StyledA href="#">Условия доставки</StyledA>
            </StyledNav>
            <StyledNav>
              <StyledA href="#">Пользовательское соглашение</StyledA>
              <StyledA href="#">Политика конфиденциальности</StyledA>
            </StyledNav>
          </StyledMain>
        </StyledDiv>
        <STyledBrandName>brandname.com 2023 Все права защищены</STyledBrandName>
      </StyledDIV>
      <StyledSectionFlex>
        <StyledSection>
          <StyledLINK variant="h3">ONLINESSHOP</StyledLINK>
          <StyledLINK variant="h3">ONLINESSHOP</StyledLINK>
        </StyledSection>
        <StyledSection1>
          <StyledLINK variant="h3">ONLINESSHOP</StyledLINK>
          <StyledLINK variant="h3">ONLINESSHOP</StyledLINK>
          <StyledLINK variant="h3">ONLINESSHOP</StyledLINK>
        </StyledSection1>
      </StyledSectionFlex>
    </footer>
  );
};
const StyledSectionFlex = styled("section")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const StyledA = styled("a")({
  textDecoration: "none",
  fontFamily: "Arial",
  fontWeight: "400",
  fontSize: "16px",
  color: "#121314",
});

const StyledNav = styled("nav")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "16px",
});
const StyledMain = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "146px",
});
const StyledSection1 = styled("div")({
  width: "720px",
  height: "82px",
  border: "2px solid black",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  backgroundColor: "#30723F",
});
const StyledSection = styled("section")({
  width: "720px",
  height: "82px",
  border: "2px solid black",
  backgroundColor: "#F2ED72",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
});
const StyledLINK = styled("h3")({
  fontFamily: "Syncopate",
  fontWeight: "700",
  fontSize: "18px",
  lineHeight: "18px",
});
const STyledBrandName = styled("h3")({
  fontFamily: "Arial",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "18.4px",
  display: "flex",
  justifyContent: "center",
  paddingTop: "80px",
});

const StyledDIV = styled("div")({
  height: "266px",
  border: "2px solid black",
});

const StyledDiv = styled("div")({
  padding: "80px 0px 0px 120px",
  display: "flex",
  alignItems: "center",
  gap: "100px",
});
