export const defaultValueApi = (page: number, search?: string) => {
  return `https://shikimori.one/api/animes?limit=15&page=${page}&score=8&order=popularity${
    search ? `&search=${search}` : ''
  }`;
};