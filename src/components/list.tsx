import React from 'react'
import styled from 'styled-components';

const StyledDiv = styled.div`
    background-color: #F3F3A9;
    width: 66.666667%;
    border-radius: 0.75rem;
    --tw-bg-opacity: .5;
    color: rgb(39 39 42 / var(--tw-text-opacity));
`;

const TextDiv = styled.div`
    font-size: 1.125rem;
    line-height: 1;
    --tw-text-opacity: 1;
    color: rgb(39 39 42 / var(--tw-text-opacity));
    margin: 1rem;
`;

type Text = {
    text: string
}

type ListProps = {
    text: Text[]
}

const List: React.FC<ListProps> = ({text}) => {
  return (
    <StyledDiv>
        {text.map((data, index) => (
            <TextDiv key={index}>{data.text}</TextDiv>
        ))}
    </StyledDiv>
  )
}

export default List