import { Box, Typography } from "@mui/material";

function HomePage() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h2">Welcome to your best PhoneBook!</Typography>;
    </Box>
  );
}

export default HomePage;
