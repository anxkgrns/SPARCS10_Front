import styled from 'styled-components'
import coinIcon from '../assets/icons/coin.svg'
import notifi from '../assets/icons/notifications.svg'
import Right from '../assets/icons/ChevronRight.svg'
import ExPlant from '../assets/icons/Explant.svg'
import Leaf from '../assets/icons/leaf.svg'

import friend1 from '../assets/icons/friend1.svg'
import friend2 from '../assets/icons/friend2.svg'
import friend3 from '../assets/icons/friend3.svg'
import friend4 from '../assets/icons/friend4.svg'
import friend5 from '../assets/icons/friend5.svg'

import Badge1 from '../assets/icons/badges/Badge1.svg'
import Badge2 from '../assets/icons/badges/Badge2.svg'

import KingMark from '../assets/icons/KingMark.svg'
import MeMark from '../assets/icons/MeMark.svg'


import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Friend_Div(i){

  return(
    <Body3_friend>
      <img src = {Friends[i]} alt=" " style={{width: "3.875rem", height: "3.875rem"}}/>
    </Body3_friend>
  );

  
}

export default function HomeScreen() {
  
  function handleClick() {console.log('Viewport width: ' + window.innerWidth);
  console.log('Viewport height: ' + window.innerHeight);
  }
  var gap = "0.63rem";
  const [coin] = useState(1000);

  const [task, setTask] = useState(['AI 챗봇에게 오늘의 환경 상식 듣기 ', '실내 적정 온도 설정하기', '텀블러 사용 인증하기' ]);
  const [taskReward, setTaskReward] = useState([10, 20, 30]);
  const [taskComplete, setTaskComplete] = useState([true, false, false]);

  const [plant_text, setPlantText] = useState("물 줄 시간이에요!");

  const [Time_left_string, setTime_left] = useState("3일 14시간 남음");

  const [Friends, setFriends] = useState([friend1, friend2, friend3, friend4, friend5]);
  const [Friend_names,setNames] = useState(['지원이','춘식이','다붓이','넙죽이','라이언']);
  const [Friend_leafs,setLeafs] = useState([25,20,11,9,2]);
  const my_name = '다붓이';

  const inset = [
    0,1,2,3,4
  ];

  function Friend_Div({i}){
    if(i == 0){
      return (
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
      )
    }
    if( Friend_names[i] == my_name){
      return (
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

  return (
    <>
      <HeadBox>
      
        <HeadButton onClick = {handleClick}>
          <img src = {notifi} alt=" " style={{width: "2rem", height: "2rem", position : 'absolute', top : '0rem', left : '0rem' }}/>
        </HeadButton>  

        {/* <HeadDetail1 onClick = {handleClick}/>
        <HeadDetail2>
          <img src={coinIcon} alt=" " style={{width: "1.25rem", height: "1.25rem", position: "absolute", top: "0.12rem", left: "0.44rem"}}/>
          <ButtonText>
            {coin}
          </ButtonText>
        </HeadDetail2> 
        <HeadDetail3 onClick = {handleClick}/> */}
      </HeadBox>
    <body>
        <CustomSpacer height="1.63rem"/>

        <MoneyBar>
        </MoneyBar>

        <CustomSpacer height="1.19rem"/>

        <BigMenu>

          <CustomSpacer height="1.81rem"/>

          <Body1 onClick={
            () => {
              //! go to QuestMainScreen
              const navigate = useNavigate();
              navigate("/quest");
            }
          }>
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

          <Body2>
            <Body_first_line>
              <Body1_text1>
                식물 가꾸기
              </Body1_text1>
              <img src = {Right} alt=" " style={{width: "2.125rem", height: "2.125rem" }}/>
            
            </Body_first_line>

            <Body2_panel>
              <Body2_text>
                {plant_text}
              </Body2_text>
            </Body2_panel>

            <img src = {ExPlant} alt=" " style={{width: "9.2rem", height: "7.06rem", position: "absolute", top: "1rem", right: "-0.32rem"}}/>
            
          </Body2>

          <CustomSpacer height="1.62rem"/>

            <Challenge_title>
              챌린지
            </Challenge_title>

          <CustomSpacer height="0.69rem"/>

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
                총 100개의 이파리
              </Body3_subtext>
              <img src = {Leaf} alt=" " style={{width: "1rem", height: "0.78rem"}}/>
              <Body3_subtext>
                 모으기
              </Body3_subtext>
            </Body3_subline>

            <img src={KingMark} alt=" " style={{position : 'absolute',top : '5.32rem',left : '1rem',zIndex :'1rem',  width: '1.43388rem', height: '1.19863rem'}}/>
            <Body3_friends>
              {/* <Body3_friend_div>
                <Body3_friend_king>
                  <img src = {Friends[0]} alt=" " style={{width: "4.1875rem", height: "4.1875rem"}}/>
                </Body3_friend_king>
                <Body3_friend_name>
                  {Friend_names[0]}
                </Body3_friend_name>
                <Body3_friend_leafs>
                  {Friend_leafs[0]+'개'}
                </Body3_friend_leafs>
              </Body3_friend_div> */}
              {
                inset.map((i) => (
                <Friend_Div i = {i}/>
                ))
              }

            </Body3_friends>
          </Body3>

          <CustomSpacer height="2.69rem"/>

          <Body4>
            <Body_first_line>
              <Body1_text1>
                배지
              </Body1_text1>
              <img src = {Right} alt=" " style={{width: "2.125rem", height: "2.125rem"}}/>
            </Body_first_line>
            
            {/*배치 추가하고 싶으면 아래 형식으로 */}
            <Body4_Badge>
              <Body4_Badge_div>
                <img src = {Badge1} alt=" " style={{width: "4.6875rem", height: "4.6875rem"}}/>
                <Body4_Badge_name>
                  최초의 꽃
                </Body4_Badge_name>
              </Body4_Badge_div>

              <Body4_Badge_div>
                <img src = {Badge1} alt=" " style={{width: "4.6875rem", height: "4.6875rem"}}/>
                <Body4_Badge_name>
                  최초의 꽃
                </Body4_Badge_name>
              </Body4_Badge_div>
            </Body4_Badge>
          </Body4>

          <CustomSpacer height="12.69rem"/>
        </BigMenu>

        {/* <Text1>
          {main_text}
        </Text1> */}
        

      </body>
    </>
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


const HeadDetail1 = styled.button`
width: 77px;
height: 24px;
flex-shrink: 0;
border-radius: 25px;
border: 1px solid #F4F4F4;
background: #FFF;
position: absolute;
top : 1.28rem;
left : 19.38rem;
`;

const HeadDetail2 = styled.button`
width: 4.9375rem;
height: 1.5rem;
flex-shrink: 0;
border-radius: 1.5625rem;
border: 1px solid #F4F4F4;
background: #FFF;
position: absolute;
top : 1.28rem;
left : 13.38rem;
`;

const HeadDetail3 = styled.button`
width: 2.5rem;
height: 2.5rem;
flex-shrink: 0;
border-radius: 25px;
border: 1px solid #F4F4F4;
background: #D9D9D9;;
position: absolute;
top : 0.8rem;
left : 1.56rem;
`;

const ButtonText = styled.text`
font-family: AppleSDGothicNeoB;
font-size: 0.9975rem;
font-style: normal;
font-weight: 400;
line-height: 140.041%; /* 1.39694rem */
letter-spacing: -0.01994rem;

position: absolute;
top: 0.12rem;
left: 2.31rem;
`;

const Text1 = styled.text`
display: flex;
align-self: start;
margin-left: 1.62rem;

flex-direction: column;
color: var(--black, #101210);
font-family: AppleSDGothicNeoB;
font-size: 1.995rem;
font-style: normal;
font-weight: 400;
line-height: 2.875rem; /* 144.11% */
letter-spacing: -0.03988rem;
white-space: pre-wrap;
`;

const MoneyBar = styled.div`
width: 22.625rem;
height: 3.5rem;
flex-shrink: 0;
border-radius: 1.25rem;
background: #FFF;
`;

const BigMenu = styled.div`
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
bottom: 1.13rem;
left: 1.13rem;

display: inline-flex;
height: 2.1875rem;
// box-sizing: border-box;
padding: 0rem 0.625rem 0rem 0.625rem;
justify-content: center;
align-items: center;
gap: 0.625rem;
flex-shrink: 0;

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
font-family: AppleSDGothicNeoEB00;
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

width: 22.5rem;
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
font-family: AppleSDGothicNeoB00;
font-size: 0.855rem;
font-style: normal;
font-weight: 400;
line-height: 122%; /* 1.04313rem */
letter-spacing: -0.01713rem;
`;

const CustomSpacer = styled.div`
height: ${props => props.height};
`;
