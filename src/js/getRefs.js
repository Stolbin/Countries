// export function getRefs() {
//   return {
//     searchBox: document.querySelector('#search-box'),
//     countryList: document.querySelector('.country-list'),
//     countryInfo: document.querySelector('.country-info'),
//   };
// }

export function getRefs() {
  return {
    inputEl: document.querySelector('#search-box'),
    listCountriesEl: document.querySelector('.country-list'),
    cardCountryEl: document.querySelector('.country-info'),
  };
}