/**
 * Gets the photos_public feed from Flickr
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_FEED_ATTEMPT } from './constants';
import { loadFeedSuccess, loadFeedFailure } from './actions';

import { requestJsonp } from '../../utils/request';

/**
 * Flickr request/response handler
 */
function* getFeed() {
  const requestURL = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json';

  try {
    // Call our requestJsonp helper (see 'utils/request')
    const feed = yield call(requestJsonp, requestURL, { jsonpCallback: 'jsoncallback' });
    yield put(loadFeedSuccess(feed.items));
  } catch (err) {
    yield put(loadFeedFailure(err));
  }
}

export default function* flickrData() {
  // Watches for LOAD_FEED_ATTEMPT actions and calls getFeed when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // This is important in situations such as continuous scroll where action may
  // be triggered multiple times.
  yield takeLatest(LOAD_FEED_ATTEMPT, getFeed);
}
