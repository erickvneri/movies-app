import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://imdb8.p.rapidapi.com',
  headers: {
    'x-rapidapi-key': 'dcdebf4d9amsha983065629280eap1afd3fjsn583c02bba1f4',
    'x-rapidapi-host': 'imdb8.p.rapidapi.com',
  },
  timeout: 5000,
});

const IMDbService = {
  getAutoComplete: function (search) {
    const options = {
      params: { q: search },
    };

    return instance
      .get('/auto-complete', options)
      .then((res) => fromAutoCompleteApi(res.data.d))
      .catch((err) => {
        throw err;
      });
  },

  getTitleGetDetails: function (id) {
    const options = {
      params: { tconst: id },
    };

    return instance
      .get('/title/get-details', options)
      .then((res) => fromTitleGetDetails(res.data))
      .catch((err) => {
        throw err;
      });
  },
};

function fromAutoCompleteApi(movies = []) {
  return movies.map((movie) => ({
    id: movie.id,
    imageUrl: movie.i?.imageUrl ?? null,
    name: movie.l,
  }));
}

function fromTitleGetDetails(details) {
  console.log(details);
  return {
    id: details.id,
    imageUrl: details.image?.url ?? null,
    name: details.title,
    type: details.titleType,
    year: details.year,
  };
}

export { IMDbService };
