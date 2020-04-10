import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PostReference from 'components/PostReference';

const StyledWrapper = styled.section`
  padding: 50px;
  background: ${({ theme }) => theme.gray};
`;

const StyledHeading = styled.h1`
  font-size: ${({ theme }) => theme.font.size.heading.section};
`;

const StyledReferenceWrapper = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

const BlogReferenceTemplate = ({ data }) => (
  <StyledWrapper>
    <StyledHeading>Blog</StyledHeading>
    <StyledReferenceWrapper>
      {data.map(
        ({
          node: {
            slug,
            heading,
            hero,
            meta: { firstPublishedAt },
            content,
          },
        }) => (
          <PostReference
            key={slug}
            slug={slug}
            img={hero}
            date={firstPublishedAt}
            heading={heading}
            paragraph={content}
          />
        )
      )}
    </StyledReferenceWrapper>
  </StyledWrapper>
);

BlogReferenceTemplate.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BlogReferenceTemplate;
