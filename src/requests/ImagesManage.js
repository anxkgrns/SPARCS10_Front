import axios from 'axios';


export const GetImage = async (x) => {

const apiUrl = '/imageApi';
const ocrSecret = import.meta.env.VITE_X_OCR_SECRET_APIKEY;

const data = {
    images : [{
        format: 'jpg',
        name: 'demo',
        data: x
    }],
  requestId: 'guide-json-demo',
  version: 'V2',
  timestamp: 0
};

axios.post(apiUrl, data, {
  headers: {
    'X-OCR-SECRET': ocrSecret
  }
})
.then(response => {
  console.log('Success:');
  return response;
})
.catch(error => {
  console.error('Error:', error.response ? error.response.data : error.message);
});


  try {
    const response = await axios.post(apiUrl, data, {
      headers: {
        'X-OCR-SECRET': ocrSecret
      }
    });
    return response.data;
  } catch (error) {
    console.error('Failed to fetch green idea:', error);
    throw error;
  }
}

export default GetImage;