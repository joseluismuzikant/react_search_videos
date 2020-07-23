import axios from 'axios';
const KEY='PUT-YOUR-YOUTUBE-KEY-HERE';

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params:{
      part:'snippet',
      type:'video',
      maxResults:5,
      key:KEY
  }
});
