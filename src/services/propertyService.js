import { from } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

export const fetchProperties = (filters) => {
  const queryParams = new URLSearchParams(filters).toString();

  const url = `https://localhost:7093/api/properties?${queryParams}`;

  return from(fetch(url)).pipe(
    switchMap((response) => {
      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }
      return response.json();
    })
  );
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