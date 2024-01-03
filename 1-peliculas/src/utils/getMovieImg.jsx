export function getMovieImg(path, width) {
  return path
    ? `https://image.tmdb.org/t/p/w${width}/${path}`
    : "https://cdn-icons-png.flaticon.com/512/3264/3264456.png";
}
