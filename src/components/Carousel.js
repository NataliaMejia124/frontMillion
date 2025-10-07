import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./Carousel.scss";

const images = [
  {
    label: "Nata Inmobiliaria",
    imgPath:
      "https://nexoinmobiliario.pe/blog/wp-content/uploads/2022/07/fondo-inversion-inmobiliaria-nexo-inmobiliaria.jpg",
  },
  {
    label: "Penthouse con vista",
    imgPath:
      "https://cdn.prod.website-files.com/6842f0d789a8945f6e854455/68a3970b43233ec8a516a1d2_677751cb15fdaf7e33cd2ca8_6519d39fd91ce5c0c66a025a_fondo-inversiones.png",
  },
];

const PropertyCarousel = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
    },
  });

  return (
    <div className="carousel-wrapper">
      <div ref={sliderRef} className="keen-slider">
        {images.map((img, idx) => (
          <div key={idx} className="keen-slider__slide slide">
            <img src={img.imgPath} alt={img.label} />
            <div className="caption">{img.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyCarousel;
