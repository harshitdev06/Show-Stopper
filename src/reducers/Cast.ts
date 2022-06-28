import { normalize, schema } from "normalizr";
import { Reducer } from "redux";
import { CAST_FETCH, CAST_FETCHED } from "../Action";
import { Cast } from "../models/Cast";

export type CastState = {
  entities: { [id: number]: Cast };
};
export const initialState: CastState = {
  entities: {},
};
export const castReducer: Reducer<CastState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
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
