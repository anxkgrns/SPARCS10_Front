import styled from 'styled-components';
import React from 'react';

const MoneyValueTextStyle = styled.div`
margin-top: ${props => props.margintop ? props.margintop : "0.2rem"};

color: var(--black, #101210);
font-family: AppleSDGothicNeoEB;
font-size: 1rem;
font-style: normal;
font-weight: 400;

vertical-align: middle;
line-height: 140.041%; /* 1.31288rem */
`;

export default MoneyValueTextStyle;