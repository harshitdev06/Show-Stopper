import { FC, memo, useEffect } from "react";
import { connect } from "react-redux";
import { fetchShowDetailAction } from "../Action";
import { withRouter, WithRouterProps } from "../hoc/withRouter";
import { Show } from "../models/Show";
import { showEntitiesSelector, showLoadingSelector } from "../selector";
import { State } from "../store";
import Spinner from "./Spinner";

type ShowDetailProps = {
  showDetail: Show;
  fetchedDetail: (id: number) => void;
  loadder: boolean;
} & WithRouterProps;

const ShowDetail: FC<ShowDetailProps> = ({
  showDetail,
  params,
  fetchedDetail,
  loadder,
}) => {
  useEffect(() => {
    fetchedDetail(+params.id);
  }, []);
  if (!showDetail) return <></>;

  return (
    <>
      {loadder && <Spinner />}

      {showDetail && (
        <div className=" p-10">
          <div className="">
            <div>
              <div className=" flex items-center justify-between pb-7">
                <div className="space-y-2">
                  <h1 className="font-semibold text-5xl">{showDetail.name}</h1>
                  <h1 className=" pl-3 font-semibold text-gray-600 text-md">
                    {showDetail.language}, {showDetail.runtime}min
                  </h1>
                </div>
                <div className="flex flex-col text-center pr-5">
                  <h1 className="font-semibold text-gray-600 text-lg">
                    Rating{" "}
                  </h1>
                  <span className="text-yellow-500 text-xl font-semibold">
                    {showDetail.rating?.average || "7.0"}/10
                  </span>
                </div>
              </div>
              <div className="flex items-stretch ">
                <img
                  className="rounded-md shadow-md"
                  src={
                    showDetail.image?.medium ||
                    "https://image.shutterstock.com/image-vector/film-reel-icon-trendy-modern-260nw-1656401926.jpg"
                  }
                />
                <div className="pl-5 space-y-2">
                  <p className="text-zinc-500 font-medium text-lg">
                    {showDetail.summary}
                  </p>
                  <h1 className="space-x-2 text-gray-600 text-md ">
                    {showDetail?.genres.map((g) => <span> {g}</span>) ||
                      "Entertainment"}
                  </h1>
                  <h1>{}</h1>
                </div>
              </div>
              <div className="pt-5">
                <h1 className="text-yellow-400 text-2xl font-bold">
                  Top Cast :{" "}
                </h1>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (s: State, props: any) => ({
  showDetail: showEntitiesSelector(s)[+props.params.id],
  loadder: showLoadingSelector(s)[+props.params.id],
});

const mapDispatchToProps = {
  fetchedDetail: fetchShowDetailAction,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(memo(ShowDetail))
);
