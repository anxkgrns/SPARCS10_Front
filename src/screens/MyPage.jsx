// import React, { useState } from 'react';
// import Image from './ImageManage';


// export default function MyScreen({QType}) {
//     const [uploadImgUrl, setUploadImgUrl] = useState("");
//     const [task, setTask] = useState(1);

//     if(QType === "tumbler"){
//         setTask(1);
//     }
//     if(QType === "airconditioner"){
//         setTask(2);
//     }
//     if(QType === "bus"){
//         setTask(3);
//     }

//     const ImageUpload = ()=> {
    
//         const onchangeImageUpload = (e)=> {
//             const {files} = e.target;
//             const uploadFile = files[0];
//             const reader = new FileReader();
//             reader.readAsDataURL(uploadFile);
//             reader.onloadend = ()=> {
//             setUploadImgUrl(reader.result);
//             }
//         }
//         return <>
//         {/* {uploadImgUrl !=="" && <img src = {uploadImgUrl} img = "img"
//             style = {{width: "100%", height: "100%"}}
//         />} */}
//         <input type = "file" accept = "image/*" onChange = {onchangeImageUpload}/>
//         </>
//     }
  
//     return (
//         <div>
//             <h1>My Screen</h1>
//             <input
//                 onChange={(e) => {
//                     setTask(e.target.value);
//                 }}/>
//             <button onClick = {()=> setTask()}>Change</button>
//             {console.log("task: ", task)}
            
//             <ImageUpload/>
//             {uploadImgUrl !== "" &&   <Image i= {task} x={uploadImgUrl}/>}
//         </div>
//     )
// }

import React, { useState, useEffect } from 'react';

export default function ShoppingScreen() {
  return (
    <div>
      <h1>My page</h1>
    </div>
  );
}