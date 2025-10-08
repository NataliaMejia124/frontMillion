import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  Box,
  Grid,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProperties } from "../services/propertyService";

const PropertyList = ({ filters }) => {
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Buscando con término:", filters);

    const fetchProperties = async () => {
      try {
        const data = await getAllProperties(filters);
        setProperties(data.properties);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProperties();
  }, [filters]);

  // console.log("ver que me trajo del backk::", data);
  console.log("ver que me trajo del backk::", properties);

  return (
    <div>
      <Box sx={{ maxWidth: 2300, mx: "auto", px: 2, py: 4 }}>
        <Typography
          variant="h3"
          align="center"
          sx={{
            color: "primary.main",
            fontWeight: "bold",
            fontFamily: "'Roboto', 'Helvetica Neue', sans-serif",
            mb: 4,
          }}
        >
          Properties for Sale
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {properties.map((property) => (
            <Grid
              item
              key={property.id}
              xs={12}
              sm={6}
              md={4}
              display="flex"
              justifyContent="center"
            >
              <Card sx={{ width: 700, boxShadow: 5 }}>
                <Box
                  sx={{
                    overflow: "hidden",
                    "&:hover img": {
                      transform: "scale(1.1)",
                      transition: "transform 0.5s ease",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="400"
                    image={property.mainImageUrl}
                    alt="Propiedad"
                    sx={{ transition: "transform 0.5s ease" }}
                  />
                </Box>

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {property.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <p>
                      <strong>Dirección:</strong> {property.address}
                    </p>
                    <p>
                      <strong>Precio:</strong> ${property.price}
                    </p>
                  </Typography>
                </CardContent>

                <CardActions sx={{ justifyContent: "space-between", px: 2 }}>
                  {/* <Button size="small" variant="contained" color="primary">
                    Ver Detalle
                  </Button> */}
                  <Link to={`/property/${property.id}`}>Más info</Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default PropertyList;
