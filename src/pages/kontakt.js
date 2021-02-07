import React from 'react';
import { graphql } from 'gatsby';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import styled from 'styled-components';
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
  grid-template-rows: repeat(2, 1fr);

  ${media.medium`
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
  `}
`;

const StyledContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledIframe = styled.iframe`
  border: 0;
  width: 100%;
  height: 100%;
  grid-row: 2;

  ${media.medium`
      grid-row: 1;
  `}
`;

const ContactPage = ({ data: { datoCmsContact } }) => (
  <MainTemplate
    hero={{
      heading: datoCmsContact.heading,
      paragraph: datoCmsContact.paragraph,
    }}
  >
    <HelmetDatoCms seo={datoCmsContact.seoMetaTags} />
    <StyledWrapper>
      <StyledIframe
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBf_iOF4deZEAmUBiRmCn2eEVg1xm_BUtg&q=All+data+recovery+Zygmunta+Modzelewskiego+63+lokal+u5,Warszawa+Polska&center=52.189796,21.015067"
        allowfullscreen
      />
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
