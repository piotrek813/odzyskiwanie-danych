import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import MainTemplate from 'templates/MainTemplate';

const StyledTable = styled.table`
  width: 90%;
  margin: 20px auto 20px auto;
  border: 0;
  border-collapse: collapse;
  font-size: ${({ theme }) => theme.font.size.content.small};
`;

const StyledThead = styled.thead`
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.font.size.content.medium};
`;

const StyledTh = styled.th`
  padding: 5px;

  &:last-of-type {
    padding: 5px 15px;
  }
`;

const StyledTr = styled.tr`
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid ${({ theme }) => theme.lightenPrimary};
  border-left: 0;
  background: ${({ theme, dark }) => (dark ? theme.lightenPrimary : 'none')};
  color: ${({ theme, dark }) => (dark ? theme.white : 'inherit')};

  &:last-child {
    border-bottom: 0;
  }

  &:hover {
    background: ${({ theme, hover }) => (hover ? theme.gray : 'unset')};
  }

  &:hover td {
    background: ${({ theme, hover }) =>
      hover ? 'transparent' : theme.lightenPrimary};
  }
`;

const StyledTd = styled.td`
  border: 0;
  text-align: ${({ center }) => (center ? 'center' : 'left')};
  padding: 8px;
`;

const PricingPage = ({ data: { datoCmsPricing } }) => (
  <MainTemplate
    hero={{
      heading: datoCmsPricing.heading,
      paragraph: datoCmsPricing.paragraph,
    }}
  >
    <HelmetDatoCms seo={datoCmsPricing.seoMetaTags} />
    <StyledTable>
      <StyledThead>
        <StyledTr>
          <StyledTh>Opis</StyledTh>
          <StyledTh>Cena</StyledTh>
          <StyledTh>Dodatkowy opis</StyledTh>
        </StyledTr>
      </StyledThead>
      <tbody>
        {datoCmsPricing.table.map((item) => (
          <React.Fragment key={item.id}>
            {/* eslint-disable-next-line no-underscore-dangle */}
            {item.__typename === 'DatoCmsHeading' && (
              <StyledTr dark>
                <StyledTd colSpan="3" center>
                  {item.heading}
                </StyledTd>
              </StyledTr>
            )}
            {/* eslint-disable-next-line no-underscore-dangle */}
            {item.__typename === 'DatoCmsRow' && (
              <StyledTr hover>
                <StyledTd>{item.description}</StyledTd>
                <StyledTd center>{item.price} zł</StyledTd>
                <StyledTd>{item.additionalDescription}</StyledTd>
              </StyledTr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </StyledTable>
  </MainTemplate>
);

PricingPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export const query = graphql`
  query PricingQuery {
    datoCmsPricing {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      heading
      paragraph
      table {
        ... on DatoCmsHeading {
          __typename
          heading
          id
        }
        ... on DatoCmsRow {
          __typename
          description
          price
          additionalDescription
          id
        }
      }
    }
  }
`;

export default PricingPage;
