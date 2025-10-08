import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PropertyDetail = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    console.log("este componente lo voy a borrrar porq no hace ni  mierda");
    // api.get(`/property`).then((res) => {
    //   const found = res.data.find((p) => p.id === id);
    //   setProperty(found);
    // });
  }, [id]);

  if (!property) return <p>Cargando...</p>;

  return <div className="property-detail"></div>;
};

export default PropertyDetail;
