import React from "react";
import TextField from "@mui/material/TextField";

function InputsForm({numOfFields, changeForm}) {
    const fieldsArr = Array.from({length: numOfFields}, (_, index) => index + 1);

    return (
        <div>
            {fieldsArr.map(field => (
                <TextField
                    style={{padding: "2%"}}
                    key={field}
                    id={"text-input-" + field}
                    label={"Enter text #" + field}
                    variant="outlined"
                    fullWidth
                    onInput={changeForm(`boxes[${field-1}][text]`)}
                />
            ))}
        </div>
    );

}

export default InputsForm;