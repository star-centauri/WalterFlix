import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND_TOP}/videos`;

function handlerError(response) {
  if (!response.ok) {
    throw new Error('Não foi possível obter os dados.');
  }
  return response.json();
}

function create(objVideo) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objVideo),
  })
    .then((response) => handlerError(response));
}

export default {
  create,
};
