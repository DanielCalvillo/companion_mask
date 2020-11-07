import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import SecurityIcon from "@material-ui/icons/Security";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import LaptopChromebookIcon from '@material-ui/icons/LaptopChromebook';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles((theme) => ({
  pricesContainer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    paddingTop: "1rem",
    height: "90vh",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    maxWidth: "1000px",
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
    right: "3.2rem",
    opacity: ".8",
  },
  productContainers: {
    display: "flex",
    marginTop: "1rem",
    flexWrap: "wrap",
  },
  productContainer: {
    width: "450px",
    height: "180px",
    backgroundColor: "#424242",
    // opacity: "0.1",
    borderRadius: "20px",
    marginRight: "1rem",
    marginBottom: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  productTitle: {
    fontSize: "20px",
    fontWeight: "normal",
    letterSpacing: "0.4px",
    color: "#fff",
    opacity: "1",
  },
  serviceIcon: {
    marginLeft: ".8rem",
    height: "180px",
    width: "180px",
  },
  description: {
    fontSize: "12px",
    fontWeight: "normal",
    letterSpacing: "0.4px",
    color: "#fff",
    opacity: "1",
  },
}));

function Services() {
  const classes = useStyles();
  return (
    <Container
      maxWidth="md"
      component="main"
      className={classes.pricesContainer}
    >
      <div className={classes.sectionTitleAndDescription}>
        <p className={classes.sectionTitle}>Services</p>
        {/* <p className={classes.sectionDescription}>5 year warranty</p> */}
      </div>
      <div className={classes.productContainers}>
        <div className={classes.productContainer}>
          <SecurityIcon
            style={{ height: "150px", width: "150px", color: "#19B5FE" }}
          />
          <div>
            <span className={classes.productTitle}>5 year warranty</span>
            <p className={classes.description}>Amilcar creates the policy</p>
          </div>
        </div>
        <div className={classes.productContainer}>
          <MonetizationOnIcon
            style={{ height: "150px", width: "150px", color: "#19B5FE" }}
          />
          <div>
            <span className={classes.productTitle}>Suitable prices</span>
          </div>
        </div>
        <div className={classes.productContainer}>
          <LaptopChromebookIcon
            style={{ height: "150px", width: "150px", color: "#19B5FE", marginLeft: "1rem", marginRight: "1rem" }}
          />
          <div>
            <span className={classes.productTitle}>Free app updates</span>
            <p className={classes.description}>
              Amilcar argues the ease of upgrade for the companion app
            </p>
          </div>
        </div>
        <div className={classes.productContainer}>
          <PersonIcon
            style={{ height: "150px", width: "150px", color: "#19B5FE" }}
          />
          <div>
            <span className={classes.productTitle}>24/7 Support</span>
            <p className={classes.description}>
              Amilcar argues the affordability and the accessible range of
              prices to fit every wallet
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Services;
