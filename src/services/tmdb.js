import api from "../lib/axios.js";

/// modular get function that accepts different parameters
const get = (url, params = {}) => {
  api
    .get(url, { params: { ...api.defaults.params, ...params } })
    .then((result) => result.data);
};
//gets list of trending moviesd, default to mediatype movie and week as time period
export const getTrending = (mediaType = "movie", trendingWindow = "week") => {
  return get(`/trending/${mediaType}/${trendingWindow}`);
};

// get popular movies based on iumdb rating, defaults to mediatuype movie and one page
export const getPopular = (pageNumber = 1, mediaType = "movie") => {
  return get(`/${mediaType}/popular`, { page: pageNumber });
};
// gets data based on movie id
export const getMovieDetails = (movieId) => {
  return get(`/movie/${movieId}`, {
    append_to_response: "videos,images,credits",
  });
};

//¨does a multi search, momves, people, etc defaults to one page.
export const searchMulti = (searchQuery, pageNumber = 1) => {
  return get("/search/multi", {
    query: searchQuery,
    include_adult: false,
    page: pageNumber,
  });
};
