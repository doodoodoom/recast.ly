// console.log(exampleVideoData); 
// console.log(exampleVideoData[0].snippet.title);  // title for first video
// console.log(exampleVideoData[0].snippet.thumbnails.default.url);  // thumbnail url
// console.log(exampleVideoData[1].snippet.title);  // title for second video

// // In the ES6 spec, files are "modules" and do not share a top-level scope.
// // `var` declarations will only exist globally where explicitly defined.
// export default VideoList;
import exampleVideoData from '/src/data/exampleVideoData.js';
// console.log(exampleVideoData);
import VideoListEntry from './VideoListEntry.js';


var VideoList = (props) => (
  <div className="video-list">
    {props.videos.map(video =>
      <VideoListEntry onEntryClick={props.onEntryClick} video={video}/>
    )}
  </div>
);

// ReactDOM.render(
//   // new instance,
//   <VideoList videos={exampleVideoData}/>, document.getElementById('app')
//   // target

// );

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;

// {console.log(props.videos[0].snippet.title)}
//      {console.log(props.videos)}