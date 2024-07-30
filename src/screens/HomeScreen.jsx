import styled from 'styled-components'
import coinIcon from '../assets/icons/coin.svg'
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
        <HeadDetail1 onClick = {handleClick}/>
        <HeadDetail2>
          <img src={coinIcon} alt="coin" style={{width: "1.25rem", height: "1.25rem", position: "absolute", top: "0.12rem", left: "0.44rem"}}/>
          <ButtonText>
            {coin}
          </ButtonText>
        </HeadDetail2> 
        <HeadDetail3 onClick = {handleClick}/>
      </HeadBox>
    <body>

        <CustomSpacer height="2.63rem"/>

        <Text1>
          {main_text}
        </Text1>
        
        <CustomSpacer height="1.25rem"/>

        <Body1>
        </Body1>

        <CustomSpacer height="0.63rem"/>

        <Body2>
        </Body2>

        <CustomSpacer height="0.63rem"/>
        
        <Body3>
        </Body3>

        <CustomSpacer height="0.63rem"/>

        <Body3>
        </Body3>

        <CustomSpacer height="0.63rem"/>

        <Body3>
        </Body3>

        <CustomSpacer height="0.63rem"/>

        <Body3>
        </Body3>

        <CustomSpacer height="0.63rem"/>

        <Body3>
        </Body3>
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

const Body1 = styled.div`
display: flex;
flex-direction: column;

width: 22.5rem;
height: 9.5625rem;
flex-shrink: 0;
border-radius: 20px;
background: #FFF;


/* blurbox */
box-shadow: 0px 0px 5px 0px rgba(199, 199, 199, 0.50), 0px 1px 40px 0px rgba(144, 164, 140, 0.10);

`;

const Body2= styled.div`
display: flex;
flex-direction: column;

width: 360px;
height: 122px;
flex-shrink: 0;
border-radius: 20px;
background: #FFF;

/* blurbox */
box-shadow: 0px 0px 5px 0px rgba(199, 199, 199, 0.50), 0px 1px 4px 0px rgba(144, 164, 140, 0.10);

`;

const Body3 = styled.div`
display: flex;
flex-direction: column;

width: 360px;
height: 126px;
flex-shrink: 0;
border-radius: 1.25rem;
background: #FFF;

/* blurbox */
box-shadow: 0px 0px 5px 0px rgba(199, 199, 199, 0.50), 0px 1px 40px 0px rgba(144, 164, 140, 0.10);
`;

const CustomSpacer = styled.div`
height: ${props => props.height};
`;