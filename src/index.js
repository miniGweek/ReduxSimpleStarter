import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyDEdqtkHKZe5gSsY7R_KpTjHgigk26EzDc';



class App extends Component{
    constructor(props){
        super(props);
        this.state = { videos : [] };

        YTSearch({key : API_KEY, term : 'surfboards'},
            ( videos ) => {this.setState({ videos })});
    };

    render(){
        return (
            <div><SearchBar /> No.of videos : { this.state.videos.length}</div>
        );
    }
}

ReactDOM.render(<App/>,document.querySelector('.container'));