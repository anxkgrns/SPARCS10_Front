import React, { useState } from 'react';
import styled from 'styled-components';
import {ChatInputField, QuestionButton, ChatBotHeader, CustomSpacer, ChatCloudContainer, EwooChatStyle, MainEwoo} from './util.jsx';
import MainBody from './MainBody.jsx';
import { TrashcanBody } from './TrashcanBody.jsx';
import  RecycleBody from './RecycleBody.jsx';
import PendingBody from './PendingBody.jsx';
import RecycleAnswerBody from './RecycleAnswerBody.jsx';
import GreenIdeasBody from './GreenIdeasBody.jsx';

import { useNavermaps } from 'react-naver-maps';

const MyContext = React.createContext();
const GeoContext = React.createContext();

const ChatBotBaseScreen = () => {
  
  const navermaps = useNavermaps()

  const [page, setPage] = useState('main');
  const [currentLatLng, setCurrentLatLng] = useState(new navermaps.LatLng(37.5666805, 126.9784147)); // 시청 좌표
  const [trashcanLatLng, setTrashcanLatLng] = useState(new navermaps.LatLng(37.5666805, 126.9784147)); // 시청 좌표
  const [maxLatLng, setMaxLatLng] = useState(null);
  const [minLatLng, setMinLatLng] = useState(null);
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
          <GeoContext.Provider value={{currentLatLng, setCurrentLatLng, maxLatLng, setMaxLatLng, minLatLng, setMinLatLng, trashcanLatLng, setTrashcanLatLng}}>
            {page === '쓰레기통' && <TrashcanBody />}
          </GeoContext.Provider>
          {page === '분리수거' && <RecycleBody />}
          {page === 'pend' && <PendingBody />}
          {page === 'chat' && <RecycleAnswerBody />}

        </MyContext.Provider>
    </div>
  );
};

export {ChatBotBaseScreen, MyContext, GeoContext};