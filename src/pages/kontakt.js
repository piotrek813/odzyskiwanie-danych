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

const StyledIframe = styled.iframe`
  border: 0;
  width: 100%;
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
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2444.772123085558!2d20.959745116148493!3d52.211188479756935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecca85746ce63%3A0xf826ff243b5fc8c2!2sOpaczewska%2043%2C%2002-201%20Warszawa%2C%20Polska!5e0!3m2!1spl!2sus!4v1586353080640!5m2!1spl!2sus"
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
