import PropertyList from "../components/PropertyList";
import PropertyCarousel from "../components/Carousel";

const Home = ({ filters }) => {
  return (
    console.log("filtro que llega al  home:", filters),
    (
      <div className="home">
        <PropertyCarousel />
        <PropertyList filters={filters} />
      </div>
    )
  );
};

export default Home;
