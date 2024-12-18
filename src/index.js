import "./css/styles.css";
import { getRefs } from "./js/getRefs.js";
import { fetchCountries } from "./js/fetchCountries";
import {
  renderListMarkup,
  renderCardMarkup,
  clearInput,
} from "./js/renderMarkup";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import debounce from "lodash.debounce";

const DEBOUNCE_DELAY = 200;
const refs = getRefs();
refs.searchBox.addEventListener("input", debounce(onInput, DEBOUNCE_DELAY));

function onInput(e) {
  let name = e.target.value.trim();
  if (name === "") {
    clearInput();
  } else {
    fetchCountries(name).then(onCheck).catch(onError);
  }
}

function onCheck(result) {
  if (result.length > 500) {
    Notify.info("Too many matches found. Please enter a more specific name.");
  } else if (result.length === 1) {
    clearInput();
    renderCardMarkup(result);
  } else {
    clearInput();
    renderListMarkup(result);
  }
}

function onError(error) {
  clearInput();
  Notify.failure("❌ Oops, something is wrong");
}
