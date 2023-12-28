import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
  /* Add any additional styling for the image if needed */
  max-width: 100%;
  max-height: 10rem;
  object-fit: cover; /* or adjust based on your styling preferences */
`;

type ImageProp = {
  image: string; // Use lowercase "string" for the type
};

const ImageComponent: React.FC<ImageProp> = ({ image }) => {
  return (
    <>
      <StyledImage src={image} alt="Card Image" />
    </>
  );
};

export default ImageComponent;
