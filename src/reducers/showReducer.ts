import { normalize, schema } from "normalizr";
import { Reducer } from "redux";
import { SHOWS_FETCH, SHOWS_FETCHED, SHOW_DETAIL_FETCHED } from "../Action";
import { Show } from "../models/Show";

export type ShowState = {
  entities: { [id: number]: Show };
  againstQuery: { [q: string]: number[] };
  query: string;
  detail: Show[];
};

export const intitialShowState: ShowState = {
  query: "",
  entities: {},
  againstQuery: {},
  detail: [],
};

export const showReducer: Reducer<ShowState> = (
  state = intitialShowState,
  action
) => {
  switch (action.type) {
    case SHOWS_FETCHED:
      const { query, show } = action.payload as { query: string; show: Show[] };
      const showEntities = new schema.Entity("shows");
      const normalized = normalize(show, [showEntities]);
      const normalizedShows = normalized.entities.shows;
      const ids = show.map((s) => s.id);

      return {
        ...state,
        entities: { ...state.entities, ...normalizedShows },
        againstQuery: { ...state.againstQuery, [query]: ids },
      };
    case SHOWS_FETCH:
      return { ...state, query: action.payload };
    case SHOW_DETAIL_FETCHED:
      return { ...state, detail: [action.payload] };
    default:
      return state;
  }
};
