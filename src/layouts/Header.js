import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import {useNavigate} from 'react-router-dom';
import "../components/style.css"
import IconButton from "@mui/material/IconButton";

import Typography from "@mui/material/Typography";

const Footer = () => {
    const navigate = useNavigate();
    const navigateHome = () => {
        navigate('/');
    };
    return <header>
        <div>
            <IconButton aria-label="home" onClick={navigateHome}
                        style={{position: "absolute", top: "5px", left: "50px"}}>
                <HomeIcon style={{color: "white"}}/>
            </IconButton>
            <Typography variant="h6" color="white" align="center">
                Meme Generator
            </Typography>

        </div>

    </header>
};

export default Footer;