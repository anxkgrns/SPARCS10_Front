import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {ChatInputField, QuestionButton, ChatBotHeader, CustomSpacer, ChatCloudContainer, EwooChatStyle, MainEwoo} from './util.jsx';
import MainBody from './MainBody.jsx';
import { TrashcanBody } from './TrashcanBody.jsx';
import  RecycleBody from './RecycleBody.jsx';

const MyContext = React.createContext();

const ChatBotMainScreen = () => {
  const [page, setPage] = useState('main');

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'start',
      alignItems: 'center',
    }}>
      <ChatBotHeader />
      <CustomSpacer height="2.31rem" />
      <MyContext.Provider value={{page, setPage}}>
        {page === 'main' && <MainBody />}
        {/* {page === '환경 상식' && <GreenIdeaBody />}
        {page === '문의 사항' && <AskBody />} */}
        {page === '쓰레기통' && <TrashcanBody />}
        {page === '분리수거' && <RecycleBody />}
      </MyContext.Provider>
    </div>
  );
};

export {ChatBotMainScreen, MyContext};