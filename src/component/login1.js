import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
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

const Login1 = () => {
  const navigate = useNavigate();
  const goToNext = () => {
    navigate("/login2");
  };
  return (
    <>
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
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            color: "white",
            backgroundPosition: "center",
          }}
        >
          <CssBaseline />
          <Box
            sx={{
              marginTop: 12,
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
              Sign in
            </Typography>
            <p
              style={{
                padding: 4,
                fontWeight: "bold",
                fontSize: 22,
                alignContent: "center",
              }}
            >
              Please Enter your email or Registered Mobile Number to get started
            </p>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              autoComplete="email"
              variant="standard"
              autoFocus
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="text"
              sx={{ mt: 3, mb: 2 }}
              onClick={goToNext}
              style={{
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                color: "white",
                backgroundPosition: "center",
              }}
            >
              Next
            </Button>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "lighter",
                fontSize: 12,
              }}
            >
              Check our privacy notice
            </div>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};
export default Login1;
