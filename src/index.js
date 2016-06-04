import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from "./components/search_bar";

const API_KEY = "AIzaSyD5IhvgM1SZ9iMr9arWOYIU35gSORLO3-U"
// create a new component; it should produce HTML
// const App = function() {
//   return <div>Hello World</div>;
// }

// This code here is the same as the commented code above.

YTSearch({key:API_KEY, term:"50th law of power"}, function(data){
  console.log(data);
});

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// render generated HTML , and puts it into the DOM
// aka "Show it on the page"
ReactDOM.render(<App />, document.querySelector('.container'));
