import { FC, memo } from "react";
import { useNavigate } from "react-router-dom";
import { Show } from "../models/Show";

type ShowRowProps = {
  show: Show;
};

const ShowRow: FC<ShowRowProps> = ({ show }) => {
  const navigate = useNavigate();
  const handelClick = () => navigate(`/show/${show.id}`);
  return (
    <div
      onClick={handelClick}
      className="p-2 cursor-pointer space-y-2 bg-white rounded mb-3 shadow-md">
      <div className="rounded-md overflow-hidden w-52 h-72 shrink-0   ">
        <img
          className="h-full object-cover"
          src={
            show.image?.medium ||
            "https://image.shutterstock.com/image-vector/film-reel-icon-trendy-modern-260nw-1656401926.jpg"
          }
        />
      </div>
      <div className="">
        <h1 className="font-semibold"> {show.name}</h1>
        <div className="flex items-center space-x-2">
          <h1 className="inline p-1  w-7 text-center bg-yellow-300 rounded text-sm text-black">
            {show.rating?.average || "7.5"}
          </h1>

          <h1 className="text-gray-500  text-sm font-thin ">
            {show.genres.map((s) => (
              <span className="space-x-1"> {s}</span>
            ))}
          </h1>
        </div>
      </div>
    </div>
  );
};

ShowRow.defaultProps = {};

export default memo(ShowRow);
