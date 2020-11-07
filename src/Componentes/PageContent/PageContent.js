import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import NavBar from "../NavBar/NavBar";
import Hero from "../Main/Hero/Hero";
import Prices from "../Main/Prices/Prices";
import Footer from "../Footer/Footer";
import Services from '../Services/Services'

function PageContent() {
  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar />
        {/* Hero unit */}
        <Hero />
        {/* End hero unit */}
        <Prices />
        <Services />
      {/* Footer */}
      <Footer />
      {/* End footer */}
    </React.Fragment>
  );
}

export default PageContent;
