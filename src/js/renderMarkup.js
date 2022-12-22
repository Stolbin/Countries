export { renderListMarkup, renderCardMarkup, clearForm };
import { getRefs } from './getRefs';
const refs = getRefs();

function createItemsMarkup(result) {
  return result
    .map(
      ({ name, flags }) =>
        `<li class="country-item">
        <img src="${flags.svg}" alt="${name.official}" class="country-flag"/>
        <p class="country-name">${name.official}</p></li>`
    )
    .join('');
}

function renderListMarkup(result) {
  refs.countryList.innerHTML = createItemsMarkup(result);
}

function createInfoMarkup(result) {
  return result.map(
    ({ capital, population, languages }) => `<ul>
    <li>Capital: ${capital}</li>
    <li>Population: ${population}</li>
    <li>Languages: ${Object.values(languages)}</li></ul>`
  );
}

function renderCardMarkup(result) {
  renderListMarkup(result);
  refs.countryInfo.innerHTML = createInfoMarkup(result);
}

function clearForm() {
  refs.countryInfo.innerHTML = '';
  refs.countryList.innerHTML = '';
}

