import { FC, memo } from "react";
import { useNavigate } from "react-router-dom";
import { Cast } from "../models/Cast";
type CastRowProps = {
  cast: Cast;
};

const CastRow: FC<CastRowProps> = ({ cast }) => {
  const navigate = useNavigate();
  const handelClick = () => navigate(`/actor/${cast.id}`);
  return (
    <>
      <div
        onClick={handelClick}
        className="flex cursor-pointer border space-x-4 w-56 p-2 m-1 rounded-md">
        <img
          className="object-cover object-top rounded-full shrink-0  h-24 w-24"
          src={
            cast.image?.medium ||
            "https://cdn3.vectorstock.com/i/thumb-large/63/42/avatar-photo-placeholder-icon-design-vector-30916342.jpg"
          }
        />

        <div className="pt-3">
          <h1 className="font-medium text-zinc-700">{cast.name}</h1>
          <h1 className=" text-zinc-600 text-sm"> {}</h1>
        </div>
      </div>
    </>
  );
};

CastRow.defaultProps = {};

export default memo(CastRow);
