"use client";

import { AccountCircle } from "@mui/icons-material";
import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

//type Props = {};

export default function MainAppBar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky">
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        position="relative"
        px={2}
        paddingTop={"0.5rem"}
        paddingBottom={"0.5rem"}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "1.5rem",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          Job Application Tracker
        </Typography>
        <IconButton aria-label="account settings" onClick={handleClick}>
          <AccountCircle />
        </IconButton>

        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={handleClose}>Login</MenuItem>
        </Menu>
      </Stack>
    </AppBar>
  );
}
