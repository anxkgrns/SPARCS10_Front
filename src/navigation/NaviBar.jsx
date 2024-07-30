
import React from 'react';

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
import PlantScreen from '../screens/PlantScreen';
import ShoppingScreen from '../screens/ShoppingScreen';
import ChatBotScreen from '../screens/chatbotScreen/ChatBotMapAnswerScreen';

import styled from 'styled-components';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('홈');
  

  return (
    <>
      {value === '홈' && <HomeScreen />}
      {value === '식물원' && <PlantScreen />}
      {value === '챗봇' && <ChatBotScreen />}
      {value === '쇼핑' && <ShoppingScreen />}
      {value === '마이' && <MyPage />}   
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

      {/* <BottomNavigation sx={{ width: 1 }} value={value} showLabels onChange={handleChange} >
        <BottomNavigationAction
          label="홈"
          value="홈"
          icon={<HomeIcon />}
//          sx={{ minWidth: 0, maxWidth: '100%' }}
        />
        <BottomNavigationAction
          label="식물원"
          value="식물원"
          icon={<ForestIcon />}
          // onClick={() => {
          //   location.href = '/plant';
          // }}
        />
        <BottomNavigationAction
          label="챗봇"
          value="챗봇"
          icon={<EmojiEventsIcon 
          // sx={{color: 'black' }}
          />}
          // onClick={() => {
          //   location.href = '/challenge';
          // }}
        />
        <BottomNavigationAction 
          label="쇼핑" 
          value="쇼핑" 
          icon={<ShoppingCartIcon />} 
          
          // onClick={() => {
          //   location.href = '/shop';
          // }}
        />
        <BottomNavigationAction 
          label="마이"   
          value="마이" 
          icon={<PersonIcon />} 
          // onClick = {() => {
          //   location.href = '/mypage';
          // }}
        />
        
      </BottomNavigation> */}
    </>
  );
}

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
  padding: 0.6em 1.2em;
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
  etter-spacing: -0.0285rem;
`;

const CustomSpacer = styled.div`
height: auto;;
`;