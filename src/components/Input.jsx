import React from "react";
import TextField from "@mui/material/TextField";
import styled from "@emotion/styled";
import InputAdornment from "@mui/material/InputAdornment";
import { Icons } from "../assets";

const Input = ({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  Icon,
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
      placeholder={placeholder}
      InputProps={{
        startAdornment: Icons && (
          <InputAdornment position="start">
            <Icons.Admin />
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};

export default Input;

const StyledInput = styled(TextField)({
  width: "408px",
  fontSize: "24px",
  fontWeight: "500",
  "& .MuiOutlinedInput-root": {
    height: "48px",
  },
});
