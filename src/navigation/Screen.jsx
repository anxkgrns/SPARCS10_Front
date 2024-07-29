
import HomeScreen from './screens/HomeScreen';
import MyPage from './screens/MyPage';
import PlantScreen from './screens/PlantScreen';
import ShoppingScreen from './screens/ShoppingScreen';
import ChatBotScreen from './screens/ChatBotScreen';
import TrashMapScreen from './screens/TrashMapScreen';
import AppNavi from './NaviBar';

import { BrowserRouter, Route , Routes } from 'react-router-dom';


export default function Screen() {
  return ( 
      <body>

        {/* <BrowserRouter>
          <Routes>
            <Route path="/home" 
            element={<HomeScreen/>} />
            <Route path="/Challenge"
            element={<Challenge/>} />
            <Route path="/MyPage"
            element={<MyPage/>} />
            <Route path="/Plant"
            element={<PlantScreen/>} />
            <Route path="/Shop"
            element={<ShoppingScreen/>} />
            <Route path="/ChatBot"
            element={<ChatBotScreen/>} />
            <Route path="/TrashMap"
            element={<TrashMapScreen/>} />
          </Routes>
        </BrowserRouter> */}
      </body>
  )
}