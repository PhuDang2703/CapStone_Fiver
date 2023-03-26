import React from 'react';
import Slider from '../Components/Slider/Slider';
import { Box, Container } from '@mui/material';
import SliderHeader from '../Components/Slider/SliderHeader/SliderHeader';
import TrustBy from '../Components/TrustBy/TrustBy';
import Services from '../Components/Services/Services';
import Freelance from '../Components/Freelance/Freelance';
import MarketPlace from '../Components/MarketPlace/MarketPlace';
import FiverrBusiness from '../Components/FiverrBusiness/FiverrBusiness';
import FiverrLogoMaker from '../Components/FiverrLogoMaker/FiverrLogoMaker';
import OurFreelancers from '../Components/Services copy/OurFreelancers';
import FiverrGuides from '../Components/FiverrGuides/FiverrGuides';

import styles from './landingPage.module.scss';
import ScrollToTop from 'react-scroll-to-top';

const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      <div className={styles.slider}>
        <Slider />
        <div className={styles.sliderHeaderContainer}>
          <SliderHeader />
        </div>
      </div>

      <div style={{backgroundColor: '#fafafa'}}>
        <TrustBy />
      </div>
      <div className={styles.services}>
        <Services />
      </div>
      <div className={styles.freelance}>
        <Freelance />
      </div>
      <div className={styles.marketPlace}>
        <MarketPlace />
      </div>
      <div className={styles.marketPlace}>
        <FiverrBusiness />
      </div>
      <div className={styles.logoMaker}>
        <FiverrLogoMaker />
      </div>
      <div style={{backgroundColor: '#f5f5f5'}} className={styles.ourFreelancers}>
        <OurFreelancers />
      </div>
      <div className={styles.fiverrGuides}>
        <FiverrGuides />
      </div>
      
      <ScrollToTop smooth width={'30px'} height={'30px'} color={'#1dbf73'} />
    </div>
  );
};

export default LandingPage;
