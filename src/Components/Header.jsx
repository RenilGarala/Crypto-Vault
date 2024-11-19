import {
  AppBar,
  Container,
  createTheme,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CryptoState } from "../CryptoContext";

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "montserrat-bold",
    curser: "pointer",
  },
}));

const Header = () => {
  const { currency, setCurrency } = CryptoState();
  const classes = useStyles();
  const navigate = useNavigate();
  const darkTheme = createTheme({
    palette: {
      mode: "dark", 
      primary: {
        main: "#ffffff", 
      },
      background: {
        default: "#121212", 
        paper: "#1d1d1d",
      },
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              onClick={() => navigate("/")}
              className={classes.title}
              variant="h6"
              sx={{
                letterSpacing: ".12rem",
                fontWeight: 700,
              }}
            >
              Crypto Vault
            </Typography>

            <Select
              variant="outlined"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              style={{ width: 100, height: 40, marginRight: 15 }}
            >
              <MenuItem value="USD">USD</MenuItem>
              <MenuItem value="INR">INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
