var searchYouTube = (options, callback) => {
  var url = 'https://www.googleapis.com/youtube/v3/search';
  $.ajax({
    url: url,
    type: 'GET',
    data: {key: options.key,
      q: options.query,
      type: 'video',
      maxResults: options.max,
      videoEmbeddable: true,
      part: 'snippet'
    },
    contentType: 'application/json',
    success: function(data) {
      callback(data.items);
    },
    error: function(data) {
      console.log('there was an issue getting this ', data);
    }
  });
};
// A function to be called if the request succeeds. The function gets passed three arguments:

export default searchYouTube;