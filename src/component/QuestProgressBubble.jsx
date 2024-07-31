import styled from 'styled-components';
import ProgressBubble from './Bubble.svg?react';
import FinalProgressBubble from './FinalBubble.svg?react';
import MoneyValueTextStyle from './MoneyValueTextStyle';
import coin from '../assets/icons/coin.svg';
import leaf from '../assets/icons/leaf.svg';
import parsingMoneyValue from '../utils/ParseMoney';
import QuestCompleted from '../assets/icons/completed_check.svg?react';

const QuestProgressBubble = ({ reward_type, reward, progress, state }) => {
    console.log("my progress is " + progress);
    console.log(state);
    var imgSrc = (reward_type === "coin") ? coin : leaf;

    if (state) {
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
                    <BubbleContent className="BubbleContent">
                    <QuestCompleted/>
                    </BubbleContent>
                </div>
            </div>
             {
                state ?
                <CompletedTextStyle>
                    달성!
                </CompletedTextStyle>
                : null
            }
            </div>
        )
    } else {
        
    if(progress===0 || progress === 1){ // 첫번째
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
                <BubbleContent>
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
        </div>
        )
    } else { // 세번째
        return (
            <div style={{
                position: "relative",
            }} className="Bubble">
             <FinalProgressBubble style={{
                    position: "absolute",
                    bottom: 0,
                    zIndex : -1,
                    opacity: 0.5,
                    filter: "drop-shadow(0px 1px 40px rgba(144, 164, 140, 0.10)) drop-shadow(0px 0px 5px rgba(199, 199, 199, 0.50))",
                }}/>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    boxSizing: "border-box",
                }}>
                <FinalBubbleContent className="FinalBubbleContent">
                    <FinalBubbleSingleRow>
                        <img src={imgSrc} alt="money" style={{
                            verticalAlign: "middle",
                        }} />
                        <div style={{ width: "0.22rem" }}></div>
                        <MoneyValueTextStyle margintop='0.33rem'>
                            {parsingMoneyValue(reward)}
                        </MoneyValueTextStyle>
                    </FinalBubbleSingleRow>
                    <FinalBubbleSingleRow>
                        <img src={leaf} alt="money" style={{
                            verticalAlign: "middle",
                            width: '1.0625rem',
                            height: '1rem',
                            flexShrink: 0,
                        }} />
                        <div style={{ width: "0.22rem" }}></div>
                        <MoneyValueTextStyle margintop='0.33rem'>
                            {parsingMoneyValue(reward)}
                        </MoneyValueTextStyle>
                    </FinalBubbleSingleRow>
            </FinalBubbleContent>
                </div>
            </div>
        )
    }
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

const FinalBubbleContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 0;

width: 3.5rem;
height: 3.901rem;
padding: 1rem 0.81rem 0.32rem 0.63rem;
flex-shrink: 0;
box-sizing: border-box;

border-radius: 6.25rem;
`;

const FinalBubbleSingleRow = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 0;
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