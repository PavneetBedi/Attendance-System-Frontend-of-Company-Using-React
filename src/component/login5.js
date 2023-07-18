import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import background from "./pc4.png";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import InputAdornment from "@mui/material/InputAdornment";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import mylogo from "./pc5.png";
const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Login5 = () => {
  const navigate = useNavigate();
  const goToNext = () => {
    navigate("/login6");
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
            borderRadius: 20,
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
              Reset Password
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
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  placeholder="New Password"
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
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  placeholder="Re-enter Password"
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

              <Button
                type="submit"
                fullWidth
                variant="text"
                onClick={goToNext}
                sx={{ mt: 3, mb: 2 }}
                style={{
                  marginTop: 40,
                  backgroundImage: `url(${background})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  color: "white",
                  backgroundPosition: "center",
                }}
              >
                Confirm
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};
export default Login5;
