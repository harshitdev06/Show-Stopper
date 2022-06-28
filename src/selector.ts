import { createSelector } from "reselect";
import { Cast } from "./models/Cast";
import { State } from "./store";

const showStateSelector = (s: State) => s.shows;
const castStateSelector = (s: State) => s.cast;

export const showQuerySelector = createSelector(
  showStateSelector,
  (showState) => showState.query
);
const showAgainsQuerySelector = createSelector(
  showStateSelector,
  (showState) => showState.againstQuery
);
export const showEntitiesSelector = createSelector(
  showStateSelector,
  (showState) => showState.entities
);
const showIdsSelector = createSelector(
  showAgainsQuerySelector,
  showQuerySelector,
  (againstQuery, query) => againstQuery[query] || []
);
export const showListSelector = createSelector(
  showIdsSelector,
  showEntitiesSelector,
  (ids, entities) => ids.map((id) => entities[id])
);
export const showsLoadingSelector = createSelector(
  showStateSelector,
  (showState) => showState.showsLoding
);
export const showLoadingSelector = createSelector(
  showStateSelector,
  (showState) => showState.showLoading
);
export const castEntitiesSelector = createSelector(
  castStateSelector,
  (castState) => castState.entities
);
export const castIdsSelector = createSelector(
  showStateSelector,
  (showState) => showState.castIds
);
export const showCastSelector = createSelector(
  castEntitiesSelector,
  castIdsSelector,
  (castEntities, showCastIds) => {
    const data = Object.keys(showCastIds).reduce((showCast, showId) => {
      const castIds = showCastIds[+showId];
      const cast = castIds.map((ci) => castEntities[ci]);
      return { ...showCast, [showId]: cast };
    }, {});
    return data as { [id: number]: Cast[] };
  }
);

export const actorDetailLoading = createSelector(
  castStateSelector,
  (castState) => castState.actorLoading
);
