import * as React from "react";
import { Box, Container } from "@mui/material";

export default function Layout({ children }) {
  return (
    <Container disableGutters maxWidth={false}>
      <Box>{children}</Box>
    </Container>
  );
}
