import { IconButton,Button } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import ChatTail from '../../assets/images/chatTail.svg?react';
import UnionIcon from '../../assets/icons/UnionMark.svg';

// import { ReactComponent as ChevronRight } from '../../assets/ChevronRight.svg'

import TrashMap from './TrashMap';


export default function ChatBotMapAnswerScreen() {

    const answerText = "가장 가까운 쓰레기통 위치에요. \n";
    const answerText2 = " 떨어져 있네요!";
    return (
        <>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                boxSizing: 'border-box',
            }}>
                <MapAnswer className="MapAnswer">
                    {/* <ChevronRight style={{
                        width: '1.5rem',
                        height: '1.5rem',
                    }} /> */}
                    <MapAnswerTitle className="MapAnswerTitle">
                        가까운 쓰레기통 위치
                    </MapAnswerTitle>
                    <CustomSpacer height="1rem"/>
                    <MapBox>
                        <TrashMap/>
                    </MapBox>
                    <CustomSpacer height="0.75rem"/>
                    <AnswerTextStyle className="가장 가까운 쓰레기통 위치에요.">
                        {answerText}
                    </AnswerTextStyle>
                    <div style={{
                        textAlign: 'left',
                    }}>
                        <AnswerDistanceStyle>
                            175m 
                        </AnswerDistanceStyle>
                        <AnswerTextStyle className="떨어져 있네요!">
                            {answerText2}
                        </AnswerTextStyle>
                    </div>
                    <CustomSpacer height="1.31rem"/>
                    <NavigateToNaverMap>
                        <NavigateText>
                            네이버 지도로 안내
                        </NavigateText>
                    </NavigateToNaverMap>
                    <Tail className="Tail">
                        <img src = {ChatTail}/>
                    </Tail>
                </MapAnswer>
                <EwooContainer>
                
                <CustomSpacer height="1.69rem"/>
                    <EwooImage src="/ewoo.png"/>
                </EwooContainer>
            </div>
        </>
    )
}

const Tail = styled.div`
position: absolute;
bottom: -1.5rem;
right : 2.94rem;
width: 1.3125rem;
height: 1.625rem;
flex-shrink: 0;

align-self: end;
`;
const EwooContainer = styled.div`
align-items: right;
width: 19.4375rem;
height: 28.3125rem;

display: flex;
flex-direction: column;

flex-shrink: 0;
`;

const EwooImage = styled.img`
width: 13.9375rem;
height: 8.8125rem;
flex-shrink: 0;

align-self: end;
object-fit: contain;
`;

const CustomSpacer = styled.div`
height: ${props => props.height};
`;

const MapAnswerTitle = styled.div`
color: var(--Schemes-Scrim, #000);
font-family: "AppleSDGothicNeo";
font-size: 1.25rem;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.025rem;
text-align: left;
`;

const AnswerTextStyle = styled.text`
color: #777;
font-family: "AppleSDGothicNeo";
font-size: 0.9375rem;
font-style: normal;
font-weight: 400;
line-height: 1.5625rem; /* 166.667% */
letter-spacing: -0.01875rem;
white-space: pre-wrap;
text-align: left;
`;

const AnswerDistanceStyle = styled.text`
color: #00BE35;
font-family: "AppleSDGothicNeo";
font-size: 0.9375rem;
font-style: normal;
font-weight: 400;
line-height: 1.5625rem;
letter-spacing: -0.01875rem;
white-space: pre-wrap;
text-align: left;
`;

const MapAnswer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    width: 19.4375rem;
    height: 28.3125rem;
    padding: 1.25rem;
    flex-shrink: 0;
    border-radius: 1.5625rem;
    background: #FFF;
    filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.3));

`;

const MapBox = styled.div`
align-self: center;
width: 16.1875rem;
height: 14.1875rem;
flex-shrink: 0;
border-radius: 1.25rem;
overflow: hidden;
background: #D9D9D9;
`;

const NavigateToNaverMap = styled.button`
width: 9.375rem;
height: 2.625rem;
flex-shrink: 0;

//padding: 0.56rem 1.25rem;

border-radius: 1.5625rem;
border: 1px solid #777;
`;

const NavigateText = styled.text`
color: #777;
font-family: "AppleSDGothicNeo";
font-size: 0.9375rem;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.01875rem;
-webkit-text-size-adjust: auto;
`;

export {ChatBotMapAnswerScreen, EwooImage};

const UnionButton = styled.button`
display: inline-flex;
padding: 0.625rem;
align-items: center;
gap: 0.625rem;
border-radius: 6.25rem;
background: var(--white, #FFF);

/* blurbox */
box-shadow: 0px 0px 5px 0px rgba(199, 199, 199, 0.50), 0px 1px 40px 0px rgba(144, 164, 140, 0.10);
`;
