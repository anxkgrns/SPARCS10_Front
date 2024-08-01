// import { useConresponse, useState, useEffect,useRef } from 'react';
// import styled from 'styled-components';

// import { GetImage } from '../requests/ImagesManage.js';


// const Image = ({x}) => { // recycle, response 분리하기.
//     // const [response, setResponse] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState();


//     const [fields, setfields] = useState([]);

//     const items = x.split(',');

//     const [Success, setSuccess] = useState(false);

//     const type = [1,2,3];

//     const SubString = ['개인컵할인', '컵 할인', '텀블러할인', '텀블러 할인', '컵할인' ];
//     const SubString2 = [26];
//     const SubString3 = ['역'];

//     const containsSubstring = (array, substrings) => {
//         // 특정 문자열들(substrings)을 포함하는 요소가 하나라도 있으면 true 반환
//         return array.some(item => 
//           substrings.some(substring => item.includes(substring))
//         );
//     };

//     // console.log('after',items[1]);
//     // const idea = await GetImage(items[1]);
//     // console.log("idea");


//     useEffect(() => {
//         const fetchresponse = async () => {
//             try {
//                 setLoading(true);
//                 const response = await GetImage(items[1]);
//                 const jsonResponse = JSON.parse(JSON.stringify(response));
//                 const text = jsonResponse.images[0].fields;
//                 setfields(text.map(items => items.inferText));
//                 console.log("fields!: ", fields);

//             } catch (error) {
//                 setError('Failed to fetch green idea');
//                 console.error('Failed to fetch green idea:', error);
//             } finally {
//                 setLoading(false);
//             }

//             console.log("error: ", error);
//             console.log("loading: ", loading);
//             };
        
//         fetchresponse();

//         if(fields.length > 0){
//             console.log("fields: ", fields);
//             const result = containsSubstring(fields, SubString2);
//             console.log("result: ", result);
//             setSuccess(result);
//             setfields([]);
//         }
//     }, []);
//     // setResponse(GetImage(items[1]));
//     // if(response !== ''){
//     // const jsonResponse = JSON.parse(JSON.stringify(response));
//     // const text = jsonResponse.images[0].fields;
//     // const fields = text.map(items => items.inferText);
//     // console.log("fields: ", fields);
//     // }


//     // console.log("response: ", response);

    

//     return (
//         <div>
//         {Success ? <div>성공</div> : <div>실패</div>}
//         </div>
//     )
// }

// export default Image;

import React, { useState, useEffect } from 'react';
import { GetImage } from '../requests/ImagesManage.js';
import styled from 'styled-components';

const Image = ({ x,i,onResult }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fields, setFields] = useState([]);

    const SubString1 = ['개인컵할인', '컵 할인', '텀블러할인', '텀블러 할인', '컵할인' ];
    const SubString2 = [26];
    const SubString3 = ['역'];

  // 특정 문자열들이 포함된 요소가 있는지 확인하는 함수
  const containsSubstring = (array, substrings) => {
    return array.some(item => substrings.some(substring => item.includes(substring)));
  };

  const hasValueGreaterThanOrEqualTo26 = (array) => {
    return array.some(item => Number(item) >= 26);
};


  // 이미지에서 텍스트 추출 및 상태 업데이트
  useEffect(() => {
    const fetchResponse = async () => {
      try {
        setLoading(true);

        const items = x.split(',');
        const response = await GetImage(items[1]);
        const text = response.images[0].fields.map(item => item.inferText);
        setFields(text);
      } catch (error) {
        setError('Failed to fetch green idea');
        console.error('Failed to fetch green idea:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchResponse();
  }, [x, onResult]);

  // 필드 데이터가 업데이트될 때 서브 문자열 포함 여부 검사
  useEffect(() => {
    if (fields.length > 0) {
        console.log("i!!!",i);
        if(i === 1){
            console.log("task1");
            const result = containsSubstring(fields, SubString1);
            console.log("fields: ", fields);
            console.log("result: ", result);
            onResult(result);
        }
        else if(i === 2){
            console.log("task2");
            const result = hasValueGreaterThanOrEqualTo26(fields);
            console.log("fields: ", fields);
            console.log("result: ", result);
            onResult(result);
        }
        else if(i === 3){
            console.log("task3");
            const result = containsSubstring(fields, SubString3);
            console.log("fields: ", fields);
            console.log("result: ", result);
            onResult(result);
        }
    }
  }, [fields]);

  if (loading) return <SubmitButtonText>Loading...</SubmitButtonText>;
  if (error) return <SubmitButtonText>{error}</SubmitButtonText>;

  return (
    <>
    </>
  );
};
const SubmitButtonText = styled.text`
color: var(--white, #FFF);
font-family: AppleSDGothicNeoEB;
font-size: 1.06875rem;
font-style: normal;
font-weight: 400;
line-height: 1.6875rem; /* 157.895% */
letter-spacing: -0.02138rem;
`;

export default Image;
