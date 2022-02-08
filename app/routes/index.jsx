import React from "react";
import {
  Avatar,
  Box,
  Container,
  CssBaseline,
  Link,
  Typography,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { Copyright, LoginForm } from "@ipguk/react-ui";

/**
 * Login page
 */
export default function Login() {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box mt={8} display="flex" flexDirection="column" alignItems="center">
        <Avatar
          sx={{
            margin: (theme) => theme.spacing(1),
            backgroundColor: (theme) => theme.palette.secondary.main,
          }}
        >
          <LockIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Remix Starter Template
        </Typography>
        <Box mt={2}>
          <LoginForm />
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Link href="/register">Don't have an account? Register</Link>
        <Link href="/reset/request">Forgot password?</Link>
      </Box>
      <Box mt={4} textAlign="center">
        <img src="/images/ipgLogo.png" alt="ipgLogo" height="50" width="154" />
        <Copyright />
      </Box>
    </Container>
  );
}
