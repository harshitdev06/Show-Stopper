import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, combineReducers, createStore, Reducer } from "redux";
import { castReducer, CastState } from "./reducers/Cast";
import { showReducer, ShowState } from "./reducers/showReducer";
import { rootSaga, sagaMiddleWare } from "./sages";

export type State = {
  shows: ShowState;
  cast:CastState
};
const reducer: Reducer<State> = combineReducers({
  shows: showReducer,
  cast:castReducer
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleWare))
);
sagaMiddleWare.run(rootSaga);

export default store;
