import React from "react";
import { Box, Typography, Button } from "@material-ui/core";
import useAuth from "./useAuth";
import useAuthAction from "./useAuthAction";
import { useHistory, Redirect } from "react-router-dom";

const Login = () => {
  const setToken = useAuthAction();
  const history = useHistory();
  const isLogged = useAuth();
  const handelLogin = () => {
    setToken("QpwL5tke4Pnpja7X4");
    history.push("/panel");
  };
  return (
    <Box display="flex" flexDirection="column" alignItems="flex-start">
      {isLogged ? <Redirect to="/panel" /> : null}
      <Typography variant="h6">Welecome To Login Page</Typography>
      <Button
        onClick={() => handelLogin()}
        className="btn"
        variant="contained"
        color="primary"
      >
        Login
      </Button>
    </Box>
  );
};

export default Login;
