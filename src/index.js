import './css/styles.css';
import { getRefs } from './js/getRefs.js';
import { fetchCountries } from './js/fetchCountries';
import { renderListMarkup, renderCardMarkup } from './js/renderMarkup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;
const refs = getRefs();

refs.input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(e) {
  let name = e.target.value.trim();
  if ((name = '')) {
    clearForm();
    renderCardMarkup(resoult);    
  } else {
    fetchCountries(name).then(onCheck).catch(onError);
  }
}

function onCheck(result) {
  if (result.length > 10) {
    Notify.info('Too many matches found. Please enter a more specific name.');
  } else if (result.length === 1) {
    clearForm();
    renderCardMarkup(result);
  } else {
    clearForm();
    renderListMarkup(result);
  }
}

function onError(error) {
//   clearForm();
  Notify.failure('❌ Oops, something is wrong');
}
