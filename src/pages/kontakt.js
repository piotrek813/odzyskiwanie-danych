import React from 'react';
import { graphql } from 'gatsby';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import styled from 'styled-components';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import media from 'utils/media';
import MainTemplate from 'templates/MainTemplate';
import ContactItem from 'components/ContactItem';
import {
  faMapMarkerAlt,
  faPhone,
  faClock,
} from '@fortawesome/free-solid-svg-icons';

const StyledWrapper = styled.section`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 40vh 60vh;

  ${media.small`
      grid-template-columns: 1fr 45%;
      grid-template-rows: 1fr;
  `}

  ${media.big`
      grid-template-columns: 1fr 35%;
  `}
`;

const StyledContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

// const StyledImg = styled(Img)`

// `;

const ContactPage = ({ data: { datoCmsContact } }) => (
  <MainTemplate
    hero={{
      heading: datoCmsContact.heading,
      paragraph: datoCmsContact.paragraph,
    }}
  >
    <HelmetDatoCms seo={datoCmsContact.seoMetaTags} />
    <StyledWrapper>
      <Img {...datoCmsContact.mapImg} />
      <StyledContactWrapper>
        <ContactItem
          icon={faMapMarkerAlt}
          heading={datoCmsContact.adressHeading}
          content={datoCmsContact.adressContentNode.childMarkdownRemark.html}
        />
        <ContactItem
          icon={faClock}
          heading={datoCmsContact.openingHoursHeading}
          content={
            datoCmsContact.openingHoursContentNode.childMarkdownRemark.html
          }
        />
        <ContactItem
          icon={faPhone}
          heading={datoCmsContact.phoneHeading}
          content={datoCmsContact.phoneContentNode.childMarkdownRemark.html}
        />
      </StyledContactWrapper>
    </StyledWrapper>
  </MainTemplate>
);

export const query = graphql`
  query ContactQuery {
    datoCmsContact {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      heading
      paragraph
      mapImg {
        fluid {
          ...GatsbyDatoCmsFluid_noBase64
        }
        alt
        title
      }
      adressHeading
      adressContentNode {
        childMarkdownRemark {
          html
        }
      }
      openingHoursHeading
      openingHoursContentNode {
        childMarkdownRemark {
          html
        }
      }
      phoneHeading
      phoneContentNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

ContactPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default ContactPage;
