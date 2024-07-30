import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';
import Meatball from '../../assets/icons/custom_meatball.svg?react';
import { useState, useContext } from 'react';
import { MyContext } from './ChatBotBaseScreen';

const InputField = styled.div`
    width: 22.625rem;
    height: 3.1875rem;
    flex-shrink: 0;

    border-radius: 1.5625rem;
    background: #FFFFFF;
    box-shadow: 0px 0px 5px 0px rgba(199, 199, 199, 0.50), 0px 1px 4px 0px rgba(144, 164, 140, 0.10);

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const ChatInputField = ({isActive, focusFunction, sendFunction}) => {
    const [inputText, setInputText] = useState('');
    const [inputHeight, setInputHeight] = useState(3.1875);
    focusFunction = focusFunction ? focusFunction : () => {};

    return (
        <div>
            <InputField style={{
                height: inputHeight,
                paddingTop: '1rem',
                paddingBottom: '1rem',
            }}>
                <TextareaAutosize type="text"
                maxRows={3}
                onHeightChange={(height, instance) => {
                    setInputHeight(height);
                }}
                onInput={(e) => {
                    setInputText(e.target.value);
                }}
                onFocus={focusFunction}
                disabled={!isActive}
                placeholder={isActive ? '' : '채팅을 입력할 수 없습니다.'}
                style={{
                    width: '22.625rem',
                    height: '1.5rem',
                    background: '#FFFFFF',
                    boxShadow: '0 0 5 0 rgba(199, 199, 199, 0.50), 0 1 4 0 rgba(144, 164, 140, 0.10)',
                    marginLeft: '1.06rem',
                    marginRight: '0.63rem',
                    fontSize: '1.06875rem',
                    fontFamily: 'AppleSDGothicNeoR',
                    color: '#777',
                    wrap: 'on',
                    border: 'none',
                    outline: 'none',
                }}  />
                <SendButtonContainer
                    style={{cursor: 'pointer'}}
                    active={isActive}
                    onClick={() => {
                        sendFunction();
                    }}
                />
            </InputField>
        </div>
    );
}

const QuestionButton = ({ width, text, activated, onClickFuntion }) => {
    const  isClicked = activated ? activated : false;
    var initialTextColor = isClicked ? '#FFFFFF' : '#8DD40E';
    const [clicked, setClicked] = useState(isClicked);
    const [textColor, setTextColor] = useState(initialTextColor);

    return (
        <QuestionButtonStyle
            width={width}
            clicked={clicked}
            onClick={() => {
                setClicked(!clicked);
                setTextColor(!clicked ? '#FFFFFF' : '#8DD40E');
                onClickFuntion();
            }}>
            <QuestionButtonText color={textColor}>{text}</QuestionButtonText>
        </QuestionButtonStyle>
    );
}

const QuestionButtonFlexer = styled.div`
display: flex;
flex-direction: column;
align-items: start;
gap: 0.69rem;
`;

const QuestionButtonContainer = () => {
    const {page, setPage} = useContext(MyContext);
    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '0.5rem'
            }}>
            <QuestionButton width='9.06rem' text='오늘의 환경 상식' onClickFuntion={()=>setPage("환경 상식")} />
            <QuestionButton width='5.75rem' text='문의 사항' onClickFuntion={()=>setPage("문의 사항")} />
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '0.5rem'
            }}>
                <QuestionButton width='10.94rem' text='가까운 쓰레기통 위치' onClickFuntion={()=>setPage("쓰레기통")}/>
                <QuestionButton width='7.88rem' text='분리수거 방법' onClickFuntion={()=>setPage("분리수거")} />
            </div>
        </>
    )
}
const ChatBotHeader = () => {
    return (
    <HeaderBox>
        <HeaderText> 이우랑 대화하기  </HeaderText>
        <MeatballContainer> <Meatball /> </MeatballContainer>
  </HeaderBox>
    )
}

const CustomSpacer = styled.div`
height: ${props => props.height};
`;


const ChatCloudContainer = styled.div`
width: 17.99394rem;
height: 5.85688rem;
flex-shrink: 0;

display: flex;
flex-direction: column;
align-items: center;
justify-content: end;

