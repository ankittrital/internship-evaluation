import {combineReducers} from 'redux';
import nowShowingReducer from './NowShowingReducer';
import CinemasReducer from './CinemasReducer';
import ComingSoonReducers from './ComingSoonReducer';

export default combineReducers({
  nowShowing: nowShowingReducer,
  cinemas: CinemasReducer,
  comingSoon: ComingSoonReducers,
});
