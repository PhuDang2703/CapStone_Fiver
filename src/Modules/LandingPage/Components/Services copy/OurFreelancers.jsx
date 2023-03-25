import React from "react";
import { Container } from "@mui/material";
import styles from "./OurFreelancers.module.scss";
import OurFreelancersSlider from './OurFreelancersSlider/OurFreelancersSlider'

const OurFreelancers = () => {
  return (
    <Container maxWidth="lg">
      <div className={styles.servicesHeader}>
        <header>
        <h2>Get inspired with projects made by our freelancers</h2>
        </header>
      </div>
      <div className={`${styles.servicesSlider} mt-5`}>
        <OurFreelancersSlider />
      </div>
    </Container>
  );
};

export default OurFreelancers;
