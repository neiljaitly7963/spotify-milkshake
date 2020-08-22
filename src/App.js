import React, {Component} from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import './App.css';
import Nav from './components/Nav';
import Front from './components/Front';
import SpotifyWebApi from 'spotify-web-api-js';


const spotifyApi = new SpotifyWebApi();

class App extends Component {

  constructor () {
    super()

    const params = this.getHashParams();
    const token = params.access_token;

    if (token) {
      spotifyApi.setAccessToken(token);
    }

    this.state = {
      loggedIn: token ? true : false,
      nowPlaying: { name: 'Not Checked', albumArt: '' },
      userPlaylist: []
    }
  
  }

  componentDidMount(){
    this.getUserPlaylist();
  }



  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q)
    }
    return hashParams;
  }



  getNowPlaying = () => {
    spotifyApi.getMyCurrentPlaybackState()
      .then((response) => {
        this.setState({
          nowPlaying: { 
              name: response.item.name, 
              albumArt: response.item.album.images[0].url
            }
        }, () => console.log(this.state.nowPlaying));
      })
  }

  getUserPlaylist = () => {
    spotifyApi.getUserPlaylists().then(response => {
      let tempPlaylistArray = response.items;
      console.log(tempPlaylistArray)
      this.setState({userPlaylist: tempPlaylistArray})
    })
  }

  getPlaylistTracks = (id) => {
    spotifyApi.getPlaylistTracks(id).then(response => {
      console.log(response)
    })
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }

  render(){
      return (
        <div className="App">
          {
            this.state.loggedIn ? 
              <div className="layer-one">
                <div className="layer-two">
                  <Nav />
                  <Front />
                </div>
              </div>
            :
              <a className="App-link" href="http://localhost:8888"> Login to Spotify </a>
          }
        </div>
      );
  }
}

export default App;


