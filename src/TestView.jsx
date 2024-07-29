
// import React from "react";
// import Webcam from "react-webcam";

// const videoConstraints = {
//   // facingMode: 'user'
//   facingMode: { exact: 'environment' }
// };

// const TestView = () => {
//     return (
      
//       <Webcam
//         audio={false}
//         height={720}
//         width={300}
//         videoConstraints={videoConstraints}
//       />
//     );
// };

// export default TestView;

// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import Webcam from 'react-webcam';

// const TestView = () => {
//   const [deviceId, setDeviceId] = useState('');
//   const webcamRef = useRef(null);

//   useEffect(() => {
//     const getDevices = async () => {
//       const devices = await navigator.mediaDevices.enumerateDevices();
//       const videoDevices = devices.filter(device => device.kind === 'videoinput');
//       const backCamera = videoDevices.find(device => device.label.toLowerCase().includes('back')) || videoDevices[0];
//       setDeviceId(backCamera.deviceId);
//     };
//     getDevices();
//   }, []);

//   const videoConstraints = {
//     deviceId: deviceId ? { exact: deviceId } : undefined,
//   };

//   const capture = useCallback(() => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     console.log(imageSrc); // 캡처된 이미지를 로그로 출력하거나 다른 방식으로 사용 가능
//   }, [webcamRef]);

//   return (
//     <div>
//       <h1>React Webcam with Back Camera</h1>
//       {deviceId && (
//         <Webcam
//           audio={false}
//           height={200}
//           ref={webcamRef}
//           screenshotFormat="image/jpeg"
//           width={300}
//           videoConstraints={videoConstraints}
//         />
//       )}
//       <button onClick={capture}>Capture photo</button>
//     </div>
//   );
// };

// export default TestView;
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Webcam from 'react-webcam';

const App = () => {
  const [deviceId, setDeviceId] = useState('');
  const webcamRef = useRef(null);

  useEffect(() => {
    const getDevices = async () => {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const videoDevices = devices.filter(device => device.kind === 'videoinput');
      console.log('Video Devices: ', videoDevices);
      const backCamera = videoDevices.find(device => device.label.toLowerCase().includes('back')) || videoDevices[0];
      console.log('Selected Device: ', backCamera);
      setDeviceId(backCamera.deviceId);
    };
    getDevices();
  }, []);

  const videoConstraints = {
    deviceId: deviceId ? { exact: deviceId } : undefined,
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc); // 캡처된 이미지를 로그로 출력하거나 다른 방식으로 사용 가능
  }, [webcamRef]);

  return (
    <div>
      <h1>React Webcam with Back Camera</h1>
      {deviceId && (
        <Webcam
          audio={false}
          height={400}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={300}
          videoConstraints={videoConstraints}
        />
      )}
      <button onClick={capture}>Capture photo</button>
    </div>
  );
};

export default App;
