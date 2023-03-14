// import React, { Component } from 'react';

// type DataCountry = {
//   countries: string[];
// };

// export class Counties extends Component {
//   state: DataCountry = {
//     countries: [],
//   };
//   //   constructor(props: React.PropsWithChildren) {
//   //     super(props);
//   //     this.state: DataCountry = { countries: [] };
//   //   }

//   componentDidMount() {
//     this.getCountries();
//   }
//   //   получение данных назагрузку

//   // здесь будет локал

//   async getCountries() {
//     const response = await fetch('https://restcountries.com/v3.1/all', { method: 'GET' });
//     const data = await response.json();
//     this.setState({ countries: data });
//   }

//   render() {
//     return (
//       <div>
//         <div className="countries">
//           {this.state.countries.map((country, index) => {
//             return <CountryItem country={country} key={index} />;
//           })}
//         </div>
//       </div>
//     );
//   }
// }
