import styled from "styled-components";
import React, { useState, useEffect, useContext } from "react";
import QuestCompleted from '../assets/icons/completed_check.svg?react';
import Coin from '../assets/icons/coin.svg?react';
import Leaf from '../assets/icons/leaf.svg?react';

import parsingMoneyValue from '../utils/ParseMoney';

import BicycleIcon from '../assets/icons/questIcon/bicycle.svg?react'
import BusIcon from '../assets/icons/questIcon/bus.svg?react'
import TemperatureIcon from '../assets/icons/questIcon/temperature.svg?react'
import TumblerIcon from '../assets/icons/questIcon/tumbler.svg?react'
import WithEwooIcon from '../assets/icons/questIcon/withEwoo.svg?react'

import QuestGuidePopup from "./QuestGuidePopup";
import {QuestContext} from "../screens/questScreen/QuestMainScreen"

const QuestFrame = ({ questType, content, state, reward_type, reward}) => {
    var iscomplete = (state === "success") ? true : false;
    var iscoin = (reward_type === "coin") ? true : false;

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const {typeOfGuideQuest, setTypeOfGuideQuest} = useContext(QuestContext);
    return (
        <FrameStyle onClick={
            () => {
                setModalIsOpen(true);
                setTypeOfGuideQuest({
                    questType: questType,
                    status: iscomplete ? 'pending' : null
                });
            }
        }>
            <div style={{ // icon and text
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "start",
                gap: "0.625rem"
            }}>
            <IconStyle> <QuestIcon type={questType} /></IconStyle>
            <TextBox>
                <TextStyle>{content}</TextStyle>
            </TextBox>
            </div>
            {
                iscomplete ?
                <StateOrReward complete={iscomplete.toString()}>
                    <QuestCompleted  />
                </StateOrReward> :
                 <RewardBox iscoin={iscoin} reward={reward}/>
            }
        </FrameStyle>
    )
}

const RewardBox = ({ iscoin, reward }) => {
    return (
        <StateOrReward>
            {iscoin ? <Coin /> : <Leaf />}
            <div style={{ width: "0.19rem" }}></div>
            <RewardTextStyle>{parsingMoneyValue(reward)}</RewardTextStyle>
        </StateOrReward>
    );
}

const QuestIcon =({type}) => {
    switch(type) {
        case "bicycle":
            return <BicycleIcon/>;
        case "bus":
            return <BusIcon/>;
        case "temperature":
            return <TemperatureIcon/>;
        case "tumbler":
            return <TumblerIcon/>;
        case "recycle":
            return <WithEwooIcon/>;
        case "greenIdea":
            return <WithEwooIcon/>;
        case "trashcan":
            return <WithEwooIcon/>;
    }
}

export default QuestFrame;

const FrameStyle = styled.button`
display: flex;
flex-direction: row;
padding: 0.875rem 0.75rem;
align-items: center;
justify-content: space-between;
gap: 0.625rem;

box-sizing: border-box;
border-radius: 1.25rem;
background: linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.58) 70.5%, rgba(255, 255, 255, 0.40) 100%);
`;

const IconStyle = styled.div`
display: flex;
width: 1.9375rem;
height: 1.9375rem;
padding: 0.19256rem 0.21875rem 0.18244rem 0.15625rem;
justify-content: center;
align-items: center;
`;

const TextBox = styled.div`
width: 12.625rem;

display: flex;
flex-direction: column;
align-items: start;
`;

const TextStyle = styled.text`
color: var(--black, #101210);

/* 15 */
font-family: AppleSDGothicNeoM;
font-size: 1.06875rem;
font-style: normal;
font-weight: 400;
line-height: 1.6875rem; /* 157.895% */
letter-spacing: -0.02138rem;

text-align: left;
`;

const  StateOrReward = styled.div`
width: 3.5rem;
height: 1.97581rem;
flex-shrink: 0;

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

border-radius: 1.25rem;

opacity : 1;
filter: drop-shadow(0px 1px 40px rgba(144, 164, 140, 0.10)) drop-shadow(0px 0px 5px rgba(199, 199, 199, 0.50));
background: ${props => props.complete ? "var(--green, #8CC42F)" : "var(--white, #FFFFFF)"};
`;

const RewardTextStyle = styled.text`
color: var(--black, #101210);
font-family: AppleSDGothicNeoEB;
font-size: 0.9375rem;
font-style: normal;
font-weight: 400;
line-height: 140.041%; /* 1.31288rem */
`;