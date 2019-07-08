import { combineReducers } from 'redux';
import common from './common'
import catalog from './catalog'
import goods from './goods'

const CombineReducers = combineReducers({
  common,
  goods,
  catalog,
 
})

export default CombineReducers;
