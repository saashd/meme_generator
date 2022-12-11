import React, {useState} from "react";
import {useLocation} from "react-router-dom"
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import InputsForm from "../layouts/InputsForm";
import Button from "@mui/material/Button";
import {createMeme} from "../services/api";

const fonts = [
    {
        value: 'impact',
        label: 'impact',
    },
    {
        value: 'arial',
        label: 'arial',
    },
];

function MemePage() {
    const location = useLocation();
    const meme = location.state.meme;
    const [generatedMeme, setGeneratedMeme] = useState("");
    const [font, setFont] = useState("impact");
    let formData = new FormData();
    formData.append("template_id", meme.id);
    formData.append("username", "YOUR_USER_NAME");
    formData.append("password", "YOUR_PASSWORD");

    const changeForm = (key) => (event) => {
        if (formData.has(key)) {
            formData.set(key, event.target.value);
        } else {

            formData.append(key, event.target.value);
        }
    };

    const generateMeme = () => {
        createMeme(formData).then(r => {
                if (r.success === true) {
                    setGeneratedMeme(r.data.url);
                    console.log(r.data.url)

                } else {
                    console.log(r.error_message)
                }
            }
        ).catch(e => console.log(e));

    };

    return (
        <div className="content" style={{right: 0, left: 0, margin: "auto"}}>

            <Grid container
                  direction="row"
                  alignItems="center"
                  rowSpacing={1}
                  justify="center">
                <Grid item xs={12} align="center">
                    <Typography variant={"h4"}>{meme.name}</Typography>
                </Grid>
                <Grid item xs={6} style={{padding: "2%"}} align="center">

                    <img height={350} src={meme.url} alt={meme.name}/>
                </Grid>
                <Grid item xs={4} style={{padding: "2%"}} align="center">
                    <TextField
                        style={{width: "110px"}}
                        select
                        key="font"
                        id="font"
                        label="Select Font"
                        type="text"
                        value={font}
                        onChange={changeForm('font')}
                    >
                        {fonts.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>

                    <InputsForm numOfFields={meme.box_count} changeForm={changeForm}/>
                    <Button onClick={generateMeme}>Generate</Button>

                </Grid>
            </Grid>
        </div>
    )

}

export default MemePage;