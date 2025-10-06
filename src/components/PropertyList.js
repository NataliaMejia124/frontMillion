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
import { fetchProperties } from "../services/propertyService";

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const filters = {
      name: "",
      address: "",
      minPrice: "",
      maxPrice: "",
      minYear: "",
      maxYear: "",
      pageNumber: 1,
      pageSize: 10,
    };

    const subscription = fetchProperties(filters).subscribe({
      next: (data) => setProperties(data.properties),
      error: (err) => setError(err.message),
    });

    return () => subscription.unsubscribe();
  }, []);

  // console.log("ver que me trajo del backk::", data);
  console.log("ver que me trajo del backk::", properties);

  return (
    <div>
      <h3>Properties for sale</h3>
      <Box sx={{ maxWidth: 2300, mx: "auto", px: 2, py: 4 }}>
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
                    image="https://images.unsplash.com/photo-1625602812206-5ec545ca1231?q=80&w=1170&auto=format&fit=crop"
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
                  <Button size="small" variant="contained" color="primary">
                    Ver Detalle
                  </Button>
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
