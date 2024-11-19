import { Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Carousel from "./Carousel";

const useStyle = makeStyles(() => ({
  banner: {
    backgroundColor: "#1d232b",
  },
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
  tagline:{
    display: "flex",
    flexDirection: "column",
    height: "40%",
    justifyContent: "center",
    textAlign: "center",
  }
}));
const Banner = () => {
  const classes = useStyle();
  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
              letterSpacing: ".12rem",
              fontWeight: 700,
            }}
          >
            Crypto Vault
          </Typography>
          <Typography
            variant="subtitile2"
            style={{
              color: "darkgray",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            Get all the info regarding yourfavrite crypto currency
          </Typography>
        </div>
        <div>
            <Carousel/>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
