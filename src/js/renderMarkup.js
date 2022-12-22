export { renderListMarkup, renderCardMarkup };
import { getRefs } from './getRefs';
const refs = getRefs();

function renderItemMarkup(item) {
    return item
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

function renderListMarkup(item) {
    refs.countryList.insertAdjacentHTML('beforeend', renderItemMarkup(item));
    }

function renderInfoMarkup(card) {
    return card
        .map(
            ({ capital, population, languages }) => 
            `<ul>
            <li>Capital: ${capital}</li>
            <li>Population: ${population}</li>
            <li>Languages: ${Object.values(languages)}</li>
            </ul>`
    );
}

function renderCardMarkup(card) {
    renderListMarkup(item);
    refs.countryInfo.insertAdjacentHTML(
      'beforeend',
      renderInfoMarkup(card)
    );
}

