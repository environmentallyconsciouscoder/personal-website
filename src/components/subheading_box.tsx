import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: pink;
  border-radius: 0.75rem;
`;

const SubheadingBox: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <StyledDiv>
      {children}
    </StyledDiv>
  );
};

export default SubheadingBox;