import { normalize, schema } from "normalizr";
import { Reducer } from "redux";
import {
  SHOWS_FETCH,
  SHOWS_FETCHED,
  SHOW_DETAIL_FETCH,
  SHOW_DETAIL_FETCHED,
} from "../Action";
import { Show } from "../models/Show";

export type ShowState = {
  entities: { [id: number]: Show };
  againstQuery: { [q: string]: number[] };
  query: string;
  showsLoding: boolean;
  showLoading: {
    [id: number]: boolean;
  };
};

export const intitialShowState: ShowState = {
  query: "",
  entities: {},
  againstQuery: {},
  showsLoding: false,
  showLoading: {},
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
        showsLoding: false,
      };
    case SHOWS_FETCH:
      const showQuery = action.payload;
      let loadder = showQuery ? true : false;
      return { ...state, query: showQuery, showsLoding: loadder };

    case SHOW_DETAIL_FETCH:
      const id = action.payload;
      return { ...state, showLoading: { ...state.showLoading, [id]: true } };
    case SHOW_DETAIL_FETCHED:
      const showObj: Show = action.payload;
      return {
        ...state,
        entities: { ...state.entities, [showObj.id]: showObj },
        showLoading: { ...state.showLoading, [showObj.id]: false },
      };
    default:
      return state;
  }
};
