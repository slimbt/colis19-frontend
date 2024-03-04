import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Service from './components/pages/Services'; 
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';
import SignIn from './components/pages/SignIn';
import { Box, Fab, makeStyles, } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import NavigationIcon from '@material-ui/icons/Navigation';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import AutoScrollToTop from './components/AutoScrollToTop';
import Home from './components/pages/Home';
import SocialSideBar from './components/SocialSideBar';
import ProgressBar from './components/ProgressBar';
import ScrollToTop from './components/ScrollToTop';
import ContactPage from './components/pages/ContactPage'
import AbtUsPage from './components/pages/AbtUsPage';
import CarrierPage from './components/pages/CarrierPage';
// import Loader from "react-loader-spinner";


const useStyles = makeStyles((theme) => ({
  fab: {

    color: '#82171f',
    backgroundColor: '#1c2237',

    '&:hover': {
      color: '#82171f',
      backgroundColor: '#f0a672',
      transition: '0.5s'
    }
  }
}));

function App(props) {

  const classes = useStyles();

  return (
    <>
      <Router>
        {/* <Loader
      style={{
        position: 'fixed',
        zIndex: '999999999999',
        alignIems: 'center',
        // transform: 'translate(600px, 300px)',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: '20% 47%'
      }}
        type="Puff"
        color="red"
        height={100}
        width={100}
        timeout={3000} //3 secs
      /> */}
        <AutoScrollToTop />

        <Box id="back-to-top-anchor" />

        <Navbar />

        <ProgressBar />

        <SocialSideBar />

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Service} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/sign-in' component={SignIn} />
          <Route path='/contact' component={ContactPage} />
          <Route path='/about-us' component={AbtUsPage} />
          <Route path='/carrier' component={CarrierPage} />
          <Route path='/facebook-page' component={() => {
            window.location.href = 'https://www.facebook.com/fleursmonastir';
            return null;
          }} />
        </Switch>

        <ScrollToTop {...props}>
          <Fab className={classes.fab} size="small" aria-label="scroll back to top">
            <ArrowUpwardIcon />
            {/* <NavigationIcon /> */}
            {/* <KeyboardArrowUpIcon /> */}
          </Fab>
        </ScrollToTop>

        <Footer />

      </Router>
    </>
  );
}

export default App;
