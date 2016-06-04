import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from "./components/search_bar";

const API_KEY = "AIzaSyD5IhvgM1SZ9iMr9arWOYIU35gSORLO3-U"

class App extends Component {
  constructor(props){
    super(props);

    this.state = { videos: [] };

  // YTSearch({key:API_KEY, term:"50th law of power"}, function(videos){
  //   this.setState({videos:videos})
  // });
    YTSearch({key:API_KEY, term:"50th law of power"}, (videos)=>{
      this.setState({videos});
    });
  }

  render(){
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector('.container'));
