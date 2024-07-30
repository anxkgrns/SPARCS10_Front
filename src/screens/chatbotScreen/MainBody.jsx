import { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {ChatInputField, QuestionButton, ChatBotHeader, CustomSpacer, ChatCloudContainer, EwooChatStyle, MainEwoo} from './util.jsx';
import { MyContext } from './ChatBotMainScreen.jsx';



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
          <ChatInputField isActive={false} style={{
            position: 'fixed',
          }}/>
          </div>
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
