import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import ReactScrollPagination from 'react-scroll-pagination';
import styled from 'styled-components';
import { makeSelectFeed, makeSelectLoading, makeSelectError } from './selectors';
import { loadFeedAttempt } from './actions';
import LoadingIndicator from '../../components/LoadingIndicator';
import FeedList from '../../components/FeedList';
import text from './text';

const Container = styled.div`
  overflow: hidden;
`;

export class HomePage extends React.PureComponent {
  componentDidMount() {
    this.props.getFeed();
  }

  render() {
    const { loading, error, feed } = this.props;
    const feedListProps = {
      loading,
      error,
      feed,
    };

    return (
      <Container>
        <div>
          <h1>{ text.title }</h1>
          <FeedList {...feedListProps} />
          { loading && <LoadingIndicator /> }
        </div>
        <ReactScrollPagination
          fetchFunc={this.props.getFeed}
        />
      </Container>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  feed: PropTypes.array,
  getFeed: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    getFeed: () => dispatch(loadFeedAttempt()),
  };
}

const mapStateToProps = createStructuredSelector({
  feed: makeSelectFeed(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

// Wrap to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
