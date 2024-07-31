import React, { useContext } from 'react';

import AioffIcon from '../assets/icons/aioff.svg'
import Aion from '../assets/icons/aion.svg'
import Personoff from '../assets/icons/personoff.svg'
import Personon from '../assets/icons/personon.svg'
import Gardenoff from '../assets/icons/gardenoff.svg'
import Gardenon from '../assets/icons/gardenon.svg'
import Shopoff from '../assets/icons/shopoff.svg'
import Shopon from '../assets/icons/shopon.svg'
import Menuoff from '../assets/icons/menuoff.svg'
import Menuon from '../assets/icons/menuon.svg'

import './NaviBar.css'

import HomeScreen from '../screens/HomeScreen';
import MyPage from '../screens/MyPage';

import ForestScreen from '../screens/ForestScreen';
import ShoppingScreen from '../screens/ShoppingScreen';
import {ChatBotBaseScreen} from '../screens/chatbotScreen/ChatBotBaseScreen';
import styled from 'styled-components';


const NaviBar = () => {
  const [value, setValue] = React.useState('홈');
  const [insidePage, setInsidePage] = React.useState('main');

  function BarBottom(){
    return (
      <NaviBarBottom> 
        <Navibutton onClick={() => { setValue('홈'); }}>
          <img src = {value === '홈' ? Menuon : Menuoff}/>
          <TextButton 
            color = {value === '홈' ? '#101210' : '#BCBCBC'} 
            font = {value === '홈' ? 'AppleSDGothicNeoB' : 'AppleSDGothicNeoM'} 
          > 홈 </TextButton>
        </Navibutton>
        <Navibutton onClick={() => { setValue('식물원'); }}>
          <img src = {value === '식물원' ? Gardenon : Gardenoff}/>
          <TextButton 
            color = {value === '식물원' ? '#101210' : '#BCBCBC'} 
            font = {value === '식물원' ? 'AppleSDGothicNeoB' : 'AppleSDGothicNeoM'}          
          > 식물원 </TextButton>
        </Navibutton>
        <Navibutton onClick={() => { setValue('챗봇'); }}>
          <img src = {value === '챗봇' ? Aion : AioffIcon}/>
          <TextButton 
            color = {value === '챗봇' ? '#101210' : '#BCBCBC'} 
            font = {value === '챗봇' ? 'AppleSDGothicNeoB' : 'AppleSDGothicNeoM'}  
          > AI 챗봇 </TextButton>
        </Navibutton>
        <Navibutton onClick={() => { setValue('쇼핑'); }}>
          <img src = {value === '쇼핑' ? Shopon : Shopoff}/>
          <TextButton 
            color = {value === '쇼핑' ? '#101210' : '#BCBCBC'}
            font = {value === '쇼핑' ? 'AppleSDGothicNeoB' : 'AppleSDGothicNeoM'}
          > 쇼핑 </TextButton>
        </Navibutton>
        <Navibutton onClick={() => { setValue('마이'); }}>        
          <img src = {value === '마이' ? Personon : Personoff}/>
          <CustomSpacer/>
          <TextButton 
            color = {value === '마이' ? '#101210' : '#BCBCBC'} 
            font = {value === '마이' ? 'AppleSDGothicNeoB' : 'AppleSDGothicNeoM'}
          > 내 정보 </TextButton>
        </Navibutton> 
      </NaviBarBottom>
    )
  }

  return (

    <NaviContext.Provider value={{insidePage,setInsidePage}}>
      {value === '홈' && (
        <>
          {insidePage === 'main' &&
          (<>
          <HomeScreen />
          <BarBottom />
          </>)
          }
          {(insidePage === 'MyPlant1'|| 
            insidePage === 'MyPlant2'||
            insidePage === 'MyPlant3'||
            insidePage === 'PlantShop1'||
            insidePage === 'PlantShop2'||
            insidePage === 'PlantShop3'        
            ) &&
          <HomeScreen/>}

        </>
      )}
      {value === '식물원' && (
        <>
       { insidePage === 'main' &&
          (<>
          <ForestScreen />
          <BarBottom />
          </>)}
          
          {(insidePage === 'MyPlant1'|| 
            insidePage === 'MyPlant2'||
            insidePage === 'MyPlant3'||
            insidePage === 'PlantShop1'||
            insidePage === 'PlantShop2'||
            insidePage === 'PlantShop3'         
            ) &&
            <HomeScreen/>}
        </>
      )}

      {value === '챗봇' && (
        <>
          <ChatBotBaseScreen />
          <BarBottom />
        </>
      )}
      {value === '쇼핑' && (
        <>
          <ShoppingScreen />
          <BarBottom />
        </>
      )}
      {value === '마이' &&(
        <>
          <MyPage />
          <BarBottom />
        </>
      )}
    </NaviContext.Provider>
  );
};


const NaviContext = React.createContext();

export { NaviBar, NaviContext };

const NaviBarBottom = styled.footer`
  display: flex;
  border-width: 100%;
  box-sizing: border-box;
  padding : 0rem 1rem 0rem 1rem;
//  padding: 0.6875rem 1rem 0.5625rem 1rem;
  align-items: center;
  // gap: 3.75rem; 
  justify-content: space-evenly;  
  background: #FFFFFF;

  /* bar */
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.2), 0px -3px 4px 0px rgba(0, 0, 0, 0.1);

`;

const Navibutton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content : space-between;
  align-items: center;
  padding: 0.6rem 1.2rem;
//  width: auto;
  width : 4.5rem;
  height : 4rem;
  background: #FFFFFF;
  border : none;
  -webkit-tap-highlight-color: transparent;
  outline: none;
  box-shadow: none;
`;

const TextButton = styled.text`
  color : ${props => props.color};
//  color: #BCBCBC;
  text-align: center;


  font-family: ${props => props.font};
  font-size: 0.7125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 122%; /* 0.86925rem */
  letter-spacing: -0.0285rem;
`;

const CustomSpacer = styled.div`
height: auto;;
`;