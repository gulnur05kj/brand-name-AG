import React from "react";
import TextField from "@mui/material/TextField";
import styled from "@emotion/styled";

const Input = ({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  ...props
}) => {
  return (
    <StyledInput
      label={label}
      value={value}
      onChange={onChange}
      type={type}
      variant="outlined"
      fullWidth
      placeholder="Введите логин."
      {...props}
    />
  );
};

export default Input;

const StyledInput = styled(TextField)({
  width: "408px",
  fontSize: "24px",
  fontWeight: "500",
  "& .css-1blp12k-MuiInputBase-root-MuiOutlinedInput-root": {
    height: "48px", 
  },
});