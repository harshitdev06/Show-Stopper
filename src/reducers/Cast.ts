import { Reducer } from "redux";
import { CAST_FETCH, CAST_FETCHED } from "../Action";
import { Cast } from "../models/Cast";

export type CastState = {
  entities: Cast[];
};
export const initialState: CastState = {
  entities: [],
};
export const castReducer: Reducer<CastState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case CAST_FETCHED:
      return {
        ...state.entities,
        entities: [action.payload],
      };
    default:
      return state;
  }
};
