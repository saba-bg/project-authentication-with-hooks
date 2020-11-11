import React from "react";
import { Box, Typography, Button } from "@material-ui/core";
import { useHistory, Redirect } from "react-router-dom";
const Panel = () => {
  const logOut = () => {
    localStorage.clear("TOKEN");
    window.location.href = "panel";
  };
  return (
    <Box>
      Welcome To Panel
      <Button onClick={() => logOut()} color="primary">
        LogOut
      </Button>
    </Box>
  );
};

export default Panel;
