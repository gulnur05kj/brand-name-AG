import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Icons } from "../assets";
import { styled, Typography } from "@mui/material";

export const SideBar = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const DrawerList = (
    <StyledBox>
      <Box
        sx={{ width: "250px" }}
        role="presentation"
        onClick={toggleDrawer(false)}
      >
        <Typography variant="h1" sx={{ paddingLeft: "30px" }}>
          <Icons.Logotiv />
        </Typography>
        <ListCon sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          {["Мужская", "Детская", "Женская"].map((text, index) => (
            <StyleList key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 ? (
                    <Icons.Mali />
                  ) : index === 1 ? (
                    <Icons.Boy />
                  ) : (
                    <Icons.Gril />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </StyleList>
          ))}
        </ListCon>
      </Box>
    </StyledBox>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

const ListCon = styled("List")({
  "& .MuiListItemButton-root": {
    transition: "background-color 0.3s ease",
  },
  "& .MuiListItemButton-root:hover": {
    backgroundColor: "#bbbfbc",
  },
});

const StyledBox = styled("div")({
  "&: svg:hover": {
    background: "transparent",
  },
});

const StyleList = styled("ListItem")({
  display: "flex",
  alignItems: "center",
  gap: "14px",
  height: "60px",
  padding: "0px 0px 0px 30px",
  cursor: "pointer",

  "&:hover": {
    color: "#5A8E65",
    "& svg path": {
      fill: "#5A8E65",
    },
  },
});
