import { useContext } from 'react';
import styled from 'styled-components';
import {ChatInputField, QuestionButton, ChatBotHeader, CustomSpacer, QuestionButtonFlexer, QuestionButtonContainer, ChatCloudContainer, EwooChatStyle, MainEwoo} from './util.jsx';
import { MyContext } from './ChatBotBaseScreen.jsx';



const MainBody = () => {
  
const {page, setPage} = useContext(MyContext);

  const hello1 = "안녕하세요, AI 환경 지킴이";
  const name = "이우";
  const hello2 = "에요. \n무엇을 도와드릴까요?";

  return (
    <body>
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '77vh',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <MainEwoo/>
          <ChatCloudContainer>
            <EwooChatBox>
              <EwooChatStyle>
                {hello1}
                <EwooName> {name}</EwooName>
                {hello2}
              </EwooChatStyle>
            </EwooChatBox>
            </ChatCloudContainer>
          </div>
          <QuestionButtonFlexer style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            gap: '0.69rem',
          }}>
            <QuestionButtonContainer/>
            <ChatInputField isActive={false.toString()}/>
            <CustomSpacer height="0.66rem"/>
          </QuestionButtonFlexer>
        </div>
      </body>
    )
}

export default MainBody;

const EwooChatBox = styled.div`
display: flex;
width: 15.3125rem;
height: 2.82256rem;
flex-shrink: 0;

flex-direction: column;
margin-bottom: 1rem;
`;

const EwooName = styled.span`
color: var(--black, #42650F);
`;
