import { useEffect, useState } from "react";
import { useQuery } from "../hooks/useQuery";
import { httpGet } from "../utils/httpClient";
import { MovieCard } from "./MovieCard";
// import movies from "./movies.json";
import styles from "./MoviesGrid.module.css";
import { Spinner } from "./Spinner";

export function MoviesGrid() {

  // Para realizar la busqueda de peliculas con custom hook
  const query =  useQuery();
  const search =  query.get("search");

  // Para poder almacenar la respuesta y no se pierda
  const [movies, setMovies] = useState([]);

  // Para saber si se encuentra cargando la info de la peli
  const [isLoading, setIsLoading] = useState(true)

  // Hooks Realiza una acción despues de haber cargado el componente
  useEffect(() => {
    setIsLoading(true);

    // Para la busqueda
    const searchUrl =  search ? "/search/movie?query=" + search : "/discover/movie";

    httpGet(searchUrl)
    .then(data => {
      setMovies(data.results);
      setIsLoading(false);
    });
  }, [search]); // Arreglo para que solo se cargue una vez el efecto

  if (isLoading) {
    return <Spinner/>;
  }

  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
