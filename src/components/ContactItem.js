import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledItem = styled.section`
  display: flex;
  align-items: center;
  width: 330px;
  margin: 0 auto;
  justify-content: left;
`;

const StyledHeading = styled.h3`
  font-size: ${({ theme }) => theme.font.size.content.medium};
`;

const StyledParagraph = styled.p`
  font-size: ${({ theme }) => theme.font.size.content.medium};
`;

const StyledContact = styled.div`
  margin-left: 20px;
`;

const ContactItem = ({ icon, heading, content }) => {
  const theme = useContext(ThemeContext);

  return (
    <StyledItem>
      <FontAwesomeIcon icon={icon} color={theme.primary} size="3x" />
      <StyledContact>
        <StyledHeading>{heading}</StyledHeading>
        <StyledParagraph dangerouslySetInnerHTML={{ __html: content }} />
      </StyledContact>
    </StyledItem>
  );
};

ContactItem.propTypes = {
  icon: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.array])
  ).isRequired,
  heading: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default ContactItem;
