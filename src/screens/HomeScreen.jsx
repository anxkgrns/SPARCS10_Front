import React, { useContext } from 'react'
import { NaviContext } from '../navigation/NaviBar';

import styled from 'styled-components'
import coinIcon from '../assets/icons/coin.svg'
import notifi from '../assets/icons/notifications.svg'
import Right from '../assets/icons/ChevronLeft.svg'
import ExPlant from '../assets/icons/Explant.svg'
import Leaf from '../assets/icons/leaf.svg'

import MoneySpliter from '../assets/icons/MoneySpliter.svg'
import AppName from '../assets/icons/AppName.svg'
import AppNameDesign from '../assets/icons/AppNameDesign.svg'
import water from '../assets/icons/water.svg'

import friend1 from '../assets/icons/friend1.svg'
import friend2 from '../assets/icons/friend2.svg'
import friend3 from '../assets/icons/friend3.svg'
import friend4 from '../assets/icons/friend4.svg'
import friend5 from '../assets/icons/friend5.svg'

import Badge1 from '../assets/icons/badges/Badge1.svg'
import Badge2 from '../assets/icons/badges/Badge2.svg'
import Badge3 from '../assets/icons/badges/Badge3.svg'

import KingMark from '../assets/icons/KingMark.svg'
import MeMark from '../assets/icons/MeMark.svg'
import PlantScreen from '../screens/PlantScreen';




