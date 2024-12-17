import { Notify } from "notiflix/build/notiflix-notify-aio";
const url = "https://restcountries.com/v3.1/name/";
const filter = "name,capital,population,flags,languages";

export async function fetchCountries(name) {
  const response = await fetch(`${url}${name}?fields=${filter}`);
  if (!response.ok) {
    throw new Error(
      Notify.failure("❌ Oops, there is no country with that name")
    );
  }
  return await response.json();
}
