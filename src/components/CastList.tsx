import { FC, memo, useEffect } from "react";
import { connect } from "react-redux";
import { fetchCastAction } from "../Action";
import { withRouter, WithRouterProps } from "../hoc/withRouter";
import { Cast } from "../models/Cast";
import { showCastSelector } from "../selector";
import { State } from "../store";
import CastRow from "./CastRow";

type CastListProps = {
  casts: Cast[];
  fetchCast: (id: number) => void;
} & WithRouterProps;

const CastList: FC<CastListProps> = ({ casts, fetchCast, params }) => {
  useEffect(() => {
    fetchCast(+params.id);
  }, []);
  if (!casts) return <></>;
  return (
    <div className=" w-1/2  flex flex-wrap">
      {casts.map((c) => (
        <CastRow key={c.id} cast={c} />
      ))}
    </div>
  );
};

CastList.defaultProps = {};

const mapStateToProps = (s: State, props: any) => ({
  casts: showCastSelector(s)[+props.params.id],
});
const mapDispatchToProps = {
  fetchCast: fetchCastAction,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(memo(CastList))
);
