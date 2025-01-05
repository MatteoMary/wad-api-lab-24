export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=4939bdef6fbeb7eb81e0f8c7ffd45d55&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };