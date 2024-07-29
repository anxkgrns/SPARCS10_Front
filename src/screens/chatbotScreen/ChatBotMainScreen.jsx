import { useState } from 'react';
import styled from 'styled-components';
import DrawerIcon from '../../assets/icons/custom_drawer.svg?react';
import {EwooImage} from './ChatBotMapAnswerScreen';
import {ChatInputField} from './util.jsx';

const ChatBotMainScreen = () => {
  // const [messages, setMessages] = useState([]);
  // const [inputText, setInputText] = useState('');

  const hello1 = "안녕하세요, AI 환경 지킴이 ";
  const name = "이우";
  const hello2 = "에요. \n무엇을 도와드릴까요?";

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'start',
      alignItems: 'center',
    }}>
    <HeaderBox>
      <HeaderText>
        AI 챗봇과의 대화
      </HeaderText>
      <Drawer>
        <DrawerIcon />
      </Drawer>
    </HeaderBox>
    <CustomSpacer height="2.31rem" /> {/* 나중에 수정 필요 */}
    <MainEWContainer>
      <EwooImage src="/largeEwoo.png"/>
    </MainEWContainer>
        <ChatCloudContainer className="chatcloudcontainer">
        <EwooChatBox>
          <EwooChat>
            {hello1}
            <EwooName>
              {name}
            </EwooName>
            {hello2}
          </EwooChat>
        </EwooChatBox>
        </ChatCloudContainer>
        <ChatInputField/>
    </div>
  );
};

export default ChatBotMainScreen;

// export default function ChatBotMainScreen() {

//     const [messages, setMessages] = useState([]);
//   const [inputText, setInputText] = useState('');

//   const handleInputChange = (e) => {
//     setInputText(e.target.value);
//   };

//   const handleSend = () => {
//     if (inputText.trim()) {
//       setMessages([...messages, inputText]);
//       setInputText('');
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       handleSend();
//     }
//   };

//   return (
//     <div className="App">
//       <div className="chat-window">
//         <div className="messages">
//           {messages.map((msg, index) => (
//             <div key={index} className="message">
//               {msg}
//             </div>
//           ))}
//         </div>
//         <div className="input-area">
//           <input
//             type="text"
//             value={inputText}
//             onChange={handleInputChange}
//             onKeyPress={handleKeyPress}
//             placeholder="챗봇과 대화해보세요!"
//           />
//           <button onClick={handleSend}>Send</button>
//         </div>
//       </div>
//     </div>
//   );
// }

const HeaderBox = styled.div`
width: 25.75rem;
height: 3.9375rem;
flex-shrink: 0;

display: flex;
align-items: center;
justify-content: space-between;

background: #FFF;
box-shadow: 0rem 0.125rem 0.25rem 0px rgba(0, 0, 0, 0.2), 0rem 0.125rem 0.25rem 0px rgba(0, 0, 0, 0.1);
`;

const HeaderText = styled.text`

padding-left: 1.56rem;

width: 9.1875rem;
height: 1.9375rem;
flex-shrink: 0;

color: var(--black, #101210);
font-family: AppleSDGothicNeoB;
font-size: 1.25rem;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.025rem;
`;

const Drawer = styled.div`
width: 1.26563rem;
height: 0.84375rem;
flex-shrink: 0;

padding-right: 1.31rem;

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

const EwooChatBox = styled.div`
display: flex;
width: 15.3125rem;
height: 2.82256rem;
flex-shrink: 0;

flex-direction: column;
margin-bottom: 1.21rem;
`;

const EwooChat = styled.text`
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

const EwooName = styled.span`
color: var(--black, #42650F);
`;


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