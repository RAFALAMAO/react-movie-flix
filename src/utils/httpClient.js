const API = "https://api.themoviedb.org/3";

const bearer = process.env.REACT_APP_MOVIE_API_KEY;

export function httpGet(path) {
    return fetch(API + path, {
      method: "GET",
      headers: {
        Authorization:
          `Bearer ${bearer}`,
          "Content-Type": "application/json;charset=utf-8"
        }
    }).then(result => result.json());
}