import { IconButton,Button } from '@mui/material';
import React from 'react';
import RoomIcon from '@mui/icons-material/Room';


export default function ChatBotScreen() {
    return (
        <>
            <div>
                <h1>ChatBot Screen</h1>
            </div>
            <div>  
                <Button variant="contained" 
                    endIcon={<RoomIcon/>}
                    onClick={() => {
                        location.href = "/trashmap";
                    }}
                    >
                    {/* <RoomIcon color="action" fontSize="medium"/>
                        <p style= {{fontSize: "15px"}}>
                            쓰레기통 위치 찾기
                        </p> */}
                        
                </Button>
            </div>
        </>

    )
}