background: url(/chatCloud.svg) center;
`;

const EwooChatStyle = styled.text`
color: var(--black, #101210);
text-align: center;
font-family: AppleSDGothicNeoM;
font-size: 0.9375rem;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.01875rem;
white-space: pre-wrap;
`;

const MainEwoo = ({image}) => {
    const EwooImageUrl = image ? image : '/largeEwoo.png';
    return (
        <MainEWContainer><EwooImage src={EwooImageUrl}/> </MainEWContainer>
    )
}

const MyChatCloud = ({text}) => {
    return (
        <MyChatCloudContainer>
            <MyChatTextStyle>{text}</MyChatTextStyle>
        </MyChatCloudContainer>
    )
}

const YourChatCloud = ({text}) => {
    
    const [inputHeight, setInputHeight] = useState(3.1875);

    return (
        <YourChatCloudContainer>
            <TextareaAutosize
                type="text"
                disabled={true}
                defaultValue={text}
                onHeightChange={(height, instance) => {
                    setInputHeight(height);
                }}
                style={{
                    display: 'flex',
                    padding: '0.625rem',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '0.625rem',
                    flexShrink: 0,
                    borderRadius: '1.25rem',
                    background: 'var(--white, #FFF)',
                    maxWidth: '12.8125rem',
                    border: 'none',
                    color: '#1E1E1E',
                    fontFamily: 'AppleSDGothicNeoM',
                    fontSize: '1.06875rem',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '1.6875rem',
                    letterSpacing: '-0.02138rem',
                    whiteSpace: 'pre-wrap',
                }}/>
        </YourChatCloudContainer>
    )
}

export { ChatInputField, QuestionButton, ChatBotHeader, CustomSpacer, QuestionButtonFlexer, QuestionButtonContainer, ChatCloudContainer, EwooChatStyle, MainEwoo, MyChatCloud, YourChatCloud  };

const SendButtonContainer = styled.div`
    width: 3.9375rem;
    height: 2.5rem;
    flex-shrink: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-right: 0.44rem;

    border-radius: 1.25rem;
    background: ${props => props.active ? 'url(/send_button_active.svg) center' : 'url(/send_button_inactive.svg) center'};
`;

const QuestionButtonStyle = styled.button`
display: flex;
justify-content: center;
align-items: center;
padding-top: 0.25rem;
padding-bottom: 0.25rem;

width: ${props => props.width ? props.width : '25.75rem'};
height: 2rem;

border-radius: 1.5625rem;
border: ${props => props.clicked=='true' ? 'none' : '1.5px solid #8DD40E'};
background: ${props => props.clicked=='true' ? '#8DD40E' : '#FFFFFF'};
-webkit-tap-highlight-color : transparent;
outline: none;
`;

const QuestionButtonText = styled.text`
color: ${props => props.color ? props.color : '#8DD40E'};
font-family: AppleSDGothicNeoM;
font-size: 1.06875rem;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

const HeaderBox = styled.header`
width: 25.75rem;
height: 3.9375rem;
flex-shrink: 0;

display: flex;
align-items: center;
justify-content: space-between;
`;

const HeaderText = styled.text`
width: 9.1875rem;
flex-shrink: 0;
padding-left: 1.56rem;
padding-top: 0.25rem;

color: var(--black, #101210);
font-family: AppleSDGothicNeoB;
font-size: 1.25rem;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.025rem;
`;

const MeatballContainer = styled.div`
width: 1.26563rem;
height: 0.84375rem;
flex-shrink: 0;

padding-right: 1.56rem;

display: flex;
align-items: center;
justify-content: center;
`;


const MainEWContainer = styled.div`
width: 13.9375rem;
height: 8.8125rem;
flex-shrink: 0;

display: flex;
align-items: center;
justify-content: center;
`;

const EwooImage = styled.img`
width: 13.9375rem;
height: 8.8125rem;
flex-shrink: 0;

align-self: end;
object-fit: contain;
`;

const MyChatCloudContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-shrink: 0;
width: 9.0625rem;
padding: 0.375rem 0.625rem 0.5rem 0.625rem;
gap: 0.625rem;

border-radius: 1.25rem;
background: var(--green3, #8DD40E);
`;

const MyChatTextStyle = styled.text`
color: var(--black, #101210);
text-align: right;

/* 15 */
font-family: AppleSDGothicNeoM;
font-size: 1.06875rem;
font-style: normal;
font-weight: 400;
line-height: 1.6875rem; /* 157.895% */
letter-spacing: -0.02138rem;

white-space: pre-wrap;
`;

const YourChatCloudContainer = styled.div`
display: flex;
max-width: 12.8125rem;
padding: 0.625rem;
justify-content: center;
align-items: center;
gap: 0.625rem;
flex-shrink: 0;
border-radius: 1.25rem;
background: var(--white, #FFF);

/* blurbox */
box-shadow: 0px 0px 5px 0px rgba(199, 199, 199, 0.50), 0px 1px 40px 0px rgba(144, 164, 140, 0.10);
`;