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
    refs.countryList.innerHTML = renderItemMarkup(item);
    }

function renderInfoMarkup(cardCountryData) {
    return cardCountryData
        .map(
            ({ capital, population, languages }) => 
            `<ul>
            <li>Capital: ${capital}</li>
            <li>Population: ${population}</li>
            <li>Languages: ${Object.values(languages)}</li>
            </ul>`
    );
}

function renderCardMarkup(cardCountryData) {
    renderListMarkup(item);
    refs.countryInfo.innerHTML = renderInfoMarkup(cardCountryData);
}

