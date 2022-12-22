import { Notify } from 'notiflix/build/notiflix-notify-aio';
const url = 'https://restcountries.com/v3.1/name';
const description = 'fields=name,capital,population,flags,languages';

export function fetchCountries() {
  return fetch(`${url}/${name}, ${description}`).then(response => {
    if (!response.ok) {
      Notify.failure('❌ Oops, there is no country with that name');
    }
    return response.json();
  });
}

// export async function fetchCountries(name) {
//   const response = await fetch(`${BASE_URL}/${name}, ${FILTERS}`);
//   if (!response.ok) {
//     Notify.failure('❌ Oops, there is no country with that name');
//   }
//   return await response.json();
// }
