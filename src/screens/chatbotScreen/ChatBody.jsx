import { useContext, useState } from 'react';
import styled from 'styled-components';
import {ChatInputField, QuestionButton, ChatBotHeader, CustomSpacer, QuestionButtonFlexer, ChatCloudContainer, EwooChatStyle, MainEwoo, MyChatCloud, YourChatCloud, QuestionButtonContainer} from './util.jsx';
import { MyContext } from './ChatBotBaseScreen.jsx';
import EwooProfile from '../../assets/images/EwooProfile.svg?react';

const ChatBody = () => {
    const answerText = '치킨 뼈는 일반 쓰레기로 분류하면 돼요! 만약, 치킨 뼈에 고기가 남아있다면 뼈와 분리해서 고기는 음식물 쓰레기로 분류해 주세요.';
    const {page, setPage} = useContext(MyContext);
    return (
        <body>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '0.81rem',
                height: '77vh',
            }}>
                <div>
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
                        gap: '0.81rem',
                        padding: '0.81rem',
                    }}>
                        <EwooProfile />
                        <YourChatCloud text={answerText} />
                    </div>
                </div>
                <QuestionButtonFlexer>
                    <QuestionButtonContainer/>
                    <ChatInputField isActive={false} />
                </QuestionButtonFlexer>
            </div>
        </body>
    )
}

export default ChatBody;