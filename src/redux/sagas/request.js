import { put } from 'redux-saga/effects';

import ActionsTypes from '../actions/actionTypes';

export function requestBefore(callback) {
  return function*(params) {
    yield put({
      type: ActionsTypes.LOADING_START,
    });
    if (callback) {
      yield* callback(params);
      window.scrollTo(0,0)
    }
    yield put({
      type: ActionsTypes.LOADING_END,
    });
  }
}