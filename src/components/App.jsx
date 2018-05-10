class App extends React.Component {
  constructor(props) {
    super(props);

    var originalVideo = {
      title: exampleVideoData[0].snippet.title,
      description: exampleVideoData[0].snippet.description,
      id: exampleVideoData[0].id.videoId
    }

    this.state = {
      videoSelected: originalVideo,
      videosLoaded: exampleVideoData
    }
  }

  updateVideoSelected(video) {
    this.setState({
      videoSelected: video
    });
  }

  updateVideosAfterFetch(object) {
    this.setState({
      videosLoaded: object.items
    })
  }

  componentDidMount() {
    console.log("compDidMount");
    this.onSearchClick('muffin');
  }

  onSearchClick(query) {
    var options = {
      q: query,
      max: 5,
      key: window.YOUTUBE_API_KEY,
      part: 'snippet',
      type: 'video'
    }
    console.log("START SEARCHING");
    searchYouTube(options, this.updateVideosAfterFetch.bind(this));
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search search={this.onSearchClick.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.videoSelected}/>
          </div>
          <div className="col-md-5">
            <VideoList update={this.updateVideoSelected.bind(this)} videos={this.state.videosLoaded}/>
          </div>
        </div>
      </div>
    );
  }

}

//
// var App = () => {
//
//   var vid = exampleVideoData[0];
//   console.log(vid);
//
//   return (
//     <div>
//       <nav className="navbar">
//         <div className="col-md-6 offset-md-3">
//           <Search />
//         </div>
//       </nav>
//       <div className="row">
//         <div className="col-md-7">
//           <VideoPlayer video={exampleVideoData[0]}/>
//         </div>
//         <div className="col-md-5">
//           <VideoList videos={exampleVideoData}/>
//         </div>
//       </div>
//     </div>
//   )
//
// }


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
