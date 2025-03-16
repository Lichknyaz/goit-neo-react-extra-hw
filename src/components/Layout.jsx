import { Suspense } from "react";
import AppBar from "./AppBar/AppBar";
import { Box, Container } from "@mui/material";

export const Layout = ({ children }) => {
  return (
    <Container maxWidth="1440">
      <Box sx={{ bgcolor: "#cfe8fc", minHeight: "100vh" }}>
        <AppBar />
        <Suspense fallback={null}>{children}</Suspense>
      </Box>
    </Container>
  );
};
