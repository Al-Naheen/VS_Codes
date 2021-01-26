// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
export const authEndpoint = "https://accounts.spotify.com/authorize";
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "be58b9ff497f4a06b3bbf0195f9b9772";

// I have changed this redirectUri from http://localhost:3000/ to https://spotify-clone-451ea.web.app/
// then -- https://developer.spotify.com/dashboard/ e jeye ei project er settings e gie 'redirectURL change korsi from http://localhost:3000/ to https://spotify-clone-451ea.web.app/'
const redirectUri = "https://spotify-clone-451ea.web.app/";
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromResponse = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
