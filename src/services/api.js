import axios from 'axios';

const getMemes = async () => {
    try {
        return await axios.get("https://api.imgflip.com/get_memes")
            .then(r => r.data)

    } catch (err) {
        console.log(err)
    }
};

const createMeme = async (data) => {
    try {
        return await axios.post("https://api.imgflip.com/caption_image", data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(r => r.data)
    } catch (err) {
        console.log(err)

    }
};


export {getMemes, createMeme};