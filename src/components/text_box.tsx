import React from 'react';
import styled from 'styled-components';

interface TextBoxProps {
  children: React.ReactNode;
  backgroundColor?: string;
  flexDirection?: 'row' | 'column'; // New prop for flex direction
}

const StyledDiv = styled.div<{ backgroundColor?: string; flexDirection?: 'row' | 'column' }>`
  color: rgb(108 40 134 / var(--tw-text-opacity));
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  background-color: ${(props) => props.backgroundColor || 'rgb(244 114 182)'};
  border-radius: 0.75rem;
  width: 66.666667%;
  // justify-content: space-around;

  display: flex;
  flex-direction: ${(props) => props.flexDirection || 'column'}; // Use the prop here

  @media (max-width: 600px) {
    flex-wrap: wrap;
    align-content: center;
    width: 100%;
  }
`;

const TextBox: React.FC<TextBoxProps> = ({ children, backgroundColor, flexDirection }) => {
  return <StyledDiv backgroundColor={backgroundColor} flexDirection={flexDirection}>{children}</StyledDiv>;
};

export default TextBox;