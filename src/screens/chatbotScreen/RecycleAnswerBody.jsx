import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import {ChatInputField, QuestionButton, ChatBotHeader, CustomSpacer, QuestionButtonFlexer, ChatCloudContainer, EwooChatStyle, MainEwoo, MyChatCloud, YourChatCloud, QuestionButtonContainer} from './util.jsx';
import { MyContext } from './ChatBotBaseScreen.jsx';
import EwooProfile from '../../assets/images/EwooProfile.svg?react';

import GetRecycleTip from '../../requests/ChatbotRecycleTip';

const RecycleAnswerBody = () => { // recycle, greenIdea 분리하기.
    const {recycleAsk, setRecycleAsk} = useContext(MyContext);
    const [answerText, setAnswerText] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const ask = recycleAsk ? recycleAsk : '분리수거가 어려운 품목을 하나 골라서 분리수거 방법을 설명해줘.';

    useEffect(() => {
        const fetchRecycleTip = async () => {
            try {
                setLoading(true);
                const tip = await GetRecycleTip(ask);
                setAnswerText(tip);
            } catch (error) {
                setError('Failed to fetch recycle tip');
                console.error('Failed to fetch recycle tip:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchRecycleTip();
    }, [ask]);

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
                        <MyChatCloud text={ask} />
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
                        {
                            loading ? <YourChatCloud text='잠시만 기다려주세요...'/> : 
                            error ? <YourChatCloud text='죄송합니다. 재활용 정보를 불러오지 못했습니다.'/> :
                            <YourChatCloud text={answerText} />
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

export default RecycleAnswerBody;