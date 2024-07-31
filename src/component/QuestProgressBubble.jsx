import styled from 'styled-components';
import ProgressBubble from './Bubble.svg?react';
import MoneyValueTextStyle from './MoneyValueTextStyle';
import coin from '../assets/icons/coin.svg';
import leaf from '../assets/icons/leaf.svg';
import parsingMoneyValue from '../utils/ParseMoney';
import QuestCompleted from '../assets/icons/completed_check.svg?react';

const QuestProgressBubble = ({ reward_type, reward, progress, state }) => {
    var imgSrc = (reward_type === "coin") ? coin : leaf;
    var complete = state==="완료" ? true : false;

    if(progress===0){ // 첫번째
        return (
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.375rem",
            }}>
            <div style={{
                position: "relative",
            }} className="Bubble">
                <ProgressBubble style={{
                    position: "absolute",
                    bottom: 0,
                    zIndex : -1,
                }}/>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                {
                    complete ?
                    <BubbleContent className="BubbleContent">
                    <QuestCompleted/>
                    </BubbleContent>
                    : <BubbleContent>
                        <img src={imgSrc} alt="money" style={{
                            verticalAlign: "middle"
                        }} />
                        <div style={{ width: "0.22rem" }}></div>
                        <MoneyValueTextStyle margintop='0.33rem'>
                            {parsingMoneyValue(reward)}
                        </MoneyValueTextStyle>
                    </BubbleContent>
                }
                </div>
            </div>
             {
                complete ?
                <CompletedTextStyle>
                    달성!
                </CompletedTextStyle>
                : null
            }
            </div>
        )
    } else if (progress === 1){ // 두번째
        return (
            <div style={{
                position: "relative",
            }} className="Bubble">
                <ProgressBubble style={{
                    position: "absolute",
                    bottom: 0,
                    zIndex : -1,
                }}/>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                <BubbleContent className="BubbleContent">
                <img src={imgSrc} alt="money" style={{
                    verticalAlign: "middle"
                }} />
                <div style={{ width: "0.22rem" }}></div>
                <MoneyValueTextStyle margintop='0.33rem'>
                    {parsingMoneyValue(reward)}
                </MoneyValueTextStyle>
            </BubbleContent>
                </div>
            </div>
        )
    } else { // 세번째
        return (
            <div style={{
                position: "relative",
            }} className="Bubble">
                <ProgressBubble style={{
                    position: "absolute",
                    bottom: 0,
                    zIndex : -1,
                }}/>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                <BubbleContent className="BubbleContent">
                <img src={imgSrc} alt="money" style={{
                    verticalAlign: "middle"
                }} />
                <div style={{ width: "0.22rem" }}></div>
                <MoneyValueTextStyle margintop='0.33rem'>
                    {parsingMoneyValue(reward)}
                </MoneyValueTextStyle>
            </BubbleContent>
                </div>
            </div>
        )
    }
}

export default QuestProgressBubble;

const BubbleContent = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 0;

width: 3.5rem;
height: 2.5rem;
padding: 0.99rem 0.81rem 0.32rem 0.63rem;
flex-shrink: 0;
box-sizing: border-box;

border-radius: 6.25rem;
`;

const CompletedTextStyle = styled.text`
color: var(--white, #FFF);

/* 12B */
font-family: AppleSDGothicNeoB;
font-size: 0.855rem;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.01713rem;
`;