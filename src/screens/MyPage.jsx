import React, { useState } from 'react';
import Image from './ImageManage';


export default function MyScreen() {
    const [uploadImgUrl, setUploadImgUrl] = useState("");
    const [task, setTask] = useState("1");

    const ImageUpload = ()=> {
    
        const onchangeImageUpload = (e)=> {
        const {files} = e.target;
        const uploadFile = files[0];
        const reader = new FileReader();
        reader.readAsDataURL(uploadFile);
        reader.onloadend = ()=> {
        setUploadImgUrl(reader.result);
        }
    }
        return <>
        {/* {uploadImgUrl !=="" && <img src = {uploadImgUrl} img = "img"
            style = {{width: "100%", height: "100%"}}
        />} */}
        <input type = "file" accept = "image/*" onChange = {onchangeImageUpload}/>
        </>
    }
  
    return (
        <div>
            <h1>My Screen</h1>
            <input
                onChange={(e) => {
                    setTask(e.target.value);
                }}/>
            <button onClick = {()=> setTask()}>Change</button>
            {console.log("task: ", task)}
            
            <ImageUpload/>
            {uploadImgUrl !== "" && <Image i= {task} x={uploadImgUrl}/>}
        </div>
    )
}