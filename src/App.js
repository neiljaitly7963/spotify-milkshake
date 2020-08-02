import React from 'react';
import logo from './logo.svg';
import './App.css';
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

class App extends React.Component {

  constructor () {
    super()
    const params = this.getHashParams();
    const token = params.access_token;
    if (token) {
      spotifyApi.setAccessToken(token);
    }
    this.state = {
      loggedIn: token ? true : false,
      nowPlaying: { name: 'Not Checked', albumArt: '' }
    }
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



  getNowPlaying(){
  spotifyApi.getMyCurrentPlaybackState()
    .then((response) => {
      this.setState({
        nowPlaying: { 
            name: response.item.name, 
            albumArt: response.item.album.images[0].url
          }
      });
    })
}

getUserPlaylist(){
  spotifyApi.getUserPlaylists().then(response => {
    console.log(response)
  })
}

  render() {
      return (
        <div className="App">
          <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {
            this.state.loggedIn ? 
            <div>
              <h1>welcome</h1>
              <button onClick={() => {
                this.getNowPlaying()
                this.getUserPlaylist()
              }} >click me</button>
              <img src={this.state.nowPlaying.albumArt} style={{ height: 150 }} />
              <h1>{this.state.nowPlaying.name}</h1>
            </div>
            :
            <a className="App-link" href="http://localhost:8888"> Login to Spotify </a>
 
          }
          </header>
        </div>
  );
  }
}

export default App;


