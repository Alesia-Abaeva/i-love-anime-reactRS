import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ANIME_API_ALL, ITEM_ON_PAGE } from '../const';

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
  tagTypes: ['Anime', 'AnimeID'],
  endpoints: (builder) => ({
    fetchAllAnime: builder.query<AnimeData[], QueryAnimeApi>({
      query: ({ limit = ITEM_ON_PAGE, page, search }) => ({
        url: '/animes',
        params: {
          limit,
          page,
          score: !search ? 8 : 6,
          censored: true,
          order: 'popularity',
          search,
        },
      }),
      providesTags: ['Anime'],
    }),
    fetchIDAnime: builder.query<AnimeIdData, string | null>({
      query: (id) => ({
        url: `/animes/${id}`,
      }),
      providesTags: ['AnimeID'],
    }),
  }),
});

export const { useFetchAllAnimeQuery, useFetchIDAnimeQuery } = animeAPI;
