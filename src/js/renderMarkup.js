// export { renderListMarkup, renderCardMarkup, clearInput };
// import { getRefs } from './getRefs';
// const refs = getRefs();

// function renderItemMarkup(result) {
//   return result
//     .map(
//       ({ name, flags }) =>
//         `<li class="country-item">
//             <img
//             src="${flags.svg}"
//             alt="${name.official}"
//             class="country-flag"/>
//             <p class="country-name">${name.official}</p>
//             </li>`
//     )
//     .join('');
// }

// function renderListMarkup(result) {
//   // refs.countryList.insertAdjacentHTML('beforeend', renderItemMarkup(result));
//   refs.countryInfo.innerHTML = renderItemMarkup(result);
// }

// function renderInfoMarkup(result) {
//   return result.map(
//     ({ capital, population, languages }) =>
//       `<ul>
//             <li><span clas="country_info__style> Capital: </span>${capital}</li>
//             <li><span clas="country_info__style> Population: </span>${population}</li>
//             <li><span clas="country_info__style> Languages: </span>${Object.values(
//               languages
//             )}</li>
//             </ul>`
//   );
// }

// function renderCardMarkup(result) {
//   renderListMarkup(result);
//   // refs.countryInfo.insertAdjacentHTML('beforeend', renderInfoMarkup(result));
//   refs.countryInfo.innerHTML = renderInfoMarkup(result);
// }

// function clearInput() {
//   refs.countryInfo.innerHTML = '';
//   refs.countryList.innerHTML = '';
// }


import { getRefs } from './getRefs';
const refs = getRefs();

function createItemsMarkup(result) {
  return result
    .map(
      ({ name, flags }) =>
        `<li class="country-item">
        <img src="${flags.svg}" alt="${name.official}" class="country-flag" />
        <p class="country-name">${name.official}</p>
      </li>`
    )
    .join('');
}

function renderListMarkup(result) {
  refs.listCountriesEl.innerHTML = createItemsMarkup(result);
}

function createInfoMarkup(result) {
  return result.map(
    ({ capital, population, languages }) => `<ul class="country-info__list">
        <li class="country-info__list">Capital:&nbsp${capital}</li>
        <li class="country-info__list">Population:&nbsp${population}</li>
        <li class="country-info__list">Languages:&nbsp${Object.values(
          languages
        )}</li>
      </ul>`
  );
}

function renderCardMarkup(result) {
  renderListMarkup(result);
  refs.cardCountryEl.innerHTML = createInfoMarkup(result);
}

function clear() {
  refs.cardCountryEl.innerHTML = '';
  refs.listCountriesEl.innerHTML = '';
}

export { renderListMarkup, renderCardMarkup, clear };