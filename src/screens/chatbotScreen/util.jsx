import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';
import Meatball from '../../assets/icons/custom_meatball.svg?react';
import { useState } from 'react';

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

const ChatInputField = ({isActive}) => {
    const [inputText, setInputText] = useState('');
    const [inputHeight, setInputHeight] = useState(3.1875);

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
                />
            </InputField>
        </div>
    );
}

const QuestionButton = ({ width, text }) => {
    const [clicked, setClicked] = useState(false);
    const [textColor, setTextColor] = useState('#8DD40E');

    return (
        <QuestionButtonStyle
            width={width}
            clicked={clicked}
            onClick={() => {
                setClicked(!clicked);
                setTextColor(!clicked ? '#FFFFFF' : '#8DD40E');
            }}>
            <QuestionButtonText color={textColor}>{text}</QuestionButtonText>
        </QuestionButtonStyle>
    );
}

const ChatBotHeader = () => {
    return (
    <HeaderBox>
        <HeaderText> 이우랑 대화하기  </HeaderText>
        <MeatballContainer> <Meatball /> </MeatballContainer>
  </HeaderBox>
    )
}

export { ChatInputField, QuestionButton, ChatBotHeader };

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
border: ${props => props.clicked ? 'none' : '1.5px solid #8DD40E'};
background: ${props => props.clicked ? '#8DD40E' : '#FFFFFF'};
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
