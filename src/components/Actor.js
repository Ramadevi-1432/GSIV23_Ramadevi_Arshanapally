import React from "react";
import { IMAGE_CDN } from "../Utils/constants";
import { logo } from "../Utils/helper";

const Actor = ({ cast }) => {
  const { profile_path, name, character } = cast;
  return (
    <>
      <div className="flex bg-gray-200 m-4 w-[300px] rounded-lg">
        <img
          src={profile_path ? IMAGE_CDN + profile_path : logo}
          alt={name}
          className="w-[120px] rounded-lg"
        />
        <div className="flex flex-col mx-4 mt-2">
          <h1 className="font-semibold text-lg">{name}</h1>
          <p>{character}</p>
        </div>
      </div>
    </>
  );
};

export default Actor;
