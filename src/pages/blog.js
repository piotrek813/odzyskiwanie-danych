import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MainTemplate from 'templates/MainTemplate';
import PostReference from '../components/PostReference';

const content = {
  hero: {
    heading: 'Blog',
    paragraph: '',
  },
  posts: [
    {
      img: 'blog1.png',
      heading: 'Jak odzyskać skasowane dane z dysku SSD i co to jest TRIM?',
      paragraph:
        'Nunc sagittis, ligula a porttitor auctor, nunc ex dapibus nisl, quis pharetra urna mi quis neque. Integer tincidunt porta mauris eu scelerisquez',
      date: '2020-30-12',
    },
    {
      img: 'blog2.png',
      heading: 'Jakie dyski są najlepsze do macierzy RAID?',
      paragraph:
        'Nunc sagittis, ligula a porttitor auctor, nunc ex dapibus nisl, quis pharetra urna mi quis neque. Integer tincidunt porta mauris eu scelerisquez',
      date: '2020-13-02',
    },
    {
      img: 'blog3.png',
      heading: 'Odzyskiwanie danych z dysków SSD Sandisk-a ',
      paragraph:
        'Nunc sagittis, ligula a porttitor auctor, nunc ex dapibus nisl, quis pharetra urna mi quis neque. Integer tincidunt porta mauris eu scelerisquez',
      date: '2020-12-12',
    },
    {
      img: 'blog4.png',
      heading: 'Części do naprawy dysków twardych ',
      paragraph:
        'Nunc sagittis, ligula a porttitor auctor, nunc ex dapibus nisl, quis pharetra urna mi quis neque. Integer tincidunt porta mauris eu scelerisquez',
      date: '2020-1-21',
    },
  ],
};

const StyledPostsWrapper = styled.main`
  width: 75%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BlogPage = ({ data }) => (
  <MainTemplate data={data} hero={content.hero}>
    <StyledPostsWrapper>
      {content.posts.map(({ img, date, heading, paragraph }) => (
        <PostReference
          key={heading}
          img={img}
          date={date}
          heading={heading}
          paragraph={paragraph}
          isBig
        />
      ))}
    </StyledPostsWrapper>
  </MainTemplate>
);

export const query = graphql`
  query {
    file(relativePath: { eq: "hero-image-disk.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600, quality: 90) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

BlogPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default BlogPage;
