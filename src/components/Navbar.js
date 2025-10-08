import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Box,
  TextField,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const Search = styled("form")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  flexWrap: "wrap",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  paddingLeft: theme.spacing(2),
  "& .MuiInputBase-input": {
    padding: theme.spacing(1),
    width: "200px",
  },
}));

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [address, setAddress] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const filters = {
      name: searchTerm,
      address: address,
      minPrice: minPrice || "",
      maxPrice: maxPrice || "",
    };

    onSearch(filters);
    navigate("/");
  };

  return (
    <AppBar position="static" sx={{ py: 1 }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Typography
          variant="h6"
          onClick={() => navigate("/")}
          sx={{ cursor: "pointer" }}
        >
          🏠 RealEstateApp
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <TextField
            variant="outlined"
            size="small"
            label="Buscar por nombre"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <TextField
            variant="outlined"
            size="small"
            label="Buscar por dirección"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <TextField
            variant="outlined"
            size="small"
            label="Precio mínimo"
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <TextField
            variant="outlined"
            size="small"
            label="Precio máximo"
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />

          <Button variant="contained" type="submit" startIcon={<SearchIcon />}>
            Buscar
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
