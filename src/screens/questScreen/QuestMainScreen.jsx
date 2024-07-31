import styled from 'styled-components'
import React, {useState, useEffect, useRef} from 'react'
import ProgressBar from 'react-step-progress-bar'
import MoneyHolder from '../../component/MoneyHolder'
import QuestFrame from '../../component/QuestFrame'
import QuestProgressBubble from '../../component/QuestProgressBubble.jsx'

import QuestGuidePopup from '../../component/QuestGuidePopup'
import BackButton from '../../assets/icons/ChevronRightIcon.svg'
import CustomStepProgressBar from '../../component/CustomStepProgressBar'

import { NaviContext } from '../../navigation/NaviBar.jsx';

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
            state: "미완료",
            reward_type: "coin",
            reward: 5
        },
        {
            type: "temperature",
            content: "실내 적정 온도 인증하기",
            state: "미완료",
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
            state: "완료",
            reward_type: "leaf",
            reward: 5
        },
    ])

    const [typeOfGuideQuest, setTypeOfGuideQuest] = useState(null);
    const {insidePage,setInsidePage} = React.useContext(NaviContext);

    const [progress, setProgress] = useState(0);
    const [count, setCount] = useState(0);
    const mounted = useRef(false);

    useEffect(() => {
        if(!mounted.current){
            mounted.current = true;
          } else {
            setCount(countCompletedQuest(QuestList));
            if (count < 3) {
                setProgress(count*33.33+1);
            } else {
                setProgress(100);
            }
          }

          console.log(count);
    }
    , [count, QuestList]);
    return (
    <>
    <QuestContext.Provider value={{typeOfGuideQuest, setTypeOfGuideQuest}}>
        <BackGround>
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1.875rem 1.25rem 0.5rem 1.25rem",
            width: "100%",
        }}>
            <div onClick={() => 
                setInsidePage('main')
            }>
                <img src={BackButton} alt="backButton" style={{fill: '#ffffff'}}/>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                gap: "0.63rem",
                alignItems: "center",
                justifyContent: "center",
            }}>
            <MoneyHolder type="coin" value={1000} />
            <MoneyHolder type="leaf" value={1000} />
            </div>
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
                        {countCompletedQuest(QuestList)}/3
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
                flexDirection: "column",
                gap: "0.25rem",
                alignItems: "center",
                justifyContent: "start",
                boxSizing: "border-box",
            }}>
                <div style={{
                        width: '19.12rem', // 22.6875 - (0.625*2) - 1.8 - 0.53, 0.625는 step 반지름 길이. 1.8은 말풍선 오른쪽 끝부터 말풍선 꼬리 위치까지 거리. ... 이하 눈떼중.
                        height: '1.3rem',
                        alignItems: "center",
                        justifyContent: "center",
                    }} className="customprogressbar">
                        <CustomStepProgressBar percent={progress} />
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "end",
                    alignItems: "start",
                    width: '22.6875rem', 
                    gap: "2.9rem",
                }} className="progress bubble">
                    <QuestProgressBubble reward_type={"coin"} reward={5} progress={0} state={count>=1}/>
                    <QuestProgressBubble reward_type={"coin"} reward={5} progress={1} state={count>=2}/>
                    <QuestProgressBubble reward_type={"coin"} reward={5} progress={2} state={count >=3}/>
                </div>
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