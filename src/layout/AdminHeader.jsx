import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const AdminHeader = () => {
  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar style={{ justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          style={{ color: "black", fontWeight: "700", fontSize: "24px" }}
        >
          Женская
        </Typography>

        <Button
          variant="contained"
          color="default"
          style={{
            backgroundColor: "black",
            color: "white",
            borderRadius: "8px",
            textTransform: "none",
          }}
        >
          + Добавить
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default AdminHeader;
