export const defaultValueApi = (page: number, search?: string) => {
  return `https://shikimori.one/api/animes?limit=15&page=${page}&censored=true${
    !search ? '&score=8' : ''
  }&order=popularity${search ? `&search=${search}` : ''}`;
};

export const idRequest = (id: number | string) => {
  return `https://shikimori.one/api/animes/${id}`;
};

// &rating=r
