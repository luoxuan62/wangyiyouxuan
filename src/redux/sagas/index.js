import { all, fork } from 'redux-saga/effects';

import catalog from './catalog'
import goods from './goods'

export default function* root() {
  yield all([
  
    fork(catalog),
    fork(goods),
   
  ]);
}
