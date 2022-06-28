import { Show } from "./models/Show";

export const SHOWS_FETCH = "show fetch";
export const SHOWS_FETCHED = "show fetched";
export const SHOW_DETAIL_FETCH = "show detail fetch";
export const SHOW_DETAIL_FETCHED = "show detail fetched";
export const CAST_FETCH = "cast fetch";
export const CAST_FETCHED = "cast fetched";

export const fetchShowAction = (query: string) => ({
  type: SHOWS_FETCH,
  payload: query,
});
export const fetchedShowAction = (query: string, show: Show[]) => ({
  type: SHOWS_FETCHED,
  payload: { show, query },
});

export const fetchShowDetailAction = (id: number) => ({
  type: SHOW_DETAIL_FETCH,
  payload: id,
});
export const fetchedShowDetailAction = (showDetail: Show) => ({
  type: SHOW_DETAIL_FETCHED,
  payload: showDetail,
});
export const fetchCastAction = (id: number) => ({
  type: CAST_FETCH,
  payload: id,
});
export const fetchedCastAction = (castId: number, cast: any[]) => ({
  type: CAST_FETCHED,
  payload: {cast, castId}
});
