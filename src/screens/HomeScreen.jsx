import styled from 'styled-components'
import coinIcon from '../assets/icons/coin.svg'
import notifi from '../assets/icons/notifications.svg'
import { useState } from 'react'


export default function HomeScreen() {
  const main_text = "더 나은 \n내일의 우리를 위해"

  const test_text = "texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext"

  function handleClick() {console.log('Viewport width: ' + window.innerWidth);
  console.log('Viewport height: ' + window.innerHeight);
  }
  var gap = "0.63rem";
  const [coin] = useState(1000);
    
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

          <Body1>
          </Body1>


          <CustomSpacer height="1.25rem"/>

          <Body2>
          </Body2>

          <CustomSpacer height="1.25rem"/>

          <Body3>
          </Body3>

          <CustomSpacer height="10.25rem"/>

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

const Body1 = styled.div`
display: flex;
flex-direction: column;

width: 22.5rem;
height: 10.8125rem;
flex-shrink: 0;border-radius: 1.25rem;
background: var(--white, #FFF);

/* blurbox */
box-shadow: 0px 0px 5px 0px rgba(199, 199, 199, 0.50), 0px 1px 40px 0px rgba(144, 164, 140, 0.10);
`;

const Body2= styled.div`
display: flex;
flex-direction: column;

width: 22.5rem;
height: 7.625rem;
flex-shrink: 0;
border-radius: 1.25rem;
background: var(--white, #FFF);

/* blurbox */
box-shadow: 0px 0px 5px 0px rgba(199, 199, 199, 0.50), 0px 1px 40px 0px rgba(144, 164, 140, 0.10);
`;

const Body3 = styled.div`
display: flex;
flex-direction: column;

width: 22.5rem;
height: 13.0625rem;
flex-shrink: 0;
border-radius: 1.25rem;
background: var(--white, #FFF);

/* blurbox */
box-shadow: 0px 0px 5px 0px rgba(199, 199, 199, 0.50), 0px 1px 40px 0px rgba(144, 164, 140, 0.10);
`;

const CustomSpacer = styled.div`
height: ${props => props.height};
`;
