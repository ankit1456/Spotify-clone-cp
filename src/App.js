import React, { useEffect } from "react";
import Login from "./Components/Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Components/Player";
import { useStateValue } from "./StateProvider";
import Sidebar from "./Components/Sidebar";

const spotify = new SpotifyWebApi();

const App = () => {
  const [{ user, token, playlists }, dispatch] = useStateValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({ type: "SET_USER", user: user });
      });
      spotify.getUserPlaylists().then((playlists) =>
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        })
      );
    }
  });

  return (
    <div className="App">
      <Sidebar />
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
};

export default App;
