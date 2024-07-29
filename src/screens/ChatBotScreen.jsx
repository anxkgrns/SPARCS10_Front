import { IconButton,Button } from '@mui/material';
import React from 'react';
import RoomIcon from '@mui/icons-material/Room';
import styled from 'styled-components';
// import { ReactComponent as ChevronRight } from '../../assets/ChevronRight.svg'


export default function ChatBotScreen() {

    const answerText = "가장 가까운 쓰레기통 위치에요. \n";
    const answerText2 = " 떨어져 있네요!";
    return (
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                boxSizing: 'border-box',
            }}>
                {/* <h1>AI 챗봇과의 대화</h1> */}
                <MapAnswer className="MapAnswer">
                    {/* <ChevronRight style={{
                        width: '1.5rem',
                        height: '1.5rem',
                    }} /> */}
                    <MapAnswerTitle className="MapAnswerTitle">
                        가까운 쓰레기통 위치
                    </MapAnswerTitle>
                    <CustomSpacer height="1rem"/>
                    <MapBox/>
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
                </MapAnswer>
            </div>
    )
}

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
    filter: drop-shadow(var(--sds-size-depth-0) var(--sds-size-depth-025) var(--sds-size-depth-100) var(--sds-color-black-100));
`;

const MapBox = styled.div`
width: 16.1875rem;
height: 14.1875rem;
flex-shrink: 0;
border-radius: 1.25rem;
background: #D9D9D9;
`;

const NavigateToNaverMap = styled.button`
width: 9.375rem;
height: 2.625rem;
flex-shrink: 0;

padding: 0.56rem 1.25rem;

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