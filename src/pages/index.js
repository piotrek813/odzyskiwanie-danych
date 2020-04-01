import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import MainTemplate from 'templates/MainTemplate';
import ServicesTemplate from 'templates/ServicesTemplate';
import BlogReferenceTemplate from 'templates/BlogReferenceTemplate';

const content = {
  services: [
    {
      img: 'hdd.jpg',
      heading: 'Dyski twarde',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nibh sapien, tristique ac suscipit a, suscipit id mi. Suspendisse condimentum elit nulla, sit amet finibus lectus mollis eu. Nunc congue mauris a porttitor convallis. Duis posuere nunc ac rhoncus tristique. Sed in tellus sed nulla tincidunt posuere. Vestibulum dignissim elit non convallis sodales. Sed mattis arcu facilisis, dignissim justo at, ornare lectus. Integer in porttitor libero. Vivamus at erat vel sem facilisis dignissim eget non mi. ',
    },
    {
      img: 'ssd.jpg',
      heading: 'Dyski ssd',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nibh sapien, tristique ac suscipit a, suscipit id mi. Suspendisse condimentum elit nulla, sit amet finibus lectus mollis eu. Nunc congue mauris a porttitor convallis. Duis posuere nunc ac rhoncus tristique. Sed in tellus sed nulla tincidunt posuere. Vestibulum dignissim elit non convallis sodales. Sed mattis arcu facilisis, dignissim justo at, ornare lectus. Integer in porttitor libero. Vivamus at erat vel sem facilisis dignissim eget non mi. ',
    },
    {
      img: 'raid.jpg',
      heading: 'Macierze raid',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nibh sapien, tristique ac suscipit a, suscipit id mi. Suspendisse condimentum elit nulla, sit amet finibus lectus mollis eu. Nunc congue mauris a porttitor convallis. Duis posuere nunc ac rhoncus tristique. Sed in tellus sed nulla tincidunt posuere. Vestibulum dignissim elit non convallis sodales. Sed mattis arcu facilisis, dignissim justo at, ornare lectus. Integer in porttitor libero. Vivamus at erat vel sem facilisis dignissim eget non mi. ',
    },
    {
      img: 'dyski-przenosne.jpg',
      heading: 'Dyski przenośne',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nibh sapien, tristique ac suscipit a, suscipit id mi. Suspendisse condimentum elit nulla, sit amet finibus lectus mollis eu. Nunc congue mauris a porttitor convallis. Duis posuere nunc ac rhoncus tristique. Sed in tellus sed nulla tincidunt posuere. Vestibulum dignissim elit non convallis sodales. Sed mattis arcu facilisis, dignissim justo at, ornare lectus. Integer in porttitor libero. Vivamus at erat vel sem facilisis dignissim eget non mi. ',
    },
  ],
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
  <MainTemplate data={data}>
    <>
      {content.services.map(({ img, heading, paragraph }, index) => {
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
      })}
      <BlogReferenceTemplate data={content.blog} />
    </>
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

IndexPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default IndexPage;
