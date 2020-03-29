import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import ScrollBtn from 'components/ScrollBtn';

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledHero = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: ${({ height }) => height || '100vh'};

  img {
    object-fit: ${({ fit }) => fit || 'cover'} !important;
    object-position: ${({ position }) =>
      position || 'center center'} !important;
  }
`;

const StyledContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: ${({ theme }) => theme.light};
  clip-path: polygon(0 15%, 100% 0, 100% 85%, 0% 100%);
  padding: 50px;
`;

const StyledHeading = styled.h1`
  font-size: ${({ theme }) => theme.font.size.heading.normal};
`;

const StyledParagraph = styled.p`
  font-size: ${({ theme }) => theme.font.size.content.medium};
`;

const HeroTemplate = ({ data }) => (
  <StyledWrapper>
    <StyledHero
      position="20% 90%"
      fluid={data.file.childImageSharp.fluid}
      alt="disk hero image"
    />
    <StyledContent>
      <StyledHeading>ODZYSKIWANIE DANYCH</StyledHeading>
      <StyledParagraph>
        Masz problem z danymi? Chcesz szybko i za darmo dowiedzieć się jakie
        będą koszty odzyskiwania danych? Zapraszamy do naszego laboratorium w
        Warszawie – Szybkie odzyskiwanie danych z dysku, dysku SSD, pendrive,
        karty pamięci, macierzy RAID.
      </StyledParagraph>
    </StyledContent>
    <ScrollBtn />
  </StyledWrapper>
);

HeroTemplate.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default HeroTemplate;