import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function HomeScreen() {

  const {insidePage,setInsidePage} = useContext(NaviContext);
  
  function handleClick() {console.log('Viewport width: ' + window.innerWidth);
  console.log('Viewport height: ' + window.innerHeight);
  }
  var gap = "0.63rem";
  const [coin] = useState(1000);
  const [Leafcoin] = useState(1000);

  const [task, setTask] = useState(['AI 챗봇에게 오늘의 환경 상식 듣기 ', '실내 적정 온도 설정하기', '텀블러 사용 인증하기' ]);
  const [taskReward, setTaskReward] = useState([10, 20, 30]);
  const [taskComplete, setTaskComplete] = useState([true, false, false]);

  const [plant_text, setPlantText] = useState("물 줄 시간이에요!");

  const [Time_left_string, setTime_left] = useState("3일 14시간 남음");

  const [Friends, setFriends] = useState([friend1, friend2, friend3, friend4, friend5]);
  const [Friend_names,setNames] = useState(['지원이','춘식이','다붓이','넙죽이','라이언']);
  const [Friend_leafs,setLeafs] = useState([25,20,11,9,2]);

  const BadgeNum = [0,1,2];

  const[BadgeName, setBadgeName] = useState(['최초의 꽃','황금잎사귀','기부왕']);
  const[BadgeImg, setBadgeImg] = useState([Badge1, Badge2, Badge3]);

  const my_name = '다붓이';


  const inset = [
    0,1,2,3,4
  ];

  function Friend_Div({i}){
    if(i == 0){
      return (
        <>
          <img src={KingMark} alt=" " style={{position : 'absolute',top : '0rem',left : '0rem',zIndex :'1rem',  width: '1.43388rem', height: '1.19863rem'}}/>
          <Body3_friend_div>
            <Body3_friend_king>
              <img src = {Friends[i]} alt=" " style={{width: "4.1875rem", height: "4.1875rem"}}/>
            </Body3_friend_king>
            <Body3_friend_name>
              {Friend_names[i]}
            </Body3_friend_name>
            <Body3_friend_leafs>
              {Friend_leafs[i]+'개'}
            </Body3_friend_leafs>
          </Body3_friend_div>
        </>
      )
    }
    if( Friend_names[i] == my_name){
      return (
      <>
        <img src={MeMark} alt=" " style={{position : 'absolute',top : '0rem',left : `${4.2*i+2.0}rem`,zIndex :'1rem',  width: '1.6875rem', height: '1rem'}}/>
        <Body3_friend_div>
        <Body3_me>
          <img src = {Friends[i]} alt=" " style={{width: "4.1875rem", height: "4.1875rem"}}/>
        </Body3_me>
        <Body3_friend_name>
          {Friend_names[i]}
        </Body3_friend_name>
        <Body3_friend_leafs>
          {Friend_leafs[i]+'개'}
        </Body3_friend_leafs>
      </Body3_friend_div>
      </>
      )
    }
    else{
      return (
        
          <Body3_friend_div>
          <Body3_friend>
            <img src = {Friends[i]} alt=" " style={{width: "4.1875rem", height: "4.1875rem"}}/>
          </Body3_friend>
          <Body3_friend_name>
            {Friend_names[i]}
          </Body3_friend_name>
          <Body3_friend_leafs>
            {Friend_leafs[i]+'개'}
          </Body3_friend_leafs>
        </Body3_friend_div>
        
      )
    }

  }    

  function Badge_Div({i}){
    return(
      <Body4_Badge_div>
        <img src = {BadgeImg[i]} alt=" " style={{width: "4.6875rem", height: "4.6875rem"}}/>
        <CustomSpacer height="0.5rem"/>
        <Body4_Badge_name>
          {BadgeName[i]}
        </Body4_Badge_name>
      </Body4_Badge_div>
    )
  }
    
  
  return (
    <NaviContext.Provider value={{insidePage,setInsidePage}}>
      {insidePage === 'main' && 
      <>
        <HeadBox>
          <img src= {AppName}
            style={{
              position: 'absolute',
              top:'1.37rem',
              left: '1.55rem',
            }}
          /> 
          <img src= {AppNameDesign}
            style={{
              position: 'absolute',
              top:'1.6rem',
              left: '7.75rem',
            }}
          />
        
          <HeadButton onClick = {handleClick}>
            <img src = {notifi} alt=" " style={{width: "2rem", height: "2rem", position : 'absolute', top : '0rem', left : '0rem' }}/>
          </HeadButton>  

        </HeadBox>
        <div 
          style={{
            position: 'absolute',
            top: '0rem',

            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            width: '25.75rem',
            height: '23.1875rem',
            background: 'linear-gradient(180deg, #8DD40E 10%, #EFFEC9 76%)'
          }}
        >
          <CustomSpacer height="5.37rem"/>

          <MoneyBar>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '0.5rem',
                flexShrink: 0,
              
              }}
            >
              <img src={coinIcon} alt=" " style={{width: "1.5rem", height: "1.5rem"}}/>
              <MoneyBarText>
                {coin}
              </MoneyBarText>

            </div>
            <img src={MoneySpliter} alt=" " />
            
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '0.5rem',
                flexShrink: 0,
              
              }}
            >
              <img src={Leaf} alt=" " style={{width: "1.31rem", height: "1.27rem"}}/>
              <MoneyBarText>
                {Leafcoin}
              </MoneyBarText>

            </div>


          </MoneyBar>

          <CustomSpacer height="1.19rem"/>
          </div>

          <BigMenu>

            <CustomSpacer height="1.81rem"/>

            <Body1>
              <Body_first_line>
                <Body1_text1>
                  오늘의 환경 미션
                </Body1_text1>
                <img src = {Right} alt=" " style={{width: "2.125rem", height: "2.125rem"}}/>
              </Body_first_line>
              

              <Quest top= "3.75rem">
                <Body1_subtext>
                  {task[0]}
                </Body1_subtext>

                  {taskComplete[0] ? <Body1_complete_text> 완료! </Body1_complete_text> 
                  : 
                  <Body1_reward>
                  <CoinImg src={coinIcon} alt=" " />
                    <Body1_reward_text>
                      {taskReward[0]}
                    </Body1_reward_text>
                </Body1_reward>
                  }
              </Quest>

              <Quest top= "5.81rem">
                <Body1_subtext>
                  {task[1]}
                </Body1_subtext>

                  {taskComplete[1] ? <Body1_complete_text> 완료! </Body1_complete_text>
                  : 
                  <Body1_reward>
                    <CoinImg src={coinIcon} alt=" " />
                      <Body1_reward_text>
                        {taskReward[1]}
                      </Body1_reward_text>
                  </Body1_reward>
                  }
              </Quest>

              <Quest top= "7.88rem">
                <Body1_subtext>
                  {task[2]}
                </Body1_subtext>

                  {taskComplete[1] ? <Body1_complete_text> 완료! </Body1_complete_text>
                  : 
                  <Body1_reward>
                      <CoinImg src={coinIcon} alt=" " />
                      <Body1_reward_text>
                        {taskReward[2]}
                      </Body1_reward_text>
                  </Body1_reward>
                  }     
              </Quest>
              
            </Body1>


            <CustomSpacer height="1.25rem"/>

            <Body2 onClick={
              () => {
                setInsidePage('MyPlant1');
            }}>
              <Body_first_line>
                <Body1_text1>
                  식물 가꾸기
                </Body1_text1>
                <img src = {Right} alt=" " style={{width: "2.125rem", height: "2.125rem" }}/>
              
              </Body_first_line>

              <Body2_panel>
                <CustomSpacer height="0.5rem"/>
                <img src = {water} alt=" " style={{position: "absolute", top: "0.69rem", left: "1.12rem"}}/>
                <Body2_text
                  style={{
                    position: "absolute",
                    top: "0.5rem",
                    left: "2.44rem",
                  }}
                >
                  {plant_text}
                </Body2_text>
              </Body2_panel>

              <img src = {ExPlant} alt=" " style={{width: "9.2rem", height: "7.06rem", position: "absolute", top: "1rem", right: "-0.32rem"}}/>
              
            </Body2>

            <CustomSpacer height="1.75rem"/>

              <Challenge_title>
                챌린지
              </Challenge_title>

            <CustomSpacer height="1.25rem"/>

            <Body3>
              <Body_first_line>
                <Body1_text1>
                  주간 챌린지
                </Body1_text1>
                <Time_left_box>
                  <Time_left>
                    {Time_left_string}
                  </Time_left>
                  <img src = {Right} alt=" " style={{width: "2.125rem", height: "2.125rem"}}/>
                </Time_left_box>
              </Body_first_line>

              <Body3_subline>
              
                <Body3_subtext>
                  총 100개의 코인
                </Body3_subtext>
                <img src = {coinIcon} alt=" " style={{width: "1rem", height: "0.78rem"}}/>
                <Body3_subtext>
                  모으기
                </Body3_subtext>
              </Body3_subline>

              
              <Body3_friends>
                {
                  inset.map((i) => (
                  <Friend_Div i = {i}/>
                  ))
                }

              </Body3_friends>
            </Body3>

            <CustomSpacer height="1.25rem"/>

            <Body4>
              <Body_first_line>
                <Body1_text1>
                  배지
                </Body1_text1>
                <img src = {Right} alt=" " style={{width: "2.125rem", height: "2.125rem"}}/>
              </Body_first_line>
              
              {/*배치 추가하고 싶으면 아래 형식으로 */}
              <Body4_Badge>
                {
                  BadgeNum.map((i) => (
                  <Badge_Div i = {i}/>
                  ))
                }
              </Body4_Badge>
            </Body4>

            <CustomSpacer height="12.69rem"/>
          </BigMenu>

          {/* <Text1>
            {main_text}
          </Text1> */}
      </>
      }
      {(insidePage === 'MyPlant1'||
        insidePage === 'MyPlant2'||
        insidePage === 'MyPlant3'|| 
        insidePage === 'PlantShop1'||
        insidePage === 'PlantShop2'||
        insidePage === 'PlantShop3'
        ) &&
          <PlantScreen/>}
    </NaviContext.Provider>
  );
}

