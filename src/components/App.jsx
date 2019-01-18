// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><h5><em>videoPlayer</em> view goes here</h5></div>
//       </div>
//       <div className="col-md-5">
//         <div><h5><em>videoList</em> view goes here</h5></div>
//       </div>
//     </div>
//   </div>
// );

import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import exampleVideoData from '/src/data/exampleVideoData.js';
import searchYouTube from '/src/lib/searchYouTube.js';

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      currentVideo: exampleVideoData[0],
      listedVideos: exampleVideoData
    };
  }

  //review componentDidMount and getVideos
  componentDidMount() {
    this.getVideos('Overwatch');
  }

  onEntryClick(selectedVideo) {
    this.setState({
      currentVideo: selectedVideo
    });
  }

  getVideos(query) {
    var options = {
      key: this.props.API_KEY,
      query: query
    };

    this.props.searchYouTube(options, (videos) => {
      this.setState({
        videos: videos,
        currentVideo: videos[0]
      });
    });
  }

  render() {
    const { currentVideo, listedVideos } = this.state;

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList onEntryClick={this.onEntryClick.bind(this)} videos={listedVideos}/>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
