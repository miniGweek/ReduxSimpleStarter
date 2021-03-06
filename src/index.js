import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyDEdqtkHKZe5gSsY7R_KpTjHgigk26EzDc';

class App extends Component{
    constructor(props){
        super(props);
        this.state = { videos : [] ,
                       selectedVideo : null};
    };

    render(){
        const videoSearch = _.debounce((term) =>{ this.videoSearch(term)},300);
        return (
            <div>
                <SearchBar onSearchTermChanged = {videoSearch }/>
                <VideoDetail video = {this.state.selectedVideo} />
                <VideoList onVideoSelected = { (selectedVideo) => { this.setState({selectedVideo})}}
                            videos = {this.state.videos}/>
            </div>
        );
    }

        videoSearch(term){
         YTSearch({key : API_KEY, term : term},
            ( videos ) => {
                this.setState({ 
                    videos : videos ,
                    selectedVideo : videos[0]
                })});
    }
}

ReactDOM.render(<App/>,document.querySelector('.container'));