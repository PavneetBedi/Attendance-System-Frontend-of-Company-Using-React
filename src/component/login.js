import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
//import Link from '@mui/material/Link';
//import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Person3OutlinedIcon from "@mui/icons-material/Person3Outlined";
import background from "./pc4.png";
import InputAdornment from "@mui/material/InputAdornment";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import mylogo from "./pc5.png";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Login = () => {
  const navigate = useNavigate();
  const goToSignin = () => {
    navigate("/login1");
  };

  const goToLogin = () => {
    navigate("/screen9");
  };

  return (
    <>
      <div style={{ backgroundImage: `url(${background})` }}></div>
      <nav style={{ width: 20, height: 20 }}>
        <img
          style={{ width: 80, height: 80, marginTop: 30, marginLeft: 30 }}
          src={mylogo}
          alt="Something is wrong"
        />
      </nav>
      <ThemeProvider theme={theme}>
        <Container
          component="main"
          maxWidth="xs"
          style={{
            backgroundImage: `url(${background})`,
            borderRadius: 20,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            color: "white",
            backgroundPosition: "center",
          }}
        >
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 5,
            }}
          >
            <Typography
              component="h1"
              variant="h5"
              style={{ fontWeight: "bold" }}
            >
              Login
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <Box
                sx={{
                  marginTop: 4,
                  padding: 0,
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  placeholder="User Name"
                  name="email"
                  autoComplete="email"
                  variant="standard"
                  autoFocus
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person3OutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box
                sx={{
                  marginTop: 2,
                  display: "flex",
                  flexDirection: "row",
                  padding: 0,
                }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  placeholder="Password"
                  variant="standard"
                  autoFocus
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box
                sx={{
                  marginTop: 2,
                  display: "flex",
                  flexDirection: "row",
                  padding: 0,
                }}
              >
                <FormControlLabel
                  control={<Checkbox name="checkedit" color="primary" />}
                  label="Remember me"
                  alignItems="left"
                  style={{ fontWeight: "bold" }}
                />
                <p style={{ fontWeight: "lighter" }}>Forgot Password?</p>
              </Box>

              <Button
                onClick={goToLogin}
                type="submit"
                fullWidth
                variant="text"
                sx={{ mt: 3, mb: 2 }}
                style={{
                  backgroundImage: `url(${background})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  color: "white",
                  backgroundPosition: "center",
                }}
              >
                LOG IN
              </Button>
              <Button
                type="submit"
                onClick={goToSignin}
                fullWidth
                variant="text"
                sx={{ mt: 0, mb: 2 }}
                style={{
                  backgroundImage: `url(${background})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  color: "white",
                  backgroundPosition: "center",
                }}
              >
                Sign In
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};
export default Login;
