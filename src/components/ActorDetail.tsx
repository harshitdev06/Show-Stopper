import { FC, memo, useEffect } from "react";
import { connect } from "react-redux";
import { fetchActorDetail, fetchCastAction } from "../Action";
import { withRouter, WithRouterProps } from "../hoc/withRouter";
import { Cast } from "../models/Cast";
import { actorDetailLoading, castEntitiesSelector } from "../selector";
import { State } from "../store";
import Spinner from "./Spinner";

import { DateTime } from "luxon";

type ActorDetailProps = {
  fetchCastDetail: (actorId: number) => void;
  actor: Cast;
  loader: boolean;
} & WithRouterProps;

const ActorDetail: FC<ActorDetailProps> = ({
  params,
  actor,
  fetchCastDetail,
  loader,
}) => {
  const actorId = +params.actorId;
  useEffect(() => {
    fetchCastDetail(actorId);
  }, []);
  if (!actor) return <></>;
  return (
    <>
      {loader && <Spinner />}
      {actor && (
        <div className=" p-8 h-screen bg-gray-200 ">
          <div className="bg-gray-400 rounded-md shadow-lg flex items-start p-4 ">
            <img
              className="rounded-md shadow-md"
              src={
                actor.image?.medium ||
                "https://cdn3.vectorstock.com/i/thumb-large/63/42/avatar-photo-placeholder-icon-design-vector-30916342.jpg"
              }
            />
            <div className="pl-4">
              <div className="text-4xl font-bold "> {actor.name}</div>
              <div className="flex space-x-2 items-center">
                <span className="text-zinc-700 font-semibold">Born :</span>
                <span className="ml-1 font-semibold text-zinc-700  text-lg">
                  {DateTime.fromISO(actor.birthday.toString()).toFormat(
                    ` LLL dd y`
                  )}
                </span>
                <div className="space-x-2">
                  <span className="text-zinc-700 font-semibold"> in </span>
                  <span className=" text-gray-500 font-semibold text-lg">
                    {actor.country.name}
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

ActorDetail.defaultProps = {};
const mapStateToProps = (s: State, props: any) => ({
  actor: castEntitiesSelector(s)[+props.params.actorId],
  loader: actorDetailLoading(s),
});

const mapDispatchToProps = {
  fetchCastDetail: fetchActorDetail,
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(memo(ActorDetail))
);
