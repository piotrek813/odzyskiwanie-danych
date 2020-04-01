import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PostReference from 'components/PostReference';

const StyledWrapper = styled.section`
  padding: 40px;
  background: ${({ theme }) => theme.gray};
`;

const StyledHeading = styled.h1`
  font-size: ${({ theme }) => theme.font.size.heading.section};
`;

const StyledReferenceWrapper = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const BlogReferenceTemplate = ({ data }) => (
  <StyledWrapper>
    <StyledHeading>Blog</StyledHeading>
    <StyledReferenceWrapper>
      {data.map(({ heading, img, date, paragraph }) => (
        <PostReference
          key={heading}
          img={img}
          date={date}
          heading={heading}
          paragraph={paragraph}
        />
      ))}
    </StyledReferenceWrapper>
  </StyledWrapper>
);

BlogReferenceTemplate.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BlogReferenceTemplate;
