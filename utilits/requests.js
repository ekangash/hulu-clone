const API_KEY = '0d825ed2d59ccb9f3e923a4112bf6a62';

export default {
    fetchTrendingAll: {
        title: 'Trending',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    },
    fetchTrendingMovie: {
        title: 'Movie',
        url: `/trending/movie/week?api_key=${API_KEY}&language=en-US`,
    },
    fetchTrendingMovieTV: {
        title: 'TV',
        url: `/trending/tv/week?api_key=${API_KEY}&language=en-US`,
    },
    fetchTrendingMoviePerson: {
        title: 'Person',
        url: `/trending/person/week?api_key=${API_KEY}&language=en-US`,
    },
};