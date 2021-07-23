import React, { useState, useContext, createContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Container, Button, Overlay, Inner, Close } from './styles/player';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

export const PlayerContext = createContext();

export default function Player({ children, ...restProps }) {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  );
}

Player.Video = function PlayerVideo({ movieTle, ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);
  const [movieTitle, setMovieTitle] = useState(movieTle);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      await setMovieTitle(movieTle)
      movieTrailer(movieTitle || "")
        .then(url => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        }).catch((error) => {
          console.log(error.message)
          setTrailerUrl('lVue1Zy9YzE');
        });
      // if[],  run once when the row loads, and don't run again
    }
    fetchData();
  }, [showPlayer, movieTitle]);

  const opts = {
    height: "480",
    width: "100%",
    playerVars: {
      autoplay: 0,
    }
  }

  return showPlayer
    ? ReactDOM.createPortal(
      <Overlay onClick={() => setShowPlayer(false)} data-testid="player">
        <Inner>
          {/* <video id="netflix-player" controls>
            <source src={src} type="video/mp4" />
          </video> */}

          {trailerUrl && <YouTube id="netflix-player" controls videoId={trailerUrl} opts={opts} />}
          <Close />
        </Inner>
      </Overlay>,
      document.body
    )
    : null;
};

Player.Button = function PlayerButton({ ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return (
    <Button onClick={() => setShowPlayer((showPlayer) => !showPlayer)} {...restProps}>
      Play
    </Button>
  );
};
