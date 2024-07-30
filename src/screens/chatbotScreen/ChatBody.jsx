import { useContext, useState } from 'react';
import styled from 'styled-components';
import {ChatInputField, QuestionButton, ChatBotHeader, CustomSpacer, QuestionButtonFlexer, ChatCloudContainer, EwooChatStyle, MainEwoo, MyChatCloud, YourChatCloud, QuestionButtonContainer} from './util.jsx';
import { MyContext } from './ChatBotBaseScreen.jsx';
import EwooProfile from '../../assets/images/EwooProfile.svg?react';

const ChatBody = () => {
    const answerText = 'AI 환경 지킴이 이우가 오늘의 환경 상식을 소개해드릴게요!  일회용 비닐봉지 대신 장바구니를 사용한다면 매년 약 63억 개의 비닐봉지를 아낄 수 있고, 원유 약 1,500만 톤을 절약하며 온실가스 약 6,700만 톤을 감축시킬 수 있다고 해요. 조금 불편하더라도 가방 속에 장바구니를 넣고 다니는 습관을 가져보는 건 어떨까요?AI 환경 지킴이 이우가 오늘의 환경 상식을 소개해드릴게요!  일회용 비닐봉지 대신 장바구니를 사용한다면 매년 약 63억 개의 비닐봉지를 아낄 수 있고, 원유 약 1,500만 톤을 절약하며 온실가스 약 6,700만 톤을 감축시킬 수 있다고 해요. 조금 불편하더라도 가방 속에 장바구니를 넣고 다니는 습관을 가져보는 건 어떨까요?';
    const {page, setPage} = useContext(MyContext);
    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                width: '100%',
                paddingTop: '1.4rem',
                paddingLeft: '1.63rem',
                paddingRight: '1.63rem',
                gap: '1rem',
                boxSizing: 'border-box',
                height: '58vh',
                overflowY: 'scroll',
                scrollbarColor: 'transparent transparent',
            }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'end',
                        width: '100%',
                    }}>
                        <MyChatCloud text='환경 상식 알려줘' />
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'start',
                        alignItems: 'start',
                        width: '100%',
                        gap: '0.81rem',
                        padding: '0.4rem',
                    }}>
                        <EwooProfile />
                        <YourChatCloud text={answerText} />
                        <CustomSpacer height="1rem" />
                    </div>
            </div>
            
            <QuestionButtonFlexer>
                    <QuestionButtonContainer/>
                    <ChatInputField isActive={false} />
                    <CustomSpacer height="0.66rem" />
                </QuestionButtonFlexer>
        </>
    )
}

export default ChatBody;