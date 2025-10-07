import { from } from "rxjs";
import { map, switchMap } from "rxjs/operators";

// Configuración de la API
const API_BASE_URL = "https://localhost:7003/api";

export const getAllProperties = async (filters = {}) => {
  try {
    const queryParams = new URLSearchParams(filters).toString();
    const url = `${API_BASE_URL}/properties${
      queryParams ? `?${queryParams}` : ""
    }`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Error en la solicitud");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener propiedades:", error);
    throw new Error(`No se pudieron cargar las propiedades: ${error.message}`);
  }
};

/**
 * Fetch detalles de una propiedad específica por ID
 */
export const fetchPropertyDetail = (id) => {
  const url = `https://localhost:7093/api/properties/${id}`;

  return from(fetch(url)).pipe(
    switchMap((response) => {
      if (!response.ok) {
        throw new Error("Error al obtener detalles de la propiedad");
      }
      return response.json();
    })
  );
};

export const getPropertyDetail = async (id) => {
  console.log("ver si llega el id", id);
  try {
    const url = `${API_BASE_URL}/properties/${id}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Error al obtener detalles de la propiedad");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error al obtener detalles de la propiedad ${id}:`, error);
    throw new Error(
      `No se pudieron cargar los detalles de la propiedad: ${error.message}`
    );
  }
};
