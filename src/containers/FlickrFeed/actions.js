import {
  LOAD_FEED_ATTEMPT,
  LOAD_FEED_SUCCESS,
  LOAD_FEED_FAILURE,
} from './constants';

/**
 * Attempt to load the feed, this action starts the request saga
 */
export function loadFeedAttempt() {
  return {
    type: LOAD_FEED_ATTEMPT,
  };
}

/**
 * Dispatched when the feed is successfully loaded by the request saga
 */
export function loadFeedSuccess(feed) {
  return {
    type: LOAD_FEED_SUCCESS,
    feed,
  };
}

/**
 * Dispatched when loading the feed fails
 */
export function loadFeedFailure(error) {
  return {
    type: LOAD_FEED_FAILURE,
    error,
  };
}
