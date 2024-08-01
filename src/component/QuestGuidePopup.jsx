import { useEffect, useContext, useState } from 'react';
import styled from 'styled-components';

import { QuestContext } from '../screens/questScreen/QuestMainScreen';
import {getGuideJson} from './QuestGuideData';

import {addSuccessQuest} from '../requests/QuestStateManage';

import MyScreen from '../screens/MyPage.jsx';

import Image from '../screens/ImageManage';

const typeList = [
    "temperature", "bus", "tumbler", 'airconditioner', 'trashcan', 'greenIdea', 'recycle'
]

const QuestGuidePopup = () => {
    const { typeOfGuideQuest, setTypeOfGuideQuest } = useContext(QuestContext); // success 혹은 fail 로 돌아옴!

    const [mounted, setMounted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [questGuideTitle, setQuestGuideTitle] = useState('');
    const [questGuideContent, setQuestGuideContent] = useState('');
    const [questGuidePhoto, setQuestGuidePhoto] = useState([]);
    const [questGuidePhotoTag, setQuestGuidePhotoTag] = useState([]);
    const [uploadImgUrl, setUploadImgUrl] = useState("");
    const [task, setTask] = useState(1);
    const [success, setSuccess] = useState(false);

    const onchangeImageUpload = (e)=> {
        const {files} = e.target;
        const uploadFile = files[0];
        const reader = new FileReader();
        reader.readAsDataURL(uploadFile);
        reader.onloadend = ()=> {
        setUploadImgUrl(reader.result);
        }
        if(typeOfGuideQuest.questionType === "tumbler"){
            setTask(1);
        }
        if(typeOfGuideQuest.questionType === "airconditioner"){
            setTask(2);
        }
        if(typeOfGuideQuest.questionType === "bus"){
            setTask(3);
        }
    }
    const handleImageResult = (isSuccess) => {
        setSuccess(isSuccess);
        if (isSuccess) {
            setTypeOfGuideQuest({
                questType: typeOfGuideQuest.questType,
                status: 'success'
            });
        } else {
            setTypeOfGuideQuest({
                questType: typeOfGuideQuest.questType,
                status: 'fail'
            });
        }
    }

    useEffect(() => {
        if (typeOfGuideQuest.status !== 'success' && typeOfGuideQuest.status !=='fail') {
            console.log(typeOfGuideQuest);
            var response = getGuideJson(typeOfGuideQuest.questType); //! api 연결 필요
            response = JSON.parse(response);
            response = response[0];
            console.log(response);
            setQuestGuideTitle(response.title);
            setQuestGuideContent(response.content);
            
            // Handling the guide_photo array
            const guidePhotos = response.guide_photo.map(photoObj => photoObj.photo);
            const guidePhotoTags = response.guide_photo.map(photoObj => photoObj.tag);
    
            setQuestGuidePhoto(guidePhotos); // This sets an array of photos
            setQuestGuidePhotoTag(guidePhotoTags); // This sets an array of tags
        } else if (typeOfGuideQuest.status === 'success') {
            const fetchSuccessQuest = async () => {
               await addSuccessQuest(typeOfGuideQuest);
            }
            fetchSuccessQuest(typeOfGuideQuest);
        }
        // } else {
        //     setTypeOfGuideQuest(
        //         {
        //             questType: typeOfGuideQuest.questType,
        //             status: 'fail'
        //         }
        //     )
        // }
    }, [typeOfGuideQuest]);

    if (typeOfGuideQuest.status === 'success' ){
        return (<div style={{
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
                setMounted(false);
                setTypeOfGuideQuest({
                    questType: null,
                    status: null
                });
            }}
         >
        <ContentBox>
            <QuestGuideTitle>미션 성공!{'\n'}오늘도 환경을 위해 한 발짝 양보했네요!</QuestGuideTitle>
            <div style={{
                    width: '13.4375rem',
                    height: '8.625rem',
                }} className="CheerEwoo">
                    <img src="/CheerfulEwoo.png" alt="cheerEwoo" />
                </div>
            <SubmitButton onClick >
                <SubmitButtonText>보상 수령하기</SubmitButtonText>
            </SubmitButton>
        </ContentBox>
        </div>)
    } else if (typeOfGuideQuest.status === 'fail'){
        return(<div style={{
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
                setMounted(false);
                setTypeOfGuideQuest({
                    questType: null,
                    status: null
                });
            }}
         >
        <ContentBox>
            <QuestGuideTitle>미션 인증에 실패했어요.{'\n'}다시 한번 도전해주세요.</QuestGuideTitle>
            <div style={{
                    width: '13.4375rem',
                    height: '8.625rem',
                }} className="SadEwoo">
                    <img src="/sadEwoo.png" alt="sadEwoo" />
                </div>
                
            <div height='2rem'></div>
            <SubmitButton
            onClick={() => {
                setMounted(false);
                setTypeOfGuideQuest({
                    questType: typeOfGuideQuest.questType,
                    status: 'pending'
                });
            }}
            >
                <SubmitButtonText>다시 도전하기</SubmitButtonText>
            </SubmitButton>
        </ContentBox>
        </div>
        )
    } else {
    return (
        <div style={{
            position: 'fixed',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: '100%',
            background: 'rgba(83, 102, 56, 0.60)',
            zIndex: 1000
        }} className='popup'
            // onClick={() => { // 배경 터치하면 팝업 닫음.
            //     setMounted(false);
            //     setTypeOfGuideQuest({
            //         questType: null,
            //         status: null
            //     });
            // }}
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
                    <input
                        type="file"
                        accept="image/*"
                        onChange={onchangeImageUpload}
                        id="imageUpload"
                        style={{ display: 'none' }}
                    />
                    <label htmlFor="imageUpload" style={{ display : 'flex'
                    , justifyContent: 'center', alignItems: 'center',
                    flexDirection: 'column',

                    cursor: 'pointer', width: '100%', height: '100%' }}>
                        <SubmitButtonText>이미지 업로드</SubmitButtonText>
                    {uploadImgUrl !== "" && <Image i={task} x={uploadImgUrl} onResult={handleImageResult} />}
                    </label>
                </SubmitButton>
            {}
            {/* <SubmitButtonText>
                success? {success ? 'success' : 'fail'}
            </SubmitButtonText> */}
            {/* {setTypeOfGuideQuest(
                {
                questType: typeOfGuideQuest.questType,
                status: Image(task, uploadImgUrl)
                }
            )} */}
        </ContentBox>
        </div>

    );
}
}

export default QuestGuidePopup;



const ContentBox = styled.div`
display: flex;
flex-direction: column;
justify-content: start;
align-items: center;
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

white-space: pre-wrap;
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
width:17.7625rem;
height: 8.0625rem;
transform: rotate(0deg);
flex-shrink: 0;

border-radius: 1.25rem;
background: url(${props => props.imgurl ? props.imgurl : null}) lightgray -8.733px -23.839px / 118.113% 118.113% no-repeat;
`;

const SubmitButton = styled.div`

display: flex;
justify-content: center;
align-items: center;


width: 19.6875rem;
height: 4.4375rem;
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