const HeadBox = styled.header`
flex-direction: column;
flex-shrink: 0;
background: #FFF;
fill: #FFF;box-shadow: 0rem 0.125rem 0.25rem 0px rgba(0, 0, 0, 0.2), 0rem 0.125rem 0.25rem 0px rgba(0, 0, 0, 0.1);
`;

const HeadButton = styled.button`
  position: absolute;
  top: 0.94rem;
  left: 22.37rem;

  width: 2rem;
  height: 2rem;
  color : white;
  background: #FFF;
  border : none;
  -webkit-tap-highlight-color: transparent;
  outline: none;
  box-shadow: none;
`;


const MoneyBar = styled.div`

display : flex;
flex-direction : row;
justify-content : space-evenly;
align-items : center;


width: 22.625rem;
height: 3.5rem;
flex-shrink: 0;
border-radius: 1.25rem;
background: #FFF;
`;

const MoneyBarText = styled.text`
color: var(--black, #101210);
text-align: right;
font-family: AppleSDGothicNeoEB;
font-size: 1.25rem;
font-style: normal;
font-weight: 400;
line-height: 140.041%; /* 1.7505rem */
`;

const BigMenu = styled.div`

position: absolute;
top:10.25rem;

width: 25.75rem;
height: fit-content;
min-height: 10rem;

display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;

flex-shrink: 0;
border-radius: 1.25rem;
background: #FFF;
`;

