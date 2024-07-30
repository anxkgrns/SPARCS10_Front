import { useState } from 'react';
import styled from 'styled-components';
import {EwooImage} from './ChatBotMapAnswerScreen';
import {ChatInputField, QuestionButton, ChatBotHeader} from './util.jsx';

const ChatBotMainScreen = () => {
  // const [messages, setMessages] = useState([]);
  // const [inputText, setInputText] = useState('');

  const hello1 = "안녕하세요, AI 환경 지킴이";
  const name = "이우";
  const hello2 = "에요. \n무엇을 도와드릴까요?";

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'start',
      alignItems: 'center',
    }}>
    <ChatBotHeader />
    <CustomSpacer height="2.31rem" /> {/* 나중에 수정 필요 */}
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
        <MainEWContainer><EwooImage src="/largeEwoo.png"/> </MainEWContainer>
          <ChatCloudContainer>
            <EwooChatBox>
              <EwooChat>
                {hello1}
                <EwooName> {name}</EwooName>
                {hello2}
              </EwooChat>
            </EwooChatBox>
            </ChatCloudContainer>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            gap: '0.69rem',
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '0.5rem'
            }}>
            <QuestionButton width='9.06rem' text='오늘의 환경 상식' />
            <QuestionButton width='5.75rem' text='문의 사항' />
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '0.5rem'
            }}>
              <QuestionButton width='10.94rem' text='가까운 쓰레기통 위치' />
              <QuestionButton width='7.88rem' text='분리수거 방식' />
            </div>
          <ChatInputField isActive={false} style={{
            position: 'fixed',
          }}/>
          </div>
          </div>
          </body>
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
margin-bottom: 1rem;
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