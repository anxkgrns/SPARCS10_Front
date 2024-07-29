import { IconButton,Button } from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';
import { useState } from 'react';
import './ChatBot.css';


export default function ChatBotScreen() {

    const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSend = () => {
    if (inputText.trim()) {
      setMessages([...messages, inputText]);
      setInputText('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="App">
      <div className="chat-window">
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index} className="message">
              {msg}
            </div>
          ))}
        </div>
        <div className="input-area">
          <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="챗봇과 대화해보세요!"
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );

    return (
        <>
            <div>
                <h1>ChatBot Screen</h1>
            </div>
            <div>  
                <Button variant="contained" 
                    endIcon={<RoomIcon/>}
                    onClick={() => {
                        location.href = "/trashmap";
                    }}
                    >
                    {/* <RoomIcon color="action" fontSize="medium"/>
                        <p style= {{fontSize: "15px"}}>
                            쓰레기통 위치 찾기
                        </p> */}
                        
                </Button>
            </div>
            <input type="text" placeholder="챗봇과 대화해보세요!">

            </input>
        </>

    )
}