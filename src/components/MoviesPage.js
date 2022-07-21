import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import MoviesList from "./MoviesList";
import MovieShow from "./MovieShow";
// import { Route } from "react-router-dom";
// import MoviesList from "./MoviesList.js";

function MoviesPage({ movies }) {
  const match = useRouteMatch();
  return (
    <div>
      <MoviesList movies={movies} />
      <Route exact path={match.url}>
      </Route>
      <Route path={`${match.url}/:movieId`}>
        <MovieShow movies={movies} />
        </Route>

    </div>
  );
}
export default MoviesPage;
