interface CountriesData {
  name: {
    common: string;
    official: string;
    nativeName: {
      fra: {
        official: string;
        common: string;
      };
      kon: {
        official: string;
        common: string;
      };
      lin: {
        official: string;
        common: string;
      };
    };
  };
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: {
    XAF: {
      name: string;
      symbol: string;
    };
  };
  idd: { root: string; suffixes: string[] };
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: { [key: string]: string };
  translations: { [key: string]: string };
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: { [key: string]: string };
  flag: string;
  maps: { googleMaps: string; openStreetMaps: string };
  population: number;
  gini: { [key: string]: number };
  fifa: string;
  car: { signs: string[]; side: string };
  timezones: string[];
  continents: string[];
  flags: { png: string; svg: string; alt: string };
  coatOfArms: { png: string; svg: string };
  startOfWeek: string;
  capitalInfo: { latlng: number[] };
}
