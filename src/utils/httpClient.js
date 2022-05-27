const API = "https://api.themoviedb.org/3";

export function httpGet(path) {
    return fetch(API + path, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmN2EyMTQ3Yzc2ODM5ZjUwNzlhMzViMjc0YWFkOWYwMiIsInN1YiI6IjYyNjA3YzQ2NjNhYWQyMDA1MWNmZjVlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wNx7Q_TJuXT9N-NzqSY1REU3-BjM1JPaJ_FP2jeYgpA",
        "Content-Type": "application/json;charset=utf-8"
        }
    }).then(result => result.json());
}