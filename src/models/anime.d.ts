interface AnimeData {
  id: number;
  name: string;
  russian: string;
  image: {
    original: string;
    preview: string;
    x96: string;
    x48: string;
  };
  url: string;
  kind: string;
  score: string;
  status: string;
  episodes: number;
  episodes_aired: number;
  aired_on?: string;
  released_on: string;
}

interface AnimeIdData extends AnimeData {
  rating: string;
  english: string[] | null[];
  japanese: string[];
  synonyms: string[];
  license_name_ru: null | string;
  duration: number;
  description: string;
  description_html: string;
  description_source: string;
  franchise: null | string;
  favoured: boolean;
  anons: boolean;
  ongoing: boolean;
  thread_id: number;
  topic_id: number;
  myanimelist_id: number;
  rates_scores_stats: { name: number; value: number }[];
  rates_statuses_stats: { name: string; value: number }[];
  updated_at: string;
  next_episode_at: null;
  fansubbers: string[];
  fandubbers: string[];
  licensors: string[];
  genres: {
    id: number;
    name: string;
    russian: string;
    kind: string;
  }[];
  studios: {
    id: number;
    name: string;
    filtered_name: string;
    real: boolean;
    image: string;
  }[];
  videos: {
    id: number;
    url: string;
    image_url: string;
    player_url: string;
    name: string;
    kind: string;
    hosting: string;
  }[];
  screenshots: {
    original: string;
    preview: string;
  }[];
  user_rate: null | number;
}
