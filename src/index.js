// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import searchYouTube from '/src/lib/searchYouTube';
ReactDOM.render(<App searchYouTube={window.searchYouTube} API_KEY={window.YOUTUBE_API_KEY}/>, document.getElementById('app'));

