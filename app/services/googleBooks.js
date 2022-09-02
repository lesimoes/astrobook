const API = 'https://www.googleapis.com/books/v1/volumes';

async function searchBooks({ query }) {
  try {
    const response = await fetch(`${API}?q=${query}`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error('========>', error);

  }
}

async function getBook({ id }) {
  try {
    const response = await fetch(`${API}/${id}`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}

export { searchBooks, getBook };
