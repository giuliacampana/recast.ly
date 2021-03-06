class VideoListEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  onTitleClick() {
    this.props.update(this.props.video)
  }

  render() {
    let {img, title, description} = this.props.video;
    return (
      <div className="video-list-entry media">
        <div className="media-left media-middle">
          <img className="media-object" src={img} alt="" />
        </div>
        <div className="media-body">
          <div className="video-list-entry-title" onClick={this.onTitleClick.bind(this)}>{title}</div>
          <div className="video-list-entry-detail">{description}</div>
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
