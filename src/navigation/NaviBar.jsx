
import React from 'react';
import { Box, IconButton } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import ForestIcon from '@mui/icons-material/Forest';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import './NaviBar.css'

import HomeScreen from '../screens/HomeScreen';
import MyPage from '../screens/MyPage';
import PlantScreen from '../screens/PlantScreen';
import ShoppingScreen from '../screens/ShoppingScreen';
import ChatBotScreen from '../screens/chatbotScreen/ChatBotMainScreen';
import TrashMapScreen from '../screens/TrashMapScreen';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('홈');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>

      {value === '홈' && <HomeScreen />}
      {value === '식물원' && <PlantScreen />}
      {value === '챗봇' && <ChatBotScreen />}
      {value === '쇼핑' && <ShoppingScreen />}
      {value === '마이' && <MyPage />}   
      <footer>
      <BottomNavigation sx={{ width: 1 }} value={value} showLabels onChange={handleChange} >
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
        
      </BottomNavigation>
      </footer>
    </Box>
  );
}