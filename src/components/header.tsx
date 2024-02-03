import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  font-size: 3.75rem;
  line-height: 1;
  font-family: Sora, Saira, serif;
`;

const SubheadingStyledDiv = styled.div`
  font-size: 1.875rem;
  line-height: 2.25rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  margin: 1rem;
`;

type HeaderProps = {
  title: string;
  type?: 'header' | 'subheader' | 'thirdheader';
};

const Header: React.FC<HeaderProps> = ({ title, type = 'header' }) => {
  return (
    <>
      {type === 'header' && <StyledDiv>{title}</StyledDiv>}
      {type === 'subheader' && <SubheadingStyledDiv>{title}</SubheadingStyledDiv>}
      {type === 'thirdheader' && <div>{title}</div>}
    </>
  );
};

export default Header;
