import { useState } from 'react';
import styled from 'styled-components';
import {ChatInputField, QuestionButton, ChatBotHeader, CustomSpacer, ChatCloudContainer, EwooChatStyle, MainEwoo} from './util.jsx';

const ChatBotRecycleScreen = () => {
    const ewooChat = "어떤 쓰레기인지 말해주세요.\n분리수거 방법을 알려드릴게요!";

    return (
        <div>
            <ChatBotHeader />
            <body>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    height: '81vh',
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <CustomSpacer height="2.56rem" />
                        <QuestionButton width='7.88rem' text='분리수거 방법' activated={true} />
                        <CustomSpacer height="1.94rem" />
                        <MainEwoo/>
                        <ChatCloudContainer>
                            <EwooChatStyle style={{
                                marginBottom: '1.2rem',
                            }}>{ewooChat}</EwooChatStyle>
                        </ChatCloudContainer>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.3rem'
                    }}>
                        <HelpTextStyle>채팅 바를 눌러 쓰레기 종류 입력하기</HelpTextStyle>
                        <ChatInputField isActive={true} />
                    </div>
                </div>
            </body>
        </div>
    )
}

export default ChatBotRecycleScreen;

const HelpTextStyle = styled.text`
color: #959595;

font-family: AppleSDGothicNeoM;
font-size: 1.06875rem;
font-style: normal;
font-weight: 400;
line-height: 1.6875rem; /* 157.895% */
letter-spacing: -0.02138rem;
`;