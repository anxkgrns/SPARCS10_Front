import { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import {ChatInputField, QuestionButton, ChatBotHeader, CustomSpacer, QuestionButtonFlexer, ChatCloudContainer, EwooChatStyle, MainEwoo, MyChatCloud, YourChatCloud, QuestionButtonContainer} from './util.jsx';
import { MyContext } from './ChatBotBaseScreen.jsx';
import EwooProfile from '../../assets/images/EwooProfile.svg?react';

import { GetGreenIdea } from '../../requests/ChatbotGreenIdeas.js';

const ChatBody = () => { // recycle, greenIdea 분리하기.
    const {page, setPage} = useContext(MyContext);
    const [greenIdea, setGreenIdea] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        const fetchGreenIdea = async () => {
        try {
            setLoading(true);
            const idea = await GetGreenIdea();
            setGreenIdea(idea);
        } catch (error) {
            setError('Failed to fetch green idea');
            console.error('Failed to fetch green idea:', error);
        } finally {
            setLoading(false);
        }

        console.log("error: ", error);
        console.log("loading: ", loading);
        console.log("greenIdea: ", greenIdea);
    };

    fetchGreenIdea();
  }, []);

    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
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
                        { loading ?
                            <YourChatCloud text="잠시만 기다려주세요..." /> :
                            error ? 
                            <YourChatCloud text={error} /> :
                            <YourChatCloud text={greenIdea} />
                        }
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