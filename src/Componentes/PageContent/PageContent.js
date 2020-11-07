import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import NavBar from '../NavBar/NavBar'
import Hero from '../Main/Hero/Hero'
import Prices from '../Main/Prices/Prices'
import Footer from '../Footer/Footer'


function PageContent() {
  return (
    <React.Fragment>
      <CssBaseline />
    <NavBar/>
      {/* Hero unit */}
      <Hero/>
      {/* End hero unit */}
      <Prices />
      {/* Footer */}
      <Footer/>
      {/* End footer */}
    </React.Fragment>
  );
}

export default PageContent