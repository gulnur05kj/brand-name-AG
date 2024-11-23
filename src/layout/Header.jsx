import React from "react";
import { AppBar, Toolbar, Typography, styled } from "@mui/material";

import Logo from "../assets/image/Logo.png";
import { Icons } from "../assets";

const Header = () => {
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ border: "none" }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 20px",
        }}
      >
        <div display="flex" alignItems="center">
          <StyledImg>
            <img src={Logo} alt="" />
          </StyledImg>
        </div>
        <StyledBox>
          <StyledIconButton>
            <Icons.User />
            <Typography variant="caption">Войти</Typography>
          </StyledIconButton>
          <StyledIconButton>
            <Icons.Heart />
            <Typography variant="caption">Избранные</Typography>
          </StyledIconButton>
          <StyledIconButton>
            <Icons.Basket />
            <Typography variant="caption">Корзина</Typography>
          </StyledIconButton>
        </StyledBox>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

const StyledImg = styled("div")({
  width: "250px",
  height: "20px",
});

const StyledBox = styled("Box")({
  display: "flex",
  justifyContent: "space-between",
  gap: "20px",
  alignItems: "center",
  alignItems: "baseline",
});

const StyledIconButton = styled("Button")({
  color: "#000",
  fontSize: "24px",
  fontWeight: "400",
  paddingTop: "30px",
  border: "none",
  background: "none",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});
