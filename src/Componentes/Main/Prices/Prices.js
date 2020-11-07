import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import imagen from "./mask.png";
import maskWhite from "./MaskWhite.png";
import maskRed from './MaskRed.png'

const useStyles = makeStyles((theme) => ({
  pricesContainer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    paddingTop: "1rem",
    height: "80vh",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  sectionTitleAndDescription: {
    width: "406px",
    height: "106px",
    display: "flex",
    flexDirection: "column",
    marginBottom: "14rem",
  },
  sectionTitle: {
    color: "#19b5fe",
    fontSize: "80px",
    textAlign: "center",
    letterSpacing: "1.6px",
    opacity: "0.15",
  },
  sectionDescription: {
    color: "#fff",
    width: "512px",
    fontSize: "28px",
    textAlign: "center",
    letterSpacing: "0.56px",
    position: "relative",
    bottom: "10.5rem",
    right: "2rem",
    opacity: ".8",
  },
  productContainers: {
    display: "flex",
    marginTop: "1rem",
  },
  productContainer: {
    width: "360px",
    height: "260px",
    backgroundColor: "#424242",
    // opacity: "0.1",
    borderRadius: "20px",
    marginRight: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  productTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    letterSpacing: "0.4px",
    color: "#fff",
    opacity: "1",
  },
  careta: {
    height: "150px",
    width: "150px",
  },
}));

function Prices() {
  const classes = useStyles();
  return (
    <Container
      maxWidth="md"
      component="main"
      className={classes.pricesContainer}
    >
      <div className={classes.sectionTitleAndDescription}>
        <p className={classes.sectionTitle}>PRODUCTS</p>
        <p className={classes.sectionDescription}>
          Suitable for all your needs
        </p>
      </div>
      <div className={classes.productContainers}>
        <div className={classes.productContainer}>
          <img
            src={maskRed}
            alt="Imagen De producto mamalon"
            className={classes.careta}
          />
          <span className={classes.productTitle}>Spctr3</span>
        </div>
        <div className={classes.productContainer}>
          <img
            src={maskWhite}
            alt="Imagen De producto mamalon"
            className={classes.careta}
          />
          <span className={classes.productTitle}>Spectr3+</span>
        </div>
        <div className={classes.productContainer}>
          <img
            src={imagen}
            alt="Imagen De producto mamalon"
            className={classes.careta}
          />
          <span className={classes.productTitle}>Spctr3 PRO</span>
        </div>
      </div>
    </Container>
  );
}

export default Prices;
