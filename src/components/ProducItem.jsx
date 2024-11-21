import { colors, styled } from "@mui/material";
import React from "react";

export const ProducItem = ({
  id,
  title,
  price,
  image,
  sizes,
  category,
  colors,
  dateOfCreation,
}) => {
  console.log(colors);

  return (
    <StyledLI>
      {/* <b>{id}</b> */}
      <StyledColors>
        <StyledTitle>{title}</StyledTitle>
      </StyledColors>

      <StyledDiv>
        <StyledCart>
          <StyledImg src={image} alt="kjvj" />

          <div>
            <StyledColor>
              <p>Цвета в наличи</p>
              <p>
                <Colors>
                  {colors.map((color) => (
                    <div
                      style={{
                        padding: "10px",
                        background: color,
                        height: "20px",
                        width: "10px",
                      }}
                    ></div>
                  ))}
                </Colors>
              </p>
              <StyletPrice>
                <b>{price} шт</b>
                <StyledP>запас</StyledP>
              </StyletPrice>
            </StyledColor>
            <StyledColor>
              <p>Размеры в наличи</p>
              <StyledSize>
                {sizes.map((sizes) => (
                  <StyledSize>{sizes}</StyledSize>
                ))}
              </StyledSize>
            </StyledColor>
          </div>
        </StyledCart>
      </StyledDiv>
    </StyledLI>
  );
};
const StyledLI = styled("li")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});
const StyledTitle = styled("p")({
  fontWeight: "700",
  fontSize: "16px",
  lineHeight: "20px",
  fontFamily: "cursive",
  color: "#030229",
});
const StyledP = styled("p")({
  color: "grey",
  fontWeight: "400",
  fontSize: "14px",
});
const StyletPrice = styled("div")({
  paddingLeft: "500px",
});
const StyledCart = styled("div")({
  display: "flex",
});
const StyledColor = styled("div")({
  display: "flex",

  marginTop: "1.3rem",
  marginLeft: "50px",
});
const Colors = styled("div")({
  display: "flex",
  gap: "5px",
  marginLeft: "48px",
});

const StyledSize = styled("p")({
  display: "flex",
  marginLeft: "15px",
});

const StyledImg = styled("img")({
  height: "9.5rem",
  borderRadius: "10px",
  marginLeft: "20px",
  marginTop: "17px",
});
const StyledColors = styled("div")({
  display: "flex",
  justifyContent: "center",
  paddingLeft: "25px",
  flexDirection: "column",
  width: "1162px",
  height: "54.24px",
  borderRadius: "10px",
  backgroundColor: "#FFFFFF",
});

const StyledDiv = styled("div")({
  margin: "3.73px 0 20px 0",
  width: "1162px",
  height: "189px",
  borderRadius: "10px",
  backgroundColor: "#FFFFFF",
});
export default ProducItem;
