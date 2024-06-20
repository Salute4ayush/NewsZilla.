import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  articles: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const article = action.payload;
      const exists = state.articles.find(a => a.url === article.url);
      if (exists) {
        state.articles = state.articles.filter(a => a.url !== article.url);
      } else {
        state.articles.push(article);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
