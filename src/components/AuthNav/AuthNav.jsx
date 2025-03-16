import { Box, Button, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

function AuthNav() {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <Button color="inherit" component={NavLink} to={"/register"}>
        <Typography sx={{ textAlign: "center" }}>Register</Typography>
      </Button>
      <Button color="inherit" component={NavLink} to={"/login"}>
        <Typography sx={{ textAlign: "center" }}>Log In</Typography>
      </Button>
    </Box>
  );
}

export default AuthNav;
