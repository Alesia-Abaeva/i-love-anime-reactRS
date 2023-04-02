import { LOCAL_STORAGE_KEYS } from '../const/local-storage';

export const getStoredSearch = () => {
  const localItem = localStorage.getItem(LOCAL_STORAGE_KEYS.INPUT_VALUE);
  const storedSearch = localItem && (JSON.parse(localItem) as string);

  return storedSearch || '';
};
