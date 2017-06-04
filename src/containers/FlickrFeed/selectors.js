import { createSelector } from 'reselect';

const selectFlickrFeed = (state) => state.FlickrFeed;

const makeSelectLoading = () => createSelector(
  selectFlickrFeed,
  (flickrFeedState) => flickrFeedState.loading
);

const makeSelectError = () => createSelector(
  selectFlickrFeed,
  (flickrFeedState) => flickrFeedState.error
);

const makeSelectFeed = () => createSelector(
  selectFlickrFeed,
  (flickrFeedState) => flickrFeedState.feed
);

export {
  makeSelectLoading,
  makeSelectError,
  makeSelectFeed,
};
