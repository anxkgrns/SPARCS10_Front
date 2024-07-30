import React, { useState } from 'react';
import styled from 'styled-components';
import {ChatInputField, QuestionButton, ChatBotHeader, CustomSpacer, ChatCloudContainer, EwooChatStyle, MainEwoo} from './util.jsx';
import MainBody from './MainBody.jsx';
import { TrashcanBody } from './TrashcanBody.jsx';
import  RecycleBody from './RecycleBody.jsx';
import PendingBody from './PendingBody.jsx';
import RecycleAnswerBody from './RecycleAnswerBody.jsx';
import GreenIdeasBody from './GreenIdeasBody.jsx';

const MyContext = React.createContext();

const ChatBotBaseScreen = () => {
  const [page, setPage] = useState('main');
  const [recycleAsk, setRecycleAsk] = useState('');

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'start',
      alignItems: 'center',
    }}>
      <ChatBotHeader />
      <CustomSpacer height="2.31rem" />
        <MyContext.Provider value={{page, setPage, recycleAsk, setRecycleAsk}}>
          {page === 'main' && <MainBody />}
          {page === '환경 상식' && <GreenIdeasBody />}
          {/*page === '문의 사항' && <AskBody />} */}
          {page === '쓰레기통' && <TrashcanBody />}
          {page === '분리수거' && <RecycleBody />}
          {page === 'pend' && <PendingBody />}
          {page === 'chat' && <RecycleAnswerBody />}

        </MyContext.Provider>
    </div>
  );
};

export {ChatBotBaseScreen, MyContext};