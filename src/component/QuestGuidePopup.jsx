import { useEffect, useContext, useState } from 'react';
import styled from 'styled-components';

import { QuestContext } from '../screens/questScreen/QuestMainScreen';

const QuestGuidePopup = () => {
    const { typeOfGuideQuest, setTypeOfGuideQuest } = useContext(QuestContext);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [questGuideTitle, setQuestGuideTitle] = useState('');
    const [questGuideContent, setQuestGuideContent] = useState('');
    const [questGuidePhoto, setQuestGuidePhoto] = useState([]);
    const [questGuidePhotoTag, setQuestGuidePhotoTag] = useState([]);

    useEffect(() => {
        // const response = fetch(typeOfGuideQuest); //! api 연결 필요
        const response = {
            guideTitle: '퀘스트 가이드',
            guideContent: '퀘스트를 클리어하면 포인트를 획득할 수 있어요! 포인트로 다양한 혜택을 받아보세요.',
            guidePhoto: ['../assets/icons/questIcon/bicycle.svg', '../assets/icons/questIcon/bicycle.svg'],
            guidePhotoTag: ['자전거 타기', '자전거 타기']
        };
        setQuestGuideTitle(response.guideTitle);
        setQuestGuideContent(response.guideContent);
        setQuestGuidePhoto(response.guidePhoto); //? 순서 보장 되나?
        setQuestGuidePhotoTag(response.guidePhotoTag);
    }, []);

    return (
        <div style={{
            position: 'fixed',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: '100%',
            background: 'rgba(83, 102, 56, 0.60)',
            // color: 'black',
            zIndex: 1000
        }} className='popup'
            onClick={() => {
                setTypeOfGuideQuest(null);
            }}
         >
        <ContentBox>
            <QuestGuideTitle>{questGuideTitle}</QuestGuideTitle>
            <QuestGuideContent>{questGuideContent}</QuestGuideContent>
            <div height='2rem'></div>
            <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '1.56rem'
                    }}>
            {
                questGuidePhoto.map((photo, index) => {
                    return (
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '0.31rem'
                        }}>
                        <QuestGuidePhotoBox key={index} imgurl={photo} />
                        <QuestPhotoTag>{questGuidePhotoTag[index]}</QuestPhotoTag>
                    </div>
                    )
                })
            }
            
            </div>
            <SubmitButton>
                <SubmitButtonText>사진 업로드하기</SubmitButtonText>
            </SubmitButton>
        </ContentBox>
        </div>
    );
}

export default QuestGuidePopup;



const ContentBox = styled.div`
display: flex;
flex-direction: column;
gap: 1.5rem;

width: 22.625rem;
flex-shrink: 0;

border-radius: 1.25rem;
background: linear-gradient(180deg, #FFF 0%, #EFF8CB 100%);

padding: 1.5rem;
box-sizing: border-box;
`;

const QuestGuideTitle = styled.text`
color: var(--black, #101210);

/* 20pt */
font-family: AppleSDGothicNeoB;
font-size: 1.25rem;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.025rem;
`;

const QuestGuideContent = styled.text`
color: var(--Schemes-Scrim, #000);

/* 15 */
font-family: AppleSDGothicNeoM;
font-size: 1.06875rem;
font-style: normal;
font-weight: 400;
line-height: 1.6875rem; /* 157.895% */
letter-spacing: -0.02138rem;
`;

const QuestPhotoTag = styled.text`
color: #565A4D;

/* 12B */
font-family: AppleSDGothicNeoB;
font-size: 0.855rem;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.01713rem;
`;

const QuestGuidePhotoBox = styled.div`
width: 8.0625rem;
height: 8.0625rem;
transform: rotate(90deg);
flex-shrink: 0;

border-radius: 1.25rem;
background: url(${props => props.imgurl ? props.imgurl : null}) lightgray -8.733px -23.839px / 118.113% 118.113% no-repeat;
`;

const SubmitButton = styled.button`
width: 19.6875rem;
height: 3.4375rem;
flex-shrink: 0;

border-radius: 1.25rem;
background: var(--green3, #8DD40E);
`;

const SubmitButtonText = styled.text`
color: var(--white, #FFF);
font-family: AppleSDGothicNeoEB;
font-size: 1.06875rem;
font-style: normal;
font-weight: 400;
line-height: 1.6875rem; /* 157.895% */
letter-spacing: -0.02138rem;
`;