const Body_first_line = styled.div`

display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

position: absolute;
top: 1rem;
left: 1.13rem;
right: 0.44rem;

height: 2rem;


`;

const Body1 = styled.button`
position : relative;

width: 22.5rem;
height: 10.8125rem;
flex-shrink: 0;border-radius: 1.25rem;
background: var(--white, #FFF);

/* blurbox */
box-shadow: 0px 0px 5px 0px rgba(199, 199, 199, 0.50), 0px 1px 40px 0px rgba(144, 164, 140, 0.10);
&:hover {
  background: rgba(226, 229, 63, 1);
  transition: 0.5s;
}
`;

const CoinImg = styled.img`

width: 1.34rem;
height: 1.34rem;
`;

const Quest = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

position : absolute;

top : ${props => props.top};
left : 1.25rem;
right : 1.06rem;
`;

const Body1_reward = styled.div`

display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

width: 2.5625rem;
height: 1.34413rem;
flex-shrink: 0;
`;

const Body1_text1 = styled.text`
color: #101210;
font-family: AppleSDGothicNeoB;
font-size: 1.425rem;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.0285rem;
`;

const Body1_complete_text = styled.text`

color: var(--black, #101210);
text-align: right;
font-family: AppleSDGothicNeoEB;
font-size: 1.03125rem;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.02063rem;
`;

const Body1_reward_text = styled.text`


color: var(--black, #101210);
font-family: AppleSDGothicNeoEB;
font-size: 0.9375rem;
font-style: normal;
font-weight: 400;
line-height: 140.041%; /* 1.31288rem */
`;

const Body1_subtext = styled.text`

color: var(--black, #101210);
font-family: AppleSDGothicNeoR;
font-size: 1.03125rem;
font-style: normal;
font-weight: 400;
line-height: 1.875rem; /* 181.818% */
letter-spacing: -0.02063rem;
`;


const Body2= styled.button`
position: relative;

width: 22.5rem;
height: 7.625rem;
flex-shrink: 0;
border-radius: 1.25rem;

overflow: hidden;

background: var(--white, #FFF);

/* blurbox */
box-shadow: 0px 0px 5px 0px rgba(199, 199, 199, 0.50), 0px 1px 40px 0px rgba(144, 164, 140, 0.10);
&:hover {
  background: rgba(226, 229, 63, 1);
  transition: 0.5s;
}
`;

const Body2_panel = styled.div`

position: absolute;
bottom: 1.12rem;
left: 1.13rem;

height: 2.5rem;
width: 10.31rem;


border-radius: 6.25rem;
background: rgba(226, 229, 63, 0.30);
`;

const Body2_text = styled.text`

color: #52810A;

font-family: AppleSDGothicNeoM;
font-size: 0.9375rem;
font-style: normal;
font-weight: 400;
line-height: 122%; /* 1.14375rem */
letter-spacing: -0.0375rem;
`;

const Challenge_title = styled.text`

position: relative;
left: 1.63rem;

align-self: start;

color: var(--black, #101210);
font-family: AppleSDGothicNeoB;
font-size: 1.5rem;
font-style: normal;
font-weight: 400;
line-height: 2.875rem; /* 191.667% */
letter-spacing: -0.03rem;
`;

const Body3 = styled.div`
position: relative;

display: flex;
flex-direction: column;

width: 22.5rem;
height: 14.125rem;
flex-shrink: 0;
border-radius: 1.25rem;
background: var(--white, #FFF);

/* blurbox */
box-shadow: 0px 0px 5px 0px rgba(199, 199, 199, 0.50), 0px 1px 40px 0px rgba(144, 164, 140, 0.10);
`;

const Time_left = styled.text`
color: var(--green5, #52810A);
text-align: right;
font-family: AppleSDGothicNeoEB;
font-size: 0.9375rem;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.01875rem;
`;

const Time_left_box = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

width : auto;
height : auto;
`;

const Body3_subtext = styled.text`

color: #959595;

/* 12pt */
font-family: AppleSDGothicNeoR00;
font-size: 0.855rem;
font-style: normal;
font-weight: 400;
line-height: 122%; /* 1.04313rem */
letter-spacing: -0.01713rem;
`;

const Body3_subline = styled.div`

display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;

position: absolute;
top: 3.25rem;
left: 1.25rem;
right: 1.06rem;
`;

const Body3_friend_div = styled.div`
display: flex;
flex-direction: column;
margin: 0rem 0.3rem 0rem 0.3rem;

align-items: center;

width : 40rem;
height : 6.3rem;
`;

const Body3_friends = styled.div`

position: absolute;
top: 5.49rem;
left: 1.19rem;

display : flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
overflow-x: scroll;
&::-webkit-scrollbar {
  display: none;
}

width: 20.125rem;
height: 6.625rem;
flex-shrink: 0;

// background: #FFF;
`;

const Body3_friend_name = styled.text`
color: var(--black, #101210);
text-align: center;
font-family: AppleSDGothicNeoB;
font-size: 0.855rem;
font-style: normal;
font-weight: 400;
line-height: 122%; /* 1.04313rem */
letter-spacing: -0.01713rem;
`;

const Body3_friend_leafs = styled.text`
color: var(--green6, #42650F);
text-align: center;
font-family: AppleSDGothicNeoB;
font-size: 0.855rem;
font-style: normal;
font-weight: 400;
line-height: 122%; /* 1.04313rem */
letter-spacing: -0.01713rem;
`;

const Body3_friend_king = styled.div`
display: flex;
width: 3.875rem;
height: 3.875rem;
justify-content: center;
align-items: center;
flex-shrink: 0;
overflow: hidden;

border-radius: 6.25rem;
border: 4px solid var(--green2, #E2E53F);
box-sizing: border-box;
background: var(--green1, #EFFEC9);
box-shadow: 0px 0px 1px 5px rgba(16, 18, 16, 0.20) inset;
`;

const Body3_friend = styled.div`
display: inline-flex;
height: 3.875rem;
width: 3.875rem;
justify-content: center;
align-items: center;
flex-shrink: 0;
overflow: hidden;

border-radius: 6.25rem;
box-sizing: border-box;
background: var(--green1, #EFFEC9);
`;

const Body3_me = styled.div`
display: inline-flex;
height: 3.875rem;
width: 3.875rem;
justify-content: center;
align-items: center;
flex-shrink: 0;
overflow: hidden;

border-radius: 6.25rem;
border: 4px solid var(--green5, #52810A);
box-sizing: border-box;
background: var(--green1, #EFFEC9);
`;

const Body4 = styled.div`
position: relative;

display: flex;
flex-direction: column;

width: 22.25rem;
height: 11.4375rem;
flex-shrink: 0;
border-radius: 1.25rem;
background: var(--white, #FFF);

/* blurbox */
box-shadow: 0px 0px 5px 0px rgba(199, 199, 199, 0.50), 0px 1px 40px 0px rgba(144, 164, 140, 0.10);
`;
const Body4_Badge_div = styled.div`
display: flex;
flex-direction: column;

align-items: center;
width :auto;
height : 6.3rem;
`;

const Body4_Badge = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;

height: auto;
width: 20.125rem;

column-gap : 1.19rem;

position: absolute;
top: 4.13rem;
left: 1.13rem;
`;

const Body4_Badge_name = styled.text`
color: var(--black, #101210);
text-align: center;
font-family: AppleSDGothicNeoB;
font-size: 0.855rem;
font-style: normal;
font-weight: 400;
line-height: 122%; /* 1.04313rem */
letter-spacing: -0.01713rem;
`;

const CustomSpacer = styled.div`
height: ${props => props.height};
`;
