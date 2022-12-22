// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// const url = 'https://restcountries.com/v3.1/name';
// const filter = 'fields = name, capital, population, flags, languages';

// export function fetchCountries(name) {
//   fetch(`${url}/${name}${filter}`).then(response => {
//     if (!response.ok) {
//       Notify.failure('❌ Oops, there is no country with that name');
//     }
//     return response.json();
//   });
// }

// export async function fetchCountries(name) {
//   const response = await fetch(`${url}, ${filter}`);
//   if (!response.ok) {
//     Notify.failure('❌ Oops, there is no country with that name');
//   }
//   return await response.json();
// }

import { Notify } from 'notiflix/build/notiflix-notify-aio';
const BASE_URL = 'https://restcountries.com/v3.1/name';
const FILTERS = 'fields=name,capital,population,flags,languages';

export function fetchCountries(name) {
  return fetch(`${BASE_URL}/${name}?&${FILTERS}`).then(response => {
    if (!response.ok) {
      Notify.failure('❌ Oops, there is no country with that name');
    }
    return response.json();
  });
}