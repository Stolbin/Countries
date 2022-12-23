export { renderListMarkup, renderCardMarkup, clearInput };
import { getRefs } from './getRefs';
const refs = getRefs();

function renderItemMarkup(result) {
  return result
    .map(
      ({ name, flags }) =>
        `<li class="country-item">
            <img
            src="${flags.svg}"
            alt="${name.official}"
            class="country-flag"/>
            <p class="country-name">${name.official}</p>
            </li>`
    )
    .join('');
}

function renderListMarkup(result) {
  refs.countryList.insertAdjacentHTML('beforeend', renderItemMarkup(result));
}

function renderInfoMarkup(result) {
  return result.map(
    ({ capital, population, languages }) =>
      `<ul class="country_info">
            <li class="country_info__style">Capital: <span class="country_info__style_velue">${capital}</span></li>
            <li class="country_info__style">Population: <span class="country_info__style_velue">${population}</span></li>
            <li class="country_info__style">Languages: <span class="country_info__style_velue">${Object.values(
              languages
            )}</span></li>
            </ul>`
  );
}

function renderCardMarkup(result) {
  renderListMarkup(result);
  refs.countryInfo.insertAdjacentHTML('beforeend', renderInfoMarkup(result));
}

function clearInput() {
  refs.countryInfo.innerHTML = '';
  refs.countryList.innerHTML = '';
}