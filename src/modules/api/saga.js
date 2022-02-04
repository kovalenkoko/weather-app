import api from "modules/api/api";
import { API_ACTIONS, apiActions } from "modules/api/actions";
import { takeEvery, put, all } from "@redux-saga/core/effects";

export function* onApiLoad({ type, options, payload }) {
  const actionType = type.replace(API_ACTIONS.FETCH_START, "").toLowerCase();

  try {
    const response = yield api.fetch(actionType, options, payload);

    yield put(apiActions.fetchSuccess(actionType, options, response));
  } catch (e) {
    yield put(apiActions.fetchFailure(actionType, e));
  }
}

export function* watchApiLoad() {
  yield takeEvery(
    (action) => action.type.startsWith(API_ACTIONS.FETCH_START),
    onApiLoad
  );
}

export default function* apiRootSaga() {
  yield all([watchApiLoad()]);
}
