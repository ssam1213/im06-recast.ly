

class App extends React.Component {
  constructor(props) {    
    super (props);
    this.state = {
      videos: [],
      selectedVideo: null,
      query: ''
    };
    this._clickVideo = this._clickVideo.bind(this);
    this._handleQuery = this._handleQuery.bind(this);
    this._getVideos = this._getVideos.bind(this);
  }

  _handleQuery(e) {
    this.setState({
      query: e.target.value
    });
    console.log('this.query', this.state.query);
    this._getVideos(this.state.query);
  }

  _getVideos(query) {
    
    var options = {
      key: this.props.API_KEY,
      query: query
    };

    this.props.searchYouTube(options, (data) => {
      this.setState({
        videos: data,
        selectedVideo: data[1]
      });
    });
  }

  componentDidMount() {
    this._getVideos(this.state.query);
  }
  
  _clickVideo(index) {
    this.setState({
      selectedVideo: this.state.videos[index]
    });  
  }

  
  render() {
 
    return (
      <div> 
        <Nav onChange={this._handleQuery} />
        <div className="col-md-7" >
          <VideoPlayer video={this.state.selectedVideo}/>
        </div>
        <div className="col-md-5" >
          <VideoList videos={this.state.videos}
            onClick={this._clickVideo}/>
        </div>
      </div>
    );
  }

}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

