import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from "@mui/material/IconButton";
import "../components/style.css"

const Footer = () => {
    return <footer >
        <IconButton style={{color: "white"}}
                    onClick={() => window.open('https://www.linkedin.com/in/alex-druzina', '_blank')}>
            <LinkedInIcon style={{color: "whnpm install @mui/material @emotion/react @emotion/stylednpm install @mui/material @emotion/react @emotion/styledite"}}/>
        </IconButton>
        <IconButton style={{color: "white"}}
                    onClick={() => window.open('https://github.com/saashd', '_blank')}>
            <GitHubIcon/>
        </IconButton>
    </footer>;
};

export default Footer;