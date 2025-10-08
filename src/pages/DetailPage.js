import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Box, Typography } from "@mui/material";
import { getPropertyDetail } from "../services/propertyService";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPropertyDetail = async () => {
      try {
        const data = await getPropertyDetail(id);
        const formattedImages = data.images.map((url) => ({
          original: url,
          thumbnail: url,
        }));
        console.log("verrrr las imagenes", data);
        console.log("verrrr las imagenes", formattedImages);
        setProperty({ ...data, images: formattedImages });
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPropertyDetail();
  }, []);

  console.log("ver detalle::", property);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 4,
        maxWidth: 1900,
        margin: "0 auto",
        padding: 4,
      }}
    >
      <Box sx={{ flex: 1 }}>
        <ImageGallery items={property?.images || []} />
      </Box>

      <Box sx={{ flex: 1 }}>
        <Typography variant="h4" gutterBottom>
          {`${property.name} ${property.year}`}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          📍 {property.address}
        </Typography>
        <Typography variant="h5" color="primary" gutterBottom>
          {property.formattedPrice}
        </Typography>
        <Typography variant="body1">{property.description}</Typography>

        <Typography variant="body1">
          {" "}
          Property age: {property.propertyAge}
        </Typography>
      </Box>
    </Box>
  );
};

export default DetailPage;
