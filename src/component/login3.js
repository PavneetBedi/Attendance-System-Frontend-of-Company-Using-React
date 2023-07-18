import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import background from "./pc4.png";
import InputAdornment from "@mui/material/InputAdornment";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Person3OutlinedIcon from "@mui/icons-material/Person3Outlined";
import { useNavigate } from "react-router-dom";
import mylogo from "./pc5.png";
const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Login3 = () => {
  const navigate = useNavigate();
  const goToNext = () => {
    navigate("/login4");
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
            <p
              style={{
                padding: 4,
                fontWeight: "bold",
                fontSize: 24,
                alignContent: "center",
                textAlign: "center",
                textAlignLast: "center",
              }}
            >
              Please Enter your employee Id
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
                    <Person3OutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="text"
              onClick={goToNext}
              sx={{ mt: 3, mb: 2 }}
              style={{
                backgroundImage: `url(${background})`,
                marginTop: 80,
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
export default Login3;
