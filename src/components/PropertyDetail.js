import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PropertyDetail = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    // api.get(`/property`).then((res) => {
    //   const found = res.data.find((p) => p.id === id);
    //   setProperty(found);
    // });
  }, [id]);

  if (!property) return <p>Cargando...</p>;
  const mockImages = [
   
    "https://images.unsplash.com/photo-1501183638714-3c5a1c6e43a9?q=80&w=1170&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505692794403-3e33c470a2d0?q=80&w=1170&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=1170&auto=format&fit=crop",
  ];

  return (
    <div className="property-detail">
      {/* <h2>{property.name}</h2>
      <p><strong>Dirección:</strong> {property.address}</p>
      <p><strong>Precio:</strong> ${property.price}</p>
      <p><strong>Año:</strong> {property.year}</p>
      <p><strong>Código Interno:</strong> {property.codeInternal}</p> */}
      {/* <ImageGallery /> */}
      {/* <ImageViewer images={mockImages} /> */}
    </div>
  );
};

export default PropertyDetail;
