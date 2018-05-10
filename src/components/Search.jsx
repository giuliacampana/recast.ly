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

  render() {
    return (
      <div className="search-bar form-inline">
      <input className="form-control" type="text" onChange={(e)=> this.onSearch(e)} />
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
