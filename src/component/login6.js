import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import background from "./pc4.png";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import mylogo from "./p6.png";
import nvi from "./pc5.png";
const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function Login1() {
  return (
    <>
      <nav style={{ width: 20, height: 20 }}>
        <img
          style={{ width: 80, height: 80, marginTop: 30, marginLeft: 30 }}
          src={nvi}
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
            <img
              style={{ width: 300, height: 200, marginTop: 30, marginLeft: 30 }}
              src={mylogo}
              alt="Something is wrong"
            />
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
              You have successfully Logged in
            </p>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
