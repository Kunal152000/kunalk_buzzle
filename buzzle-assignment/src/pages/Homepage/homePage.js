import React from "react";
import Header from "../../components/Header/header";
import Navbar from "../../components/Navbar/navbar";
import LiveSection from "../../components/liveSection/liveSection";
import { dataScience, softwareEngineer, fnE, Es } from "../../data/ds";

const eventsList1 = dataScience;
const eventsList2 = softwareEngineer;
const eventsList3 = fnE;
const eventsList4 = Es;

const HomePage = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <LiveSection
        dslist={eventsList1}
        selist={eventsList2}
        fnElist={eventsList3}
        Eslist={eventsList4}
      />
    </div>
  );
};

export default HomePage;
