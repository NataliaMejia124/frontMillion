import React, { useEffect, useState } from "react";
import api from "../api";
import PropertyFilters from "../components/PropertyFilters";
import PropertyList from "../components/PropertyList";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
} from "@mui/material";
import PropertyCarousel from "../components/Carousel";

const Home = () => {
  const [properties, setProperties] = useState([]);
  const mockProperties = [
    {
      id: "1",
      name: "Casa Moderna",
      address: "Calle 123, Ciudad Moderna",
      price: 250000,
      year: 2021,
      codeInternal: "A001",
    },
    {
      id: "2",
      name: "Departamento Central",
      address: "Av. Principal 456, Centro",
      price: 180000,
      year: 2020,
      codeInternal: "B002",
    },
    {
      id: "3",
      name: "Casa de Campo",
      address: "Camino Rural S/N",
      price: 320000,
      year: 2019,
      codeInternal: "C003",
    },
    {
      id: "4",
      name: "Penthouse de Lujo",
      address: "Zona Alta 789",
      price: 600000,
      year: 2022,
      codeInternal: "D004",
    },
    {
      id: "5",
      name: "Estudio Minimalista",
      address: "Barrio Artístico 321",
      price: 95000,
      year: 2018,
      codeInternal: "E005",
    },
    {
      id: "6",
      name: "Casa Familiar",
      address: "Residencial Los Pinos",
      price: 280000,
      year: 2020,
      codeInternal: "F006",
    },
  ];



  //   const fetchProperties = async (filters = {}) => {
  //     const params = new URLSearchParams(filters).toString();
  //     const res = await api.get(`/property?${params}`);
  //     setProperties(res.data);
  //   };

  //   useEffect(() => {
  //      fetchProperties();
  //   }, []);

  return (
    // <div className="home">
    //   <h1>Propiedades</h1>
    //   <PropertyFilters onFilter={fetchProperties} />
    //   <PropertyList properties={properties} />
    // </div>
    <div className="home">
      <PropertyCarousel />
      <PropertyList  />
    </div>
  );
};

export default Home;
