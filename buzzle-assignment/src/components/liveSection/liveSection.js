import React from "react";
import Card from "./Card/card";
import "./liveSection.css";

const LiveSection = ({ dslist, selist, fnElist, Eslist }) => {
  return (
    <div className="events">
      <div className="events-head">
        Top <span className="liveEvent">Live Events</span> From<span></span>
        <span className="title">DATA SCIENCE</span> world
      </div>
      <div className="events-list">
        {dslist.map((dataScience) => {
          return (
            <Card
              name={dataScience.name}
              title={dataScience.title}
              image={dataScience.image}
              logo={dataScience.logo}
              time={dataScience.time}
              viewers={dataScience.viewers}
            />
          );
        })}
      </div>
      <div className="card-link">See More</div>
      <div className="events-head1">
        Top <span className="liveEvent">Live Events</span> From<span></span>
        <span className="title">SOFTWARE ENGINEERING</span> world
      </div>
      <div className="events-list">
        {selist.map((softwareEngineer) => {
          return (
            <Card
              name={softwareEngineer.name}
              title={softwareEngineer.title}
              image={softwareEngineer.image}
              logo={softwareEngineer.logo}
              time={softwareEngineer.time}
              viewers={softwareEngineer.viewers}
            />
          );
        })}
      </div>
      <div className="card-link">See More</div>
      <div className="events-head2">
        Top <span className="liveEvent">Live Events</span> From<span></span>
        <span className="title">FINANCE & INVESTMENT</span> world
      </div>
      <div className="events-list">
        {fnElist.map((FinanceandInvestment) => {
          return (
            <Card
              name={FinanceandInvestment.name}
              Ftitle={FinanceandInvestment.title}
              title={FinanceandInvestment.title}
              image={FinanceandInvestment.image}
              logo={FinanceandInvestment.logo}
              time={FinanceandInvestment.time}
              viewers={FinanceandInvestment.viewers}
            />
          );
        })}
      </div>
      <div className="card-link">See More</div>
      <div className="events-head3">
        Top <span className="liveEvent">Live Events</span> From<span></span>
        <span className="title">ENTERPRENEURSHIP</span> world
      </div>
      <div className="events-list">
        {Eslist.map((ENTERPRENEURSHIP) => {
          return (
            <Card
              name={ENTERPRENEURSHIP.name}
              Ftitle={ENTERPRENEURSHIP.title}
              title={ENTERPRENEURSHIP.title}
              image={ENTERPRENEURSHIP.image}
              logo={ENTERPRENEURSHIP.logo}
              time={ENTERPRENEURSHIP.time}
              viewers={ENTERPRENEURSHIP.viewers}
            />
          );
        })}
      </div>
      <div className="card-link">See More</div>
    </div>
  );
};

export default LiveSection;
