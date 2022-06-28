import { normalize, schema } from "normalizr";
import { Reducer } from "redux";
import {
  ACTOR_DETAIL_FETCH,
  ACTOR_DETAIL_FETCHED,
  CAST_FETCHED,
} from "../Action";
import { Cast } from "../models/Cast";

export type CastState = {
  entities: { [id: number]: Cast };
  actorLoading: boolean;
};
export const initialState: CastState = {
  entities: {},
  actorLoading: false,
};

export const castReducer: Reducer<CastState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ACTOR_DETAIL_FETCH:
      return { ...state, actorLoading: true };
    case ACTOR_DETAIL_FETCHED:
      const actorObj: Cast = action.payload;
      return {
        ...state,
        entities: { ...state.entities, [actorObj.id]: actorObj },
        actorLoading: false,
      };
    case CAST_FETCHED:
      const { id, cast } = action.payload as { id: number; cast: Cast[] };
      const castEntities = new schema.Entity("cast");
      const normalized = normalize(cast, [castEntities]);
      const normalizedCast = normalized.entities.cast;

      return {
        ...state.entities,
        entities: { ...state.entities, ...normalizedCast },
      };
    default:
      return state;
  }
};
