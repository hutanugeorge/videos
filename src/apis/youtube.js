import axios from 'axios';

const KEY = 'AIzaSyBp57jRaBr3TigKL-Lhk0boo-T0z8Glv8Q';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResults: 25,
        type: 'video',
        key: KEY
    }
});