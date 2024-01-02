const API = "https://api.themoviedb.org/3";
export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjRkNmUzNTQ4ZmJhZDg1MzJhM2JiM2FjMGE3ODEyZiIsInN1YiI6IjY1OTM0YjQ0NGY5YTk5NzM4ZTc4NGYxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QN7Qflucl6lt49p09XVtB62MixP2OHlEnftWhr7n8ug",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
