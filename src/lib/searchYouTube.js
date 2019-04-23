import YOUTUBE_API_KEY from '../config/youtube.js';

var searchYouTube = (options, callback) => {
  let str = options;
  str.replace(' ', '+');

  $.get(`https://www.googleapis.com/youtube/v3/search?part=snippet
    &q=${str}
    &type=video
    &key=${ YOUTUBE_API_KEY }`, null, callback || ((test)=>{ console.log(test, 'hello from the other side'); }));
};

export default searchYouTube;