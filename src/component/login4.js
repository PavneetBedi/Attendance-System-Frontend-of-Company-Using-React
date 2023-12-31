import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import background from "./pc4.png";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import mylogo from "./pc5.png";
const theme = createTheme({
  palette: {
    mode: "dark",
  },
});
const Login4 = () => {
  const navigate = useNavigate();
  const goToNext = () => {
    navigate("/login5");
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
            borderRadius: 20,
          }}
        >
          <CssBaseline />
          <Box
            sx={{
              marginTop: 5,
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
              Check your Email
            </Typography>
            <p
              style={{
                padding: 4,
                fontWeight: "bold",
                fontSize: 22,
                alignContent: "center",
                textAlign: "center",
                textAlignLast: "center",
              }}
            >
              We sent a code to: Shriyansh98@gmail.com
            </p>
            <p style={{ fontWeight: "bold", fontSize: 22 }}>
              Enter Verification Code
            </p>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <input
                type="number"
                min="0"
                max="9"
                required
                style={{
                  borderRadius: "10px",
                  border: "1px solid #eee",
                  fontSize: "30px",
                  fontWeight: "300",
                  textAlign: "center",
                  height: "60px",
                  width: "55px",
                  margin: "10px",
                  fontFamily: "'Lato',sans-serif",
                }}
              />
              <input
                type="number"
                min="0"
                max="9"
                required
                style={{
                  borderRadius: "10px",
                  border: "1px solid #eee",
                  fontSize: "30px",
                  fontWeight: "300",
                  textAlign: "center",
                  height: "60px",
                  width: "55px",
                  margin: "10px",
                  fontFamily: "'Lato',sans-serif",
                }}
              />
              <input
                type="number"
                min="0"
                max="9"
                required
                style={{
                  borderRadius: "10px",
                  border: "1px solid #eee",
                  fontSize: "30px",
                  fontWeight: "300",
                  textAlign: "center",
                  height: "60px",
                  width: "55px",
                  margin: "10px",
                  fontFamily: "'Lato',sans-serif",
                }}
              />
              <input
                type="number"
                min="0"
                max="9"
                required
                style={{
                  borderRadius: "10px",
                  border: "1px solid #eee",
                  fontSize: "30px",
                  fontWeight: "300",
                  textAlign: "center",
                  height: "60px",
                  width: "55px",
                  margin: "10px",
                  fontFamily: "'Lato',sans-serif",
                }}
              />
              <input
                type="number"
                min="0"
                max="9"
                required
                style={{
                  borderRadius: "10px",
                  border: "1px solid #eee",
                  fontSize: "30px",
                  fontWeight: "300",
                  textAlign: "center",
                  height: "60px",
                  width: "55px",
                  margin: "10px",
                  fontFamily: "'Lato',sans-serif",
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
                backgroundImage: `url(${background})`,
                marginTop: 50,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                color: "white",
                backgroundPosition: "center",
              }}
            >
              Submit
            </Button>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "lighter",
                fontSize: 15,
              }}
            >
              Didn't get OTP? Resend OTP
            </div>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};
export default Login4;
