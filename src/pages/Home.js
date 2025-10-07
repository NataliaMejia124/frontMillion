import PropertyList from "../components/PropertyList";
import PropertyCarousel from "../components/Carousel";

const Home = () => {
  return (
    <div className="home">
      <PropertyCarousel />
      <PropertyList />
    </div>
  );
};

export default Home;
