import { IconButton,Button } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import ChatTail from '../../assets/icons/ChatTail.svg';
import UnionIcon from '../../assets/icons/UnionMark.svg';

import ChevronRight from '../../assets/images/ChevronRight.svg?react'

import TrashMap from './TrashMap';


const TrashcanBody = () => {
    const answerText = "근처에 있는 쓰레기통 위치에요. \n";
    const answerText2 = " 떨어져 있네요!";
    return (
        <body>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
            }}>
                <MapAnswerBox className="MapAnswerBox">
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        gap: '0.46rem'
                    }}>
                        <ChevronRight />
                        <MapAnswerTitle> 가까운 쓰레기통 위치 </MapAnswerTitle>
                    </div>
                    <CustomSpacer height="1rem"/>
                    <MapBox>
                        <TrashMap/>
                    </MapBox>
                    <CustomSpacer height="0.75rem"/>
                    <div>
                        <AnswerTextStyle>
                                {answerText}
                                <AnswerDistanceStyle>175m</AnswerDistanceStyle>
                                {answerText2}
                            </AnswerTextStyle>
                        <CustomSpacer height="1.31rem"/>
                        <NavigateToNaverMap>
                            <NavigateText>네이버 지도로 안내 </NavigateText>
                        </NavigateToNaverMap>
                    </div>
                    <Tail className="Tail"><img src = {ChatTail}/></Tail>
                </MapAnswerBox>
                <EwooContainer>
                    <CustomSpacer height="1.69rem"/>
                    <EwooImage src="/ewoo.png"/>
                </EwooContainer>
            </div>
        </body>
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
font-family: "AppleSDGothicNeoB";
font-size: 1.25rem;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.025rem;
text-align: left;
`;

const AnswerTextStyle = styled.text`
color: #777;
font-family: "AppleSDGothicNeoM";
font-size: 0.9375rem;
font-style: normal;
font-weight: 400;
line-height: 1.5625rem; /* 166.667% */
letter-spacing: -0.01875rem;
white-space: pre-wrap;
text-align: left;
`;

const AnswerDistanceStyle = styled.span`
color: #00BE35;
`;

const MapAnswerBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 22.5rem;
    height: 30.3125rem;
    padding: 2rem;
    flex-shrink: 0;
    border-radius: 1.5625rem;
    box-sizing: border-box;
    background: #FFF;
    filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.3));
`;

const MapBox = styled.div`
align-items: center;
width: 18.4375rem;
height: 15.75rem;
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
background: #FFF;
`;

const NavigateText = styled.text`
color: #777;
font-family: "AppleSDGothicNeoSB";
font-size: 0.9375rem;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.01875rem;
-webkit-text-size-adjust: auto;
`;

export {TrashcanBody, EwooImage};

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
