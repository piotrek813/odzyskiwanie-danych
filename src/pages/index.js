import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import MainTemplate from 'templates/MainTemplate';
import ServicesTemplate from 'templates/ServicesTemplate';
import BlogReferenceTemplate from 'templates/BlogReferenceTemplate';

const content = {
  blog: [
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

const IndexPage = ({ data }) => (
  <MainTemplate hero={data.datoCmsHome}>
    <>
      {data.allDatoCmsService.edges.map(
        ({ node: { img, heading, paragraph } }, index) => {
          const isMirror = index % 2 !== 0;
          return (
            <ServicesTemplate
              key={heading}
              isMirror={isMirror}
              img={img}
              heading={heading}
              paragraph={paragraph}
            />
          );
        }
      )}
      <BlogReferenceTemplate data={content.blog} />
    </>
  </MainTemplate>
);

export const query = graphql`
  query HomeQuery {
    datoCmsHome {
      heading
      paragraph
    }
    allDatoCmsService {
      edges {
        node {
          heading
          paragraph
          img {
            fluid(maxWidth: 800, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default IndexPage;
