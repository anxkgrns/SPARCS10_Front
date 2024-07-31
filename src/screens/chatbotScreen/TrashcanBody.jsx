import { IconButton,Button } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import React from 'react';
import styled from 'styled-components';
import ChatTail from '../../assets/icons/ChatTail.svg';
import UnionIcon from '../../assets/icons/UnionMark.svg';
import { MyContext, GeoContext } from './ChatBotBaseScreen';

import ChevronRight from '../../assets/icons/ChevronRightIcon.svg?react'
import EwooProfile from '../../assets/images/EwooProfile.svg';

import TrashMap from './TrashMap';
import { ChatInputField } from './util';
import { useNavermaps } from 'react-naver-maps';
import { getNearestTrashCan } from '../../requests/RequestManage';

const TrashcanBody = () => {
    const answerText = "근처에 있는 쓰레기통 위치에요. \n";
    const answerText2 = " 떨어져 있네요!";

    const {page, setPage} = useContext(MyContext);

    const navermap = useNavermaps();

    const {currentLatLng, setCurrentLatLng} = useContext(GeoContext);
    const {maxLatLng, setMaxLatLng} = useContext(GeoContext);
    const {minLatLng, setMinLatLng} = useContext(GeoContext);
    const {trashcanLatLng, setTrashcanLatLng} = useContext(GeoContext);
    const [distance, setDistance] = useState(null);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTrashCan = async () => {
             setLoading(true);
            try{
                const responseData = await getNearestTrashCan(currentLatLng.lat(), currentLatLng.lng());
                if (responseData ===null || responseData.length === 0) {
                    setDistance(null);
                } else{
                    console.log(responseData[0]);
                    setTrashcanLatLng(new navermap.LatLng(responseData[0].latitude, responseData[0].longitude));
                    setDistance(responseData[0].distance);
                }
            } catch (error) {
                setError(error);
                console.error('Failed to fetch trashcan:', error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchTrashCan();
    }, [distance]);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '77vh',
            marginTop: '1.87rem'
        }}>
            <MapAnswerBox className="MapAnswerBox">
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    gap: '0.46rem'
                }}>
                    <button onClick={() => setPage("main")} style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: 0
                    }}>
                        <ChevronRight/>
                    </button>
                    <MapAnswerTitle> 가까운 쓰레기통 위치 </MapAnswerTitle>
                </div>
                <CustomSpacer height="0.8rem"/>
                <MapBox>
                    <TrashMap/>
                </MapBox>
                <CustomSpacer height="0.57rem"/>
                { loading ? <AnswerTextStyle>잠시만 기다려주세요...약 1분 정도 소요됩니다.</AnswerTextStyle> :
                        error ? <AnswerTextStyle>{error.message}</AnswerTextStyle> :
                            distance === null ? <AnswerTextStyle>근처에 쓰레기통이 없습니다.</AnswerTextStyle> :
                                <>
                                    <AnswerTextStyle>
                                        {answerText}
                                        <AnswerDistanceStyle>{distance}m</AnswerDistanceStyle>
                                        {answerText2}
                                    </AnswerTextStyle>
                                    <CustomSpacer height="0.56rem"/>
                                    <NavigateToNaverMap>
                                        <NavigateText>네이버 지도로 안내 </NavigateText>
                                    </NavigateToNaverMap>
                                </>
                }
                <Tail className="Tail"><img src = {ChatTail}/></Tail>
            </MapAnswerBox>
            <CustomSpacer height="0.69rem"/>
            <EwooContainer>
                <EwooImage src={EwooProfile} style={{
                    width: '3.5625rem',
                    height: '3.5625rem',
                }}/>
            </EwooContainer>
            <CustomSpacer height="0.3rem"/>
            <ChatInputField isActive={false} />
            <CustomSpacer height="0.05rem" />
        </div>
    )
}

const Tail = styled.div`
position: absolute;
bottom: -1.5rem;
left : 1.41rem;
width: 1.3125rem;
height: 1.625rem;
flex-shrink: 0;

align-self: end;
`;
const EwooContainer = styled.div`
align-items: right;
width: 22.38rem;
height: 5.48625rem;

display: flex;
flex-direction: column;

flex-shrink: 0;
`;

const EwooImage = styled.img`
width: 8.6925rem;
height: 5.48625rem;
flex-shrink: 0;

align-self: start;
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
color: #6CAA06;
`;

const MapAnswerBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 22.5rem;
    padding: 1.07rem  1.94rem;
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
box-sizing: border-box;
overflow: hidden;
background: #D9D9D9;
`;

const NavigateToNaverMap = styled.button`
width: 9.375rem;
height: 2.625rem;
flex-shrink: 0;

//padding: 0.56rem 1.25rem;

border-radius: 1.5625rem;
border: 1px solid #6CAA06;
background: #FFF;
`;

const NavigateText = styled.text`
color: #6CAA06;
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
