import { FC, memo } from "react";
import { withRouter, WithRouterProps } from "../hoc/withRouter";

type ActorDetailProps = {} & WithRouterProps;

const ActorDetail: FC<ActorDetailProps> = ({ params }) => {
  const actorId = +params.actorId;
  return <>this is a actor detail page {actorId}</>;
};

ActorDetail.defaultProps = {};

export default withRouter(memo(ActorDetail));
