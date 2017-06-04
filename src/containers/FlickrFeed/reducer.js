import Immutable from 'seamless-immutable';

import {
  LOAD_FEED_ATTEMPT,
  LOAD_FEED_SUCCESS,
  LOAD_FEED_FAILURE,
} from './constants';

// The initial state
const initialState = Immutable({
  loading: false,
  error: false,
  feed: [],
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_FEED_ATTEMPT:
      return state
        .set('loading', true)
        .set('error', false);
    case LOAD_FEED_SUCCESS:
      return state
        .update('feed', (previousFeedList) => previousFeedList.concat(action.feed))
        .set('loading', false);
    case LOAD_FEED_FAILURE:
      return state
        .set('loading', false)
        .set('error', action.error);
    default:
      return state;
  }
}

export default appReducer;
