import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ANIME_API_ALL } from 'const/api-query';
import { itemOnPage } from 'utils';

interface QueryAnimeApi {
  limit?: number;
  search?: string;
  page?: number;
}

export const animeAPI = createApi({
  reducerPath: 'animeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: ANIME_API_ALL,
  }),
  endpoints: (builder) => ({
    fetchAllAnime: builder.query<AnimeData[], QueryAnimeApi>({
      query: ({ limit = itemOnPage, page, search }) => ({
        url: '/animes',
        params: {
          _limit: limit,
          _page: page,
          _score: 8,
          _censored: true,
          _order: 'popularity',
          _search: search,
        },
      }),
    }),
  }),
});

export const { useFetchAllAnimeQuery } = animeAPI;
