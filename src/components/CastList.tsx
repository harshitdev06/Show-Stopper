import { FC, memo, useEffect } from "react";
import { connect } from "react-redux";
import { fetchCastAction } from "../Action";
import { withRouter, WithRouterProps } from "../hoc/withRouter";
import { Cast } from "../models/Cast";
import { castEntitiesSelector } from "../selector";
import { State } from "../store";
import CastRow from "./CastRow";

type CastListProps = {
  casts: Cast;
  fetchCast: (id: number) => void;
} & WithRouterProps;

const CastList: FC<CastListProps> = ({ casts, fetchCast, params }) => {
  // useEffect(() => {
  //   fetchCast(+params.id);
  // }, []);
  if (!casts) return <></>;
  return (
    <div className=" flex flex-wrap space-y-2  ">
      {casts.map((c) => (
        <CastRow cast={c} />
      ))}
    </div>
  );
};

CastList.defaultProps = {};
const mapStateToProps = (s: State) => ({
  casts: castEntitiesSelector(s),
});
const mapDispatchToProps = {
  fetchCast: fetchCastAction,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(memo(CastList))
);
