import React, { useEffect, useState } from "react";
import { HiMiniHome } from "react-icons/hi2";
import { Link, useParams } from "react-router-dom";
import { API_KEY } from "../Utils/constants";
import MovieDetails from "./MovieDetails";
import Movie from "./Movie";

const MovieInfo = () => {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState([]);
  const [movieInfoDetails, setMovieInfoDetails] = useState([]);
  useEffect(() => {
    getMovieInfo();
    // eslint-disable-next-line
  }, []);
  const getMovieInfo = async () => {
    const url =
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=` +
      `${API_KEY}`;
    const data = await fetch(url);
    const json = await data.json();
    //console.log(json);
    setMovieInfo(json);
  };

  useEffect(() => {
    getMovieInfoDetails();
    // eslint-disable-next-line
  }, []);
  const getMovieInfoDetails = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=US`
    );

    const json = await data.json();
    setMovieInfoDetails(json);
    // console.log(json);
  };

  return (
    <>
      <div className="flex justify-between m-2 items-center shadow-lg py-3">
        <h1 className="font-bold text-2xl mx-6">Movie Details</h1>
        <Link to="/">
          <HiMiniHome className="mr-10" size={25} />
        </Link>
      </div>
      <Movie movies={movieInfoDetails} crew={movieInfo?.crew} />
      <MovieDetails cast={movieInfo?.cast} />
    </>
  );
};

export default MovieInfo;
