import React from "react";

class SearchBar extends React.Component {
  state = { myInput: "" };

  onInputChange = (event) => {
    this.setState({ myInput: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    //callback from parent component
    this.props.onFormSubmit(this.state.myInput);
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.myInput}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
