import React from 'react'
import styled from 'styled-components';
import ImageComponent from './image';

const StyledCardWrapper = styled.div`
    padding: 1.5rem;
    --tw-bg-opacity: 1;
    background-color: rgb(108 40 134 / var(--tw-bg-opacity));
    border-width: 1px;
    border-radius: 0.5rem;
    width: 100%;
    border-style: solid;
    border-color: #e5e7eb;
    box-sizing: border-box;
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));

    @media (max-width: 600px) {
      padding: 1.5rem;
      --tw-bg-opacity: 1;
      background-color: rgb(108 40 134 / var(--tw-bg-opacity));
      border-width: 1px;
      border-radius: 0.5rem;
      width: 20rem;
      border-style: solid;
      border-color: #e5e7eb;
      box-sizing: border-box;
      --tw-text-opacity: 1;
      color: rgb(255 255 255 / var(--tw-text-opacity));
    }
`;

const StyledCard = styled.div`
    align-items: center;
    flex-direction: column;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 5rem;
`;

const StyledDescription = styled.div`
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-family: Outfit,Didact Gothic,sans-serif;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    margin: 0;
`;

const StyledIconAndTitle = styled.div`
    align-items: center;
    flex-direction: row;
    display: flex;
`;

const StyledIcon = styled.div`
    font-size: 1.125rem;
    line-height: 1.75rem;
    display: block;
    vertical-align: middle;
`;

const StyledTitle = styled.div`
    --tw-space-x-reverse: 0;
    margin-right: calc(0.75rem * var(--tw-space-x-reverse));
    margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 2rem;
`;

type HeaderProps = {
    icon?: string;
    title?: string;
    description?: string;
    index: number;
    image?: string;
    divRef?: string;
    onClick?: (divRef: string) => void;
  };

const Menu: React.FC<HeaderProps> = ({icon, title, description, index, image, onClick, divRef=""}) => {

  return (
    <StyledCardWrapper key={index} onClick={() => onClick && onClick(divRef)}>
    <StyledCard>
      <StyledIconAndTitle>
        {icon && <StyledIcon>{icon}</StyledIcon>}
        {title && <StyledTitle>{title}</StyledTitle>}
      </StyledIconAndTitle>
      {description && <StyledDescription>{description}</StyledDescription>}
      {image &&
        <ImageComponent image={image}></ImageComponent>
      }
    </StyledCard>
  </StyledCardWrapper>
  )
}

export default Menu