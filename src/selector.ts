import { createSelector } from "reselect";
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
export const showDetailSelector = createSelector(
  showStateSelector,
  (state) => state.detail
);
export const castEntitiesSelector = createSelector(
  castStateSelector,
  (castState) => castState.entities[0]
);
