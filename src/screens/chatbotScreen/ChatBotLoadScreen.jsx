import { useState } from 'react';
import styled from 'styled-components';
import {ChatInputField, QuestionButton, ChatBotHeader, CustomSpacer, ChatCloudContainer, EwooChatStyle, MainEwoo} from './util.jsx';

const ChatBotLoadScreen = () => {
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
                <CustomSpacer height="3rem" />
                <MainEwoo image='/loadEwoo.png'/>
                </div>
                <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'start',
                        justifyContent: 'center',
                        gap: '0.3rem'
                    }}>
                        <AskingHelpTextStyle>
                            <QuestionTypeTextStyle>
                                분리수거 방법
                            </QuestionTypeTextStyle>
                            에 대해 물어보는 중...
                        </AskingHelpTextStyle>
                        <ChatInputField isActive={true} />
                    </div>
            </div>
            </body>
        </div>
    )
}

const AskingHelpTextStyle = styled.text`
color: #959595;
font-family: AppleSDGothicNeoM;
font-size: 0.855rem;
font-style: normal;
font-weight: 400;
line-height: normal;

margin-left: 1.06rem;
`;

const QuestionTypeTextStyle = styled.span`
color: #6CAA06;
`;
export default ChatBotLoadScreen;