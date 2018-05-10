class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    }
  }

  onSearch(e) {
    this.setState({
      text: e.target.value
    });
  }

  handleKeyPress(event) {
    console.log("Key press event detected event.key", event.key);
    if (event.key === 'Enter') {
      this.props.search.call(this, this.state.text);
    }
  }
  render() {
    return (
      <div className="search-bar form-inline">
      <input className="form-control" type="text" onChange={(e)=> this.onSearch(e)} onKeyPress={this.handleKeyPress.bind(this)} />
      <button className="btn hidden-sm-down" onClick={this.props.search.bind(this, this.state.text)}>
      <span className="glyphicon glyphicon-search"></span>
      </button>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
