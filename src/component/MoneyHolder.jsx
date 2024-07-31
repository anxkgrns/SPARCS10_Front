import styled from "styled-components";
import { useState, useEffect } from "react";
import coin from '../assets/icons/coin.svg';
import leaf from '../assets/icons/leaf.svg';

import parsingMoneyValue from '../utils/ParseMoney';
import MoneyValueTextStyle from './MoneyValueTextStyle';

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
justify-content: center;
width: 7.0625rem;
height: 2.0625rem;
padding: 0.375rem 0.75rem;
gap: 1.8125rem;
flex-shrink: 0;
box-sizing: border-box;

border-radius: 6.25rem;
background: rgba(255, 255, 255, 0.70);
`;

export default MoneyHolder;