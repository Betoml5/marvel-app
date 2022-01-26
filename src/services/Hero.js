const API = `http://gateway.marvel.com/v1/public/characters`;
const API_KEY = process.env.REACT_APP_API_MARVEL_KEY;
const API_HASH = process.env.REACT_APP_API_MARVEL_HASH;

const TS = "1000";

export async function find() {
  try {
    const response = await fetch(
      `${API}?ts=${TS}&apikey=${API_KEY}&hash=${API_HASH}`
    );
    const data = response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export const findOneByName = async (name) => {
  try {
    const response = await fetch(
      `${API}?name=${name}&ts=${TS}&apikey=${API_KEY}&hash=${API_HASH}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const findOneById = async (id) => {
  try {
    const response = await fetch(
      `${API}/${id}?ts=${TS}&apikey=${API_KEY}&hash=${API_HASH}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
