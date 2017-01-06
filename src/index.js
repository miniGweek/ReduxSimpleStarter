import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDEdqtkHKZe5gSsY7R_KpTjHgigk26EzDc';

const App = () => {
    return (
        <div>
        <SearchBar />
        </div>);
}


ReactDOM.render(<App/>,document.querySelector('.container'));