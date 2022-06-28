import { FC, memo } from "react";
import { CastObj } from "../models/Cast";

type CastRowProps = {
  cast: CastObj;
};

const CastRow: FC<CastRowProps> = ({ cast }) => {
  if (!cast) {
    return <>Cast is not available yet </>;
  }
  return (
    <>
      <div className="flex space-x-2 items-start w-56 ">
        <img
          className="object-cover object-top rounded-full shrink-0  h-24 w-24"
          src={
            cast.person.image?.medium ||
            "https://cdn3.vectorstock.com/i/thumb-large/63/42/avatar-photo-placeholder-icon-design-vector-30916342.jpg"
          }
        />

        <div className="pt-3">
          <h1 className="font-medium text-zinc-700">{cast.person.name}</h1>
          <h1 className=" text-zinc-600 text-sm">as {cast.character.name}</h1>
        </div>
      </div>
    </>
  );
};

CastRow.defaultProps = {};

export default memo(CastRow);
