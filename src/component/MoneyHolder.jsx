import styled from "styled-components";
import { useState, useEffect } from "react";
import coin from '../assets/icons/coin.svg';
import leaf from '../assets/icons/leaf.svg';

import parsingMoneyValue from '../utils/ParseMoney';

const MoneyHolder = ({type, value}) => { // 재화의 종류와 값
    var imgSrc = (type === "coin") ? coin : leaf;

    return (
        <MoneyContainer>
            <img src={imgSrc} alt="money" />
            <MoneyValueTextStyle>
                {parsingMoneyValue(value)}
            </MoneyValueTextStyle>
        </MoneyContainer>
    )
}
const MoneyContainer = styled.div`
position: relative;

display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 7.0625rem;
height: 2.0625rem;
padding: 0.375rem 0.75rem;
gap: 1.8125rem;
flex-shrink: 0;
box-sizing: border-box;

border-radius: 6.25rem;
background: rgba(255, 255, 255, 0.70);
`;

const MoneyValueTextStyle = styled.text`
position: absolute;
right: 0.7rem;
bottom: 0.2rem;
color: var(--black, #101210);
text-align: right;
font-family: AppleSDGothicNeoEB;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: 140.041%; /* 1.40044rem */
`;

export default MoneyHolder;