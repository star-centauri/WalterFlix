import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categorias`;

function handlerError(response) {
  if (!response.ok) {
    throw new Error('Não foi possível obter os dados.');
  }
  return response.json();
}

function getAllCategoriesWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then((response) => handlerError(response));
}

function getAll() {
  return fetch(URL_CATEGORIES)
    .then((response) => handlerError(response));
}

export default {
  getAllCategoriesWithVideos,
  getAll,
};
