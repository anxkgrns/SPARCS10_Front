import styled from 'styled-components'


export default function HomeScreen() {
  const text = "더 나은 \n내일의 우리를 위해"

  const test_text = "texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext"

  function handleClick() {console.log('Viewport width: ' + window.innerWidth);
  console.log('Viewport height: ' + window.innerHeight);
  }
  var gap = "0.63rem";
    
  return (
    <>
      <HeadBox>
        <HeadDetail1 onClick = {handleClick}/>
        <HeadDetail2 onClick = {handleClick}/>
        <HeadDetail3 onClick = {handleClick}/>
      </HeadBox>
    <body>
        <Text1>
          {text}
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
`;

const HeadDetail1 = styled.button`
width: 77px;
height: 24px;
flex-shrink: 0;
border-radius: 25px;
border: 1px solid #F4F4F4;
background: #FFF;
position: absolute;
top : 29px;
left : 310px;
`;

const HeadDetail2 = styled.button`
width: 79px;
height: 24px;
flex-shrink: 0;
border-radius: 25px;
border: 1px solid #F4F4F4;
background: #FFF;
position: absolute;
top : 29px;
left : 214px;
`;

const HeadDetail3 = styled.button`
width: 40px;
height: 40px;
flex-shrink: 0;
border-radius: 25px;
border: 1px solid #F4F4F4;
background: #D9D9D9;;
position: absolute;
top : 21px;
left : 25px;
`;


const Text1 = styled.text`
display: flex;
align-self: start;
margin-top: 1rem;
margin-left: 1.62rem;
margin-bottom: 1.5rem;

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
`;

const Body2= styled.div`
display: flex;
flex-direction: column;

width: 360px;
height: 122px;
flex-shrink: 0;
border-radius: 20px;
background: #FFF;
`;

const Body3 = styled.div`
display: flex;
flex-direction: column;

width: 360px;
height: 126px;
flex-shrink: 0;
border-radius: 20px;
background: #FFF;
`;

const CustomSpacer = styled.div`
height: ${props => props.height};
`;