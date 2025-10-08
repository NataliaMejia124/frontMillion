import PropertyList from "../components/PropertyList";
import PropertyCarousel from "../components/Carousel";

const Home = ({ searchTerm }) => {
  return (
    console.log("Buscando con término home:", searchTerm),
    (
      <div className="home">
        <PropertyCarousel />
        <PropertyList searchTerm={searchTerm} />
      </div>
    )
  );
};

export default Home;
