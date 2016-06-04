// import React from 'react';
//
// this is an example of a functional component
//
// const SearchBar = () => {
//   return <input />;
// };
//
// export default SearchBar;

// -Below is an example of a class based component-

import React, { Component } from 'react';

// class SearchBar extends Component {
  // Whenever I create a class base component
  // I need to remember to create a 'render' function
  // and return some JSX
//   render() {
//     return <input onChange={ this.onInputChange }/>
//   }
//
//   onInputChange(event){
//     console.log(event.target.value);
//   }
// }

// More concise version of the previous code
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: "joker"};
  }

  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({term: event.target.value})} />
          {this.state.term}
      </div>
    );
  }
}

export default SearchBar;
