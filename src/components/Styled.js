import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    position: absolute;
    bottom: 1px;
    ${props => props.red && `
        background-color: red;
    `}
`;

const Button2 = styled.button([`
    position: absolute;
    bottom: 20px;
    ${props => props.red && `
        background-color: red;
    `}
`]);

const Styled = props => (
    <>
        <Button red>I am styled!</Button>
        <Button2 red>I am styled too!</Button2>
    </>
);

export default Styled;
