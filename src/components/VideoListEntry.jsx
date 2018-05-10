class VideoListEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      select: false
    };
  }

  onTitleClick() {
    this.props.update(this.props.video)
  }

  render() {

    return (
      <div className="video-list-entry media">
        <div className="media-left media-middle">
          <img className="media-object" src={this.props.video.img} alt="" />
        </div>
        <div className="media-body">
          <div className="video-list-entry-title" onClick={this.onTitleClick.bind(this)}>{this.props.video.title}</div>
          <div className="video-list-entry-detail">{this.props.video.description}</div>
        </div>
      </div>
    );
  }
}


// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoListEntry = VideoListEntry;
