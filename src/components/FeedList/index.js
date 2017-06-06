import React from 'react';
import PropTypes from 'prop-types';
import FeedRecord from '../FeedRecord';

const FeedList = ({ error, feed }) => {
  if (error !== false) {
    return <div>Something went wrong, please try again!</div>;
  }

  if (feed.length > 0) {
    return (
      <div className="row">
        {feed.map((data, index) => (
          <FeedRecord
            key={index}
            data={data}
          />
        ))}
      </div>
    );
  }

  return null;
};

FeedList.propTypes = {
  error: PropTypes.any,
  feed: PropTypes.array,
};

export default FeedList;
