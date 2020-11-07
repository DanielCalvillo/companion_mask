import React from "react";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { makeStyles } from "@material-ui/core/styles";
import imagen from './mask.png'

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: "2rem 2rem 2rem 2rem",
    display: "flex",
    maxWidth: "1000px",
    height: "90vh",
    justifyContent: "center",
    alignItems: "center",
    background: "#222",
  },
  modelDescription: {
    maxWidth: "525px",
    height: "364px",
    marginRight: "3rem",
    paddingRight: "2rem",
  },
  productTitle: {
    color: "#fff",
    fontSize: "50px",
    fontWeight: "bold",
  },
  productDescription: {
    color: "#fff",
    textAlign: "left",
    opacity: "0.4",
  },
  productSuperDescription: {
    color: "#fff",
    textAlign: "justify",
    marginTop: "1rem",
    paddingRight: "1rem",
  },
  productPrice: {
    color: "#19b5fe",
    marginTop: "1rem",
  },
  buttonContainer: {
    display: "flex",
    marginTop: "1rem",
  },
  addButton: {
    color: "#fff",
    backgroundColor: "#19b5fe",
    marginRight: "1rem",
    width: "160px",
    height: "44px",
  },
  shoppingIcon: {
    marginRight: ".5rem"
  },
  moreButton: {
    width: "160px",
    height: "44px",
    color: "#fff",
    borderColor: "#fff"
  },
  infoIcon: {
    marginRight: "2rem",
    marginLeft: "0"
  }
}));

function Hero() {
  const classes = useStyles();
  return (
    <Container maxWidth="sm" component="main" className={classes.heroContent}>
      <div className={classes.modelDescription}>
        <Typography
          component="h1"
          align="left"
          gutterBottom
          className={classes.productTitle}
        >
          SPCTR3 PRO
        </Typography>
        <Typography
          variant="h5"
          component="p"
          className={classes.productDescription}
        >
          Fireball's High performance wearable with AR HUD
        </Typography>
        <Typography
          variant="h8"
          component="p"
          className={classes.productSuperDescription}
        >
          The PRO model offers the latest and most reliable technology for air
          purification needs, along with sensor data processing to bring health
          and performance features to the user. With the app companion, users
          get real time info on the oxygen levels of the environment along with
          the overall air quality. Also displaying an innovative Heads Up
          Display, innovation, fashion and comfort is what makes SPCTR3 PRO the
          future of healthcare wearables.
        </Typography>
        <Typography variant="h5" component="p" className={classes.productPrice}>
          USD 140
        </Typography>
        <div className={classes.buttonContainer}>
          <Button
            variant="contained"
            color="primary"
            className={classes.addButton}
          >
            {<ShoppingCartIcon className={classes.shoppingIcon}/>}
            ADD TO
          </Button>
          <Button variant="outlined" className={classes.moreButton}>
            {<InfoOutlinedIcon className={classes.infoIcon}/>}
            MORE
          </Button>
        </div>
      </div>
      <div>
        <img
          src={imagen}
          alt="Imagen de máscara mamalona"
          style={{ width: "406px", height: "400px",  }}
        />
      </div>
    </Container>
  );
}

export default Hero;
