import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import tvAnimeReducer from './tvAnime/tvAnime';
import movieAnimeReducer from './movieAnime/movieAnime';
import specialAnimeReducer from './specialAnime/specialAnime';
import musicAnimeReducer from './musicAnime/musicAnime';
import onaAnimeReducer from './onaAnime/onaAnime';
import ovaAnimeReducer from './ovaAnime/ovaAnime';

const store = configureStore({
  reducer: {
    tvAnime: tvAnimeReducer,
    movieAnime: movieAnimeReducer,
    specialAnime: specialAnimeReducer,
    musicAnime: musicAnimeReducer,
    onaAnime: onaAnimeReducer,
    ovaAnime: ovaAnimeReducer,
  },
  middleware: (getDefaultMiddleware) => (
    getDefaultMiddleware().concat(logger)
  ),
});

export default store;
