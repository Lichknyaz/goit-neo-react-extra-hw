import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/authSlice";
import { Box, Button, Typography } from "@mui/material";

function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Box sx={{ flexGrow: 1, display: "flex", gap: 2 }}>
      <Button variant="text" color="inherit" component={NavLink} to={`/`}>
        <Typography sx={{ textAlign: "center" }}>Home</Typography>
      </Button>
      {isLoggedIn && (
        <Button color="inherit" component={NavLink} to={`/contacts`} sx={{}}>
          <Typography sx={{ textAlign: "center" }}>Contacts</Typography>
        </Button>
      )}
    </Box>
  );
}

export default Navigation;
