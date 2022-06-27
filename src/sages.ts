import createSagaMiddleware from "@redux-saga/core";
import { call, put, takeLatest, delay } from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import {
  CAST_FETCH,
  fetchedCastAction,
  fetchedShowAction,
  fetchedShowDetailAction,
  SHOWS_FETCH,
  SHOW_DETAIL_FETCH,
} from "./Action";
import { getCast, getShow, getShowDetail } from "./api";

export const sagaMiddleWare = createSagaMiddleware();

export function* fetchShowList(action: AnyAction): Generator<any, any, any> {
  const query = action.payload;
  if (!query) return;
  yield delay(1000);
  const data = yield call(getShow, query);
  yield put(fetchedShowAction(query, data));
}
export function* fetchShowDetail(action: AnyAction): Generator<any, any, any> {
  const id = action.payload;
  const data = yield call(getShowDetail, id);
  yield put(fetchedShowDetailAction(data));
}
export function* fetchCast(action: AnyAction): Generator<any, any, any> {
  const id = action.payload;
  const data = yield call(getCast, id);
  yield put(fetchedCastAction(data));
}
export function* rootSaga() {
  yield takeLatest(SHOWS_FETCH, fetchShowList);
  yield takeLatest(SHOW_DETAIL_FETCH, fetchShowDetail);
  yield takeLatest(CAST_FETCH, fetchCast);
}
