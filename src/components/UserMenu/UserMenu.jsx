import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/authSlice";
import { logout } from "../../redux/auth/authOps";
import { Box, Button, Typography } from "@mui/material";

function UserMenu() {
  const userName = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogOut = () => dispatch(logout());
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography sx={{ textAlign: "center" }}>Hello, {userName}</Typography>
      <Button color="inherit">
        <Typography onClick={handleLogOut} sx={{ textAlign: "center" }}>
          LOG OUT
        </Typography>
      </Button>
    </Box>
  );
}

export default UserMenu;
