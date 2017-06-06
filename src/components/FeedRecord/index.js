import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

const Container = styled.div`
  color: white;
`;

const Record = styled.div`
  margin-top: 1rem;
  padding: 0.5em;
  background: #00A779;
`;

const IMAGE_HEIGHT = '20rem';
const FeedImage = styled.div`
  height: ${IMAGE_HEIGHT};
  background-image: url(${(props) => props.src});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const Info = styled.div``;

const Anchor = styled.a`
  text-decoration: none;
`;

const Title = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:before {
    content: '${(props) => props.prefix}';
    color: white;
  }
`;

const isEmpty = (string) => (
  string.length === 0
);

const FeedRecord = ({ data }) => (
  <Container className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
    <Record>
      <LazyLoad height={IMAGE_HEIGHT} offset={550}>
        <Anchor href={data.media.m} target="_blank" rel="noopener noreferrer">
          <FeedImage src={data.media.m} />
        </Anchor>
      </LazyLoad>
      <Info>
        { !isEmpty(data.title.trim())
          ? <Title>{data.title}</Title>
          : <br />}
        <Anchor href={data.link} target="_blank" rel="noopener noreferrer">
          <Title prefix="by ">{data.author.split('"')[1]}</Title>
        </Anchor>
        { !isEmpty(data.tags.trim())
          ? <Title><i>{data.tags}</i></Title>
          : <br />}
      </Info>
    </Record>
  </Container>
);

FeedRecord.propTypes = {
  data: PropTypes.object,
};

export default FeedRecord;
