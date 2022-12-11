import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import React from "react";
import FileSaver from "file-saver";

function DownloadMeme({handleClose, url, open}) {
    const saveManual = () => {
        FileSaver.saveAs(url, "meme.jpg");
    };
    return (

        <Dialog onClose={handleClose} open={open}>
            <DialogTitle align="center">Generated Meme</DialogTitle>
            <img src={url} height={350}/>
            <DialogActions style={{alignSelf:"center"}} >
                <Button variant="outlined" color="secondary" onClick={saveManual}>Download Meme</Button>
            </DialogActions>
        </Dialog>
    );

}

export default DownloadMeme;