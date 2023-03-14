import { Search } from '../components/Search/Search';
import { Component, ReactNode } from 'react';
import { Countries } from '../components/Countries/Countries';
import axios from 'axios';

interface HomeState {
  search: string;
  countries: CountriesData[];
}

export class Home extends Component<void, HomeState> {
  constructor() {
    super();

    this.state = {
      search: '',
      countries: [],
    };
  }

  componentDidMount() {
    // получить поиск из локал сторедж
    this.getCountries();
  }

  componentWillUnmount() {
    // записывать значение поиска
  }

  handleSearchChange(value: string) {
    this.setState({ search: value });
  }

  async getCountries() {
    const response = await axios.get<CountriesData[]>('https://restcountries.com/v3.1/all');
    this.setState({ countries: response.data });
    console.log(response.data, this.state.countries);
  }

  filterCountries() {
    return this.state.countries.filter((country) => {
      return country.name.common.toLowerCase().includes(this.state.search.toLowerCase());
    });
  }

  render(): ReactNode {
    return (
      <div>
        <Search value={this.state.search} onSearchChange={this.handleSearchChange.bind(this)} />
        <Countries data={this.filterCountries()} />
      </div>
    );
  }
}
