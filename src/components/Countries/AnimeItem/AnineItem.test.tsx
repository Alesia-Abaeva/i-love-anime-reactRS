import { render } from '@testing-library/react';
import { AnineItem } from './AnineItem';
import { describe, it } from 'vitest';

describe('Render data countries', () => {
  const data: CountriesData = {
    name: {
      common: 'Republic of the Congo',
      official: 'Republic of the Congo',
      nativeName: {
        fra: {
          official: 'République du Congo',
          common: 'République du Congo',
        },
        kon: {
          official: 'Repubilika ya Kongo',
          common: 'Repubilika ya Kongo',
        },
        lin: {
          official: 'Republíki ya Kongó',
          common: 'Republíki ya Kongó',
        },
      },
    },
    tld: ['.cg'],
    cca2: 'CG',
    ccn3: '178',
    cca3: 'COG',
    cioc: 'CGO',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      XAF: {
        name: 'Central African CFA franc',
        symbol: 'Fr',
      },
    },
    idd: {
      root: '+2',
      suffixes: ['42'],
    },
    capital: ['Brazzaville'],
    altSpellings: ['CG', 'Congo', 'Congo-Brazzaville'],
    region: 'Africa',
    subregion: 'Middle Africa',
    languages: {
      fra: 'French',
      kon: 'Kikongo',
      lin: 'Lingala',
    },
    translations: {
      ara: 'جمهورية الكونغو',
    },
    latlng: [-1, 15],
    landlocked: false,
    borders: ['AGO', 'CMR', 'CAF', 'COD', 'GAB'],
    area: 342000,
    demonyms: {
      eng: 'Congolese',
    },
    flag: '🇨🇬',
    maps: {
      googleMaps: 'https://goo.gl/maps/Phf5dDDKdfCtuBTb6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/192794',
    },
    population: 5657000,
    gini: {
      2011: 48.9,
    },
    fifa: 'CGO',
    car: {
      signs: ['RCB'],
      side: 'right',
    },
    timezones: ['UTC+01:00'],
    continents: ['Africa'],
    flags: {
      png: 'https://flagcdn.com/w320/cg.png',
      svg: 'https://flagcdn.com/cg.svg',
      alt: 'The flag of the Republic of the Congo features a yellow diagonal band that extends from the lower hoist-side corner to the upper fly-side corner of the field. Above and beneath this band are a green and red triangle respectively.',
    },
    coatOfArms: null,
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-4.25, 15.28],
    },
  };
  it('Renders about data', () => {
    const { getByText } = render(<AnineItem data={data} key={1} />);
    const element = getByText(/Republic of the Congo/i);
    expect(element).toBeInTheDocument;
  });
});
