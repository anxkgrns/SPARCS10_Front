import { IconButton } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React from "react";
import './Header.css';

export default function Header() {
    return (
        <header className = "black-nav">
            <IconButton size= "small">
                <ArrowBackIcon color = "action" fontSize="small"/>
            </IconButton>

            <div>해더</div>
        </header>
    )
}