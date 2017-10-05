import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/videoList/videoList';
import VideoDetail from './components/videoDetails';
import _ from 'lodash';
const API_KEY = 'AIzaSyBholLPbUZ_KhNSXqRCGvEFQr5m14ymuZo';

//create component and component create html
// const App = function () {
//     return ( 
//         <div>
//             <SearchBar />
//         </div>
//     );
// };

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            videos: [], 
            selectedVideo: null 
        };
        this.videoSearch('travel')
    };

    videoSearch(term){
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            })
        });
    }
    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
        return(
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    videos={this.state.videos} />
            </div>
        );
    };
};

//Take this component's html and put it on the page (in dom)

ReactDOM.render(<App></App>, document.querySelector('.container'));