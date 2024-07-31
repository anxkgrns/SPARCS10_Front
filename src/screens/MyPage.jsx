import React, { useState } from 'react';
import Image from './ImageManage';


export default function MyScreen() {
    const [uploadImgUrl, setUploadImgUrl] = useState("");

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
            <ImageUpload/>
            {uploadImgUrl !== "" && <Image x={uploadImgUrl}/>}
        </div>
    )
}