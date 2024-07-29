import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';
import { useState } from 'react';

const InputField = styled.div`
    width: 22.625rem;
    height: 3.1875rem;
    flex-shrink: 0;

    border-radius: 1.5625rem;
    background: #FFFFFF;
    box-shadow: 0 0 5 0 rgba(199, 199, 199, 0.50), 0 1 4 0 rgba(144, 164, 140, 0.10);

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const ChatInputField = () => {
    const [inputText, setInputText] = useState('');
    const [inputHeight, setInputHeight] = useState(3.1875);

    return (
        <div>
            <InputField style={{
                height: inputHeight,
                paddingTop: '0.9rem',
                paddingBottom: '0.9rem',
            }}>
                <TextareaAutosize type="text"
                maxRows={3}
                onHeightChange={(height, instance) => {
                    setInputHeight(height);
                }}
                onInput={(e) => {
                    setInputText(e.target.value);
                }}
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
                    overflow: 'hidden',
                    lineBreak: 'auto',
                    verticalAlign: 'middle',
                    border: 'none',
                    outline: 'none',
                }}  />
                <SendButtonContainer style={{
                    cursor: 'pointer',
                }} />
            </InputField>
        </div>
    );
}

export { ChatInputField };

const SendButtonContainer = styled.div`
    width: 3.9375rem;
    height: 2.5rem;
    flex-shrink: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-right: 0.44rem;

    border-radius: 1.25rem;
    background: url(/sendButton.svg) center;
`;