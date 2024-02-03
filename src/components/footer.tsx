import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const StyledDiv = styled.a`
  margin: 1rem
`;

const Footer: React.FC = () => {
  return (
    <div>
        <StyledDiv href="https://github.com/environmentallyconsciouscoder" target="_blank">
            <FaGithub size={50} color="black" />
        </StyledDiv>
        <StyledDiv href="https://www.linkedin.com/in/jcct100/" target="_blank">
            <FaLinkedin size={50} color="black" />
        </StyledDiv>
        <StyledDiv href = "mailto: environmentallyconsciouscoder@gmail.com">
            <CiMail size={50} color="black" />
        </StyledDiv>
    </div>
  );
};

export default Footer;
