import { ChangeEvent, FC, memo } from "react";
import { connect } from "react-redux";
import { fetchShowAction } from "../Action";
import { Show } from "../models/Show";
import {
  showListSelector,
  showsLoadingSelector,
  showQuerySelector,
} from "../selector";
import { State } from "../store";
import ShowRow from "./ShowRow";
import Spinner from "./Spinner";

type ShowListProps = {
  shows: Show[];
  fetchShow: (s: string) => void;
  query: string;
  loader: boolean;
};

const ShowList: FC<ShowListProps> = ({ loader, shows, fetchShow, query }) => {
  const handelInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    fetchShow(event.target.value);
  };

  return (
    <div className="flex flex-col">
      <div className="px-10 py-2 flex  items-center  justify-between space-x-2">
        <h1 className="font-bold text-4xl">
          Show <span className="text-yellow-500">Stopper</span>
        </h1>
        <input
          className="px-2 py-1 bg-gray-100 w-72 shadow rounded-md placeholder-indigo-400 border "
          placeholder="Search"
          value={query}
          onChange={handelInputChange}
        />
      </div>
      {loader && (
        <div className=" pl-6">
          <Spinner />
        </div>
      )}
      {
        <div className=" flex space-x-2 flex-wrap p-4 justify-center items-center">
          {shows.map((s) => (
            <ShowRow key={s?.id} show={s} />
          ))}
        </div>
      }
    </div>
  );
};

ShowList.defaultProps = {};
const mapStateToProps = (s: State) => ({
  shows: showListSelector(s),
  query: showQuerySelector(s),
  loader: showsLoadingSelector(s),
});
const mapDispatchToProps = {
  fetchShow: fetchShowAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(ShowList));
