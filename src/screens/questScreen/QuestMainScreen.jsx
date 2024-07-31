import styled from 'styled-components'
import React, {useState, useEffect} from 'react'
import MoneyHolder from '../../component/MoneyHolder'
import QuestFrame from '../../component/QuestFrame'
import QuestProgressBubble from '../../component/QuestProgressBubble.jsx'

import QuestGuidePopup from '../../component/QuestGuidePopup'

function countCompletedQuest(QuestList) {
    var count = 0;
    for (var i = 0; i < QuestList.length; i++) {
        if (QuestList[i].state === "완료") {
            count++;
        }
    }
    return count;
}

function countTotalQuest(QuestList) {
    return QuestList.length;
}

const QuestContext = React.createContext('nope');

const QuestMainScreen = () => {
    const [QuestList, setQuestList] = useState([
        {
            type: "bicycle",
            content: "자전거 타기",
            state: "완료",
            reward_type: "coin",
            reward: 5
        },
        {
            type: "temperature",
            content: "실내 적정 온도 인증하기",
            state: "진행중",
            reward_type: "leaf",
            reward: 5
        },
        {
            type: "bus",
            content: "대중교통 이용하기",
            state: "미완료",
            reward_type: "leaf",
            reward: 5
        },
        {
            type: "bicycle",
            content: "자전거 타기",
            state: "완료",
            reward_type: "coin",
            reward: 5
        },
        {
            type: "temperature",
            content: "실내 적정 온도 인증하기",
            state: "진행중",
            reward_type: "leaf",
            reward: 5
        },
        {
            type: "bus",
            content: "대중교통 이용하기",
            state: "미완료",
            reward_type: "leaf",
            reward: 5
        },{
            type: "bicycle",
            content: "자전거 타기",
            state: "완료",
            reward_type: "coin",
            reward: 5
        },
        {
            type: "temperature",
            content: "실내 적정 온도 인증하기",
            state: "진행중",
            reward_type: "leaf",
            reward: 5
        },
        {
            type: "bus",
            content: "대중교통 이용하기",
            state: "미완료",
            reward_type: "leaf",
            reward: 5
        },
    ])

    const [typeOfGuideQuest, setTypeOfGuideQuest] = useState(null);

    return (
    <>
    <QuestContext.Provider value={{typeOfGuideQuest, setTypeOfGuideQuest}}>
        <BackGround>
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "end",
            alignItems: "center",
            width: "100%",
            padding: "0.75rem 1.25rem",
            gap: "0.63rem",
        }}>
            <MoneyHolder type="coin" value={1000} />
            <MoneyHolder type="leaf" value={1000} />
        </div>

        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.91rem",
            alignItems: "center",
            justifyContent: "start",
        }}>
            <div style={{
                width: '22.6875rem',
                height: '10.0625rem',
                display: "flex",
                flexDirection: "row",
                alignItems: "end",
                justifyContent: "start",
            }} className="TitleWithEwoo">
                <div style={{
                    width: '9.3125rem',
                    height: '9.25rem',
                }} className="TitleText">
                    <TitleTextStyle>
                        오늘의 {'\n'}
                        환경 미션
                    </TitleTextStyle>
                    <div style={{ height: "1.1rem" }}></div>
                    <TitleProgressStyle>
                        {countCompletedQuest(QuestList)}/{countTotalQuest(QuestList)}
                        <TitleProgressSubStyle> 완료</TitleProgressSubStyle>
                    </TitleProgressStyle>
                </div>
                <div style={{
                    width: '13.4375rem',
                    height: '8.625rem',
                }} className="CheerEwoo">
                    <img src="/CheerfulEwoo.png" alt="cheerEwoo" />
                </div>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
                alignItems: "center",
                width: '22.6875rem',
                height: '6.1875rem'
            }} className="progressBar">
                <QuestProgressBubble reward_type={"coin"} reward={5} progress={0} state="완료"/>
                <QuestProgressBubble reward_type={"coin"} reward={5} progress={1} />
                <QuestProgressBubble reward_type={"coin"} reward={5} progress={2} />
            </div>

        <div style={{
            position: "fixed",
            bottom: "2.19rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.62rem",
            width: "100%",
            height: "25.63rem",
            padding: "0.75rem 1.25rem",
            boxSizing: "border-box",
            overflow: "auto",
        }} className="QuestListBox">
            {QuestList.map((quest, index) => {
                return (
                    <QuestFrame
                        key={index}
                        questType={quest.type}
                        content={quest.content}
                        state={quest.state}
                        reward_type={quest.reward_type}
                        reward={quest.reward}
                    />
                )
            })
            }
        </div>
    </div>
        </BackGround>
        {
            typeOfGuideQuest === null ? null : <QuestGuidePopup />
        }
        
        </QuestContext.Provider>
    </>
    )
}

export default QuestMainScreen;
export {QuestContext};

const BackGround = styled.div`
position: fixed;

display: flex;
flex-direction: column;
justify-content: start;
align-items: center;

padding-left: 1.5rem;
padding-right: 1.5rem;

box-sizing: border-box;

background: linear-gradient(185deg, #81D40E -0.62%, #8DD40E 5.08%, #C2E032 40.39%, #EFFEC9 98.39%);
height: 100vh;
`;

const TitleTextStyle = styled.text`
color: var(--white, #FFF);
font-family: AppleSDGothicNeoR;
font-size: 1.875rem;
font-style: normal;
font-weight: 400;
line-height: 2.3125rem; /* 123.333% */
letter-spacing: -0.0375rem;

white-space: pre-wrap;
`;

const TitleProgressStyle = styled.text`
color: var(--white, #FFF);
font-family: AppleSDGothicNeoSB;
font-size: 4.375rem;
font-style: normal;
font-weight: 400;
line-height: 2.875rem; /* 65.714% */
letter-spacing: -0.0875rem;
`;

const TitleProgressSubStyle = styled.span`
color: var(--white, #FFF);
font-family: AppleSDGothicNeoM;
font-size: 1.25rem;
font-style: normal;
font-weight: 400;
line-height: 2.25rem; /* 180% */
letter-spacing: -0.025rem;
`;