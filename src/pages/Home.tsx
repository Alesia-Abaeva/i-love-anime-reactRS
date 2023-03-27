import React from 'react';
import axios from 'axios';
import { LOCAL_STORAGE_KEYS } from '../const/local-storage';
import { Search } from '../components/Search/Search';
import { Countries } from '../components/Countries/Countries';

export const Home = () => {
  const [search, setSearch] = React.useState<string>('');
  const [countries, setCountries] = React.useState<CountriesData[]>([]);

  const handleSearchChange = (value: string) => {
    setSearch(value);
  };

  const getCountries = async () => {
    const response = await axios.get<CountriesData[]>('https://restcountries.com/v3.1/all');
    setCountries([...countries, ...response.data]);
  };

  const filterCountries = () => {
    return countries.filter((country) => {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    });
  };

  // componentDidMount +  componentWillUnmount()
  React.useEffect(() => {
    console.log('componentDidMount');
    const localItem = localStorage.getItem(LOCAL_STORAGE_KEYS.INPUT_VALUE);
    const storedSearch = localItem && JSON.parse(localItem);
    console.log('storedSearch===', storedSearch);
    storedSearch && setSearch(storedSearch);
    getCountries();

    return () => {
      console.log(search);
      console.log('componentWillUnmount');
      localStorage.setItem(LOCAL_STORAGE_KEYS.INPUT_VALUE, JSON.stringify(search));
    };
  }, []);

  return (
    <div>
      <Search value={search} onSearchChange={handleSearchChange} />
      <Countries data={filterCountries()} />
    </div>
  );
};

// export class Home extends Component<object, HomeState> {
//   constructor(props: object) {
//     super(props);

//     this.state = {
//       search: '',
//       countries: [],
//     };
//   }

//   componentDidMount() {
//     const localItem = localStorage.getItem(LOCAL_STORAGE_KEYS.INPUT_VALUE);
//     const storedSearch = localItem && JSON.parse(localItem);
//     storedSearch && this.setState({ search: storedSearch });
//     this.getCountries();
//   }

//   componentWillUnmount() {
//     localStorage.setItem(LOCAL_STORAGE_KEYS.INPUT_VALUE, JSON.stringify(this.state.search));
//   }

//   handleSearchChange(value: string) {
//     this.setState({ search: value });
//   }

//   async getCountries() {
//     const response = await axios.get<CountriesData[]>('https://restcountries.com/v3.1/all');
//     this.setState({ countries: response.data });
//   }

//   filterCountries() {
//     return this.state.countries.filter((country) => {
//       return country.name.common.toLowerCase().includes(this.state.search.toLowerCase());
//     });
//   }

//   render(): ReactNode {
//     return (
//       <div>
//         <Search value={this.state.search} onSearchChange={this.handleSearchChange.bind(this)} />
//         <Countries data={this.filterCountries()} />
//       </div>
//     );
//   }
// }
