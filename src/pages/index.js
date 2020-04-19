import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import MainTemplate from 'templates/MainTemplate';
import ServiceSectionTemplate from 'templates/ServiceSectionTemplate';
import BlogReferenceTemplate from 'templates/BlogReferenceTemplate';
import Logo from 'assets/images/logo_all_data_recovery.png';

const IndexPage = ({ data }) => (
  <MainTemplate hero={data.datoCmsHome}>
    <HelmetDatoCms>
      <script type="application/ld+json">{`
        {
          "@context": "http://schema.org",
          "@type": "WebSite",
          "@id": "https://odzyskiwaniedanych.warszawa.pl/",
          "additionalType": ["CreativeWork", "Person"],
          "url": "https://odzyskiwaniedanych.warszawa.pl/",
          "name": "Odzyskiwanie danych",
          "alternateName": "odzyskiwanie danych",
          "headline": "Odzyskiwanie danych - Warszawa Mokotów.",
          "image": "${Logo}",
          "inLanguage": "pl-PL",
          "author": "All Data Recovery",
          "description": "Odzyskiwanie danych z dysku, odzyskiwanie danych z dysku SSD, macierzy RAID, dysku zewnętrznego, dysku przenośnego.",
          "disambiguatingDescription": "Odzyskiwanie danych",
          "isFamilyFriendly": "http://schema.org/True",
          "contentRating": "NR",
          "sourceOrganization": "All Data Recovery",
          "publisher": {
            "@type": "Organization",
            "@id": "All Data Recovery",
            "name": "Odzyskiwanie danych",
            "logo": {
              "@type": "ImageObject",
              "url": "${Logo}",
              "height": 110,
              "width": 232
            }
          },
          "mainEntity": {
            "@context": "http://schema.org",
            "@type": "localBusiness",
            "name": "All Data Recovery",
            "image": "${Logo}",
            "priceRange": "$$",
            "telephone": "609343436",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "modzelewskiego 63 lokal U5",
              "addressLocality": "Warszawa",
              "addressRegion": "Mazowieckie",
              "addressCountry": "Poland",
              "postalCode": "02-679"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.7",
              "reviewCount": "192"
            }
          },
          "accessMode": "textual",
          "accessibilityControl": "fullMouseControl",
          "keywords": ["Odzyskiwanie danych", "Odzyskiwanie danych Warszawa",
            "Odzyskiwanie danych z dysku", "Odzyskiwanie danych z SSD", "Odzyskiwanie danych z dysku zewnętrznego", "naprawa dysków",
            "Odzyskiwanie danych z macierzy RAID", "Odzyskiwanie danych po formacie"
          ]
        }
      `}</script>

      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://odzyskiwaniedanych.warszawa.pl/",
          "name": "Odzyskiwanie danych",
          "image": "${Logo}",
          "url": "https://odzyskiwaniedanych.warszawa.pl/",
          "telephone": "+48 609343436",
          "priceRange": "100-10000zł",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Zygmunta Modzelewskiego 63 lokal U5",
            "addressLocality": "Warszawa",
            "addressRegion": "Mazowieckie",
            "postalCode": "02-679",
            "addressCountry": "PL"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "52.192634736670556",
            "longitude": "21.01323046198426"
          },
          "openingHoursSpecification": [{
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Monday",
              "opens": "09:00",
              "closes": "18:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Tuesday",
              "opens": "09:00",
              "closes": "18:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Wednesday",
              "opens": "09:00",
              "closes": "18:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Thursday",
              "opens": "09:00",
              "closes": "18:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Friday",
              "opens": "09:00",
              "closes": "18:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Saturday",
              "opens": "10:00",
              "closes": "14:00"
            }
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.7",
            "reviewCount": "134",
            "worstRating": 0,
            "bestRating": 5
          }
        }
      `}</script>
    </HelmetDatoCms>
    <>
      {data.allDatoCmsService.edges.map(
        ({ node: { hero, heading, excerpt, slug } }, index) => {
          const isMirror = index % 2 !== 0;
          return (
            <ServiceSectionTemplate
              key={slug}
              slug={slug}
              isMirror={isMirror}
              img={hero}
              heading={heading}
              excerpt={excerpt}
            />
          );
        }
      )}
      <BlogReferenceTemplate data={data.allDatoCmsPost.edges} />
    </>
  </MainTemplate>
);

export const query = graphql`
  query HomeQuery {
    datoCmsHome {
      heading
      paragraph
    }
    allDatoCmsService(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          slug
          heading
          excerpt
          hero {
            fluid(maxWidth: 800, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid_noBase64
            }
            alt
            title
          }
        }
      }
    }
    allDatoCmsPost(
      sort: { fields: [meta___firstPublishedAt], order: DESC }
      limit: 4
    ) {
      edges {
        node {
          meta {
            firstPublishedAt(formatString: "YYYY-MM-DD")
          }
          slug
          hero {
            fluid(maxWidth: 400, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid_noBase64
            }
            alt
            title
          }
          heading
          content {
            ... on DatoCmsText {
              text
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
