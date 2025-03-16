import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import { selectIsLoggedIn } from "../../redux/auth/authSlice";
import AppBarMUI from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Toolbar } from "@mui/material";

function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Box
      sx={{
        flexGrow: 1,
        marginBottom: "16px",
        display: { xs: "none", md: "flex" },
      }}
    >
      <AppBarMUI position="static">
        <Toolbar sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </AppBarMUI>
    </Box>
  );
}

export default AppBar;
