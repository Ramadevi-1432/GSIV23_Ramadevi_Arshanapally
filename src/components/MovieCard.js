import React from "react";
import { IMAGE_CDN } from "../Utils/constants";

const MovieCard = ({ movie }) => {
  const { title, backdrop_path, vote_average, overview } = movie;
  return (
    <>
      <div className="flex flex-col w-[270px] shadow-lg rounded-lg m-3 cursor-pointer hover:scale-110">
        <img
          src={IMAGE_CDN + backdrop_path}
          alt={title}
          className="rounded-lg"
        />
        <div className="flex justify-between p-2">
          <span className="font-semibold text-md">{title}</span>
          <span className="font-semibold">⭐ {vote_average}</span>
        </div>
        <span className="mx-2 text-sm mb-4">{overview.slice(0, 100)}...</span>
      </div>
    </>
  );
};

export default MovieCard;
