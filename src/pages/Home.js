import React from "react";
import PropertyList from "../components/PropertyList";
import PropertyCarousel from "../components/Carousel";

const Home = ({ filters }) => {
  return (
    <div className="home">
      <PropertyCarousel />
      <PropertyList filters={filters} />
    </div>
  );
};

export default Home;
