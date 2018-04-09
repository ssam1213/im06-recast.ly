var searchYouTube = ({key, query, max = 5}, callback) => $.ajax({
  type: 'GET',
  url: 'https://www.googleapis.com/youtube/v3/search',
  data: {
    contentType: 'json',
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video'
  }
}).done(({items}) => {
  if (callback) {
    callback(items);
  }
});




window.searchYouTube = searchYouTube;


// 'https://www.googleapis.com/youtube/v3/search?part=snippet&&q=react&key=AIzaSyAUO5WMpDPgwuzG9XpyThYgRpAn4Mc8BAw&maxResults=10';
// const key = options.key || window.YOUTUBE_API_KEY;

// const q = options.query || undefined;

// const max = options.max || 5;
// const baseUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet';
// const url = baseUrl + '&q=' + q + '&maxResults=' + max + '&key=' + key;