import React from "react";
import { Button, styled } from "@mui/material";

export const Mybutton = ({ type, children, onClick, ...props }) => {
  return (
    <Styledbutton variant="contained" type="text" onClick={onClick} {...props}>
      {children} войти
    </Styledbutton>
  );
};

const Styledbutton = styled(Button)({
  width: "408px",
  height: "50px",
  backgroundColor: "#121314",
});
