class VideoList extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="video-list">
        {this.props.videos.map(item =>
          <VideoListEntry update={this.props.update} key={item.id.videoId} video={{id: item.id.videoId, img: item.snippet.thumbnails.default.url, title: item.snippet.title, description: item.snippet.description}} />
        )}
      </div>
    );
  }

};


// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;
