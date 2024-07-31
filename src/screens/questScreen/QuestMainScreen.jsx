import styled from 'styled-components'
import {useState, useEffect} from 'react'
import MoneyHolder from '../../component/MoneyHolder'
import QuestFrame from '../../component/QuestFrame'

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
        }
    ])
    return (
        <BackGround>
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "end",
            alignItems: "center",
            width: "100%",
            padding: "0.75rem 1.25rem",
            gap: "0.63rem"
        }}>
            <MoneyHolder type="coin" value={1000} />
            <MoneyHolder type="leaf" value={1000} />
        </div>
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.62rem",
            width: "100%",
            boxSizing: "border-box",
        }}>
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
            })}
        </div>
        </BackGround>
    )
}

export default QuestMainScreen;

const BackGround = styled.div`
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