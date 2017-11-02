import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  constructor(props) {
    super();
    this.state = {
      userInput: ""
    };
  }

  onInputChange = e => {
    this.setState({
      userInput: e.target.value
    });
  };

  render() {
    return (
      <div>
        <input onChange={this.onInputChange} />
        <button
          onClick={() => {
            this.props.onButtonClick(this.state.userInput);
          }}
        />
      </div>
    );
  }
}

export default SearchBar;
