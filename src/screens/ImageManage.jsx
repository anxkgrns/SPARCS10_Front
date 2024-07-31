import { useConresponse, useState, useEffect,useRef } from 'react';
import styled from 'styled-components';

import { GetImage } from '../requests/ImagesManage.js';


const Image = ({x}) => { // recycle, response 분리하기.
    // const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();


    const [fields, setfields] = useState([]);

    const items = x.split(',');

    const [Success, setSuccess] = useState(false);

    const type = [1,2,3];

    const SubString = ['개인컵할인', '컵 할인', '텀블러할인', '텀블러 할인', '컵할인' ];
    const SubString2 = [26];
    const SubString3 = ['역'];

    const containsSubstring = (array, substrings) => {
        // 특정 문자열들(substrings)을 포함하는 요소가 하나라도 있으면 true 반환
        return array.some(item => 
          substrings.some(substring => item.includes(substring))
        );
    };

    // console.log('after',items[1]);
    // const idea = await GetImage(items[1]);
    // console.log("idea");


    useEffect(() => {
        const fetchresponse = async () => {
            try {
                setLoading(true);
                const response = await GetImage(items[1]);
                const jsonResponse = JSON.parse(JSON.stringify(response));
                const text = jsonResponse.images[0].fields;
                setfields(text.map(items => items.inferText));
                console.log("fields!: ", fields);

            } catch (error) {
                setError('Failed to fetch green idea');
                console.error('Failed to fetch green idea:', error);
            } finally {
                setLoading(false);
            }

            console.log("error: ", error);
            console.log("loading: ", loading);
            };
        
        fetchresponse();

        if(fields.length > 0){
            console.log("fields: ", fields);
            const result = containsSubstring(fields, SubString2);
            console.log("result: ", result);
            setSuccess(result);
            setfields([]);
        }
    }, [fields]);
    // setResponse(GetImage(items[1]));
    // if(response !== ''){
    // const jsonResponse = JSON.parse(JSON.stringify(response));
    // const text = jsonResponse.images[0].fields;
    // const fields = text.map(items => items.inferText);
    // console.log("fields: ", fields);
    // }


    // console.log("response: ", response);

    

    return (
    <div>
        <h1>Infer responses</h1>
        <ul>
          
          {/* <extractresponses fields={response} /> */}
        </ul>
      </div>
    )
}

export default Image;