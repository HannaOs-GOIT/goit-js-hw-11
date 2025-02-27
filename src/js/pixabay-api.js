import axios from 'axios';

const API_KEY = '49053882-7e244883c6f1c912e1433ba1a';

export async function fetchImages(query) {
  const BASE_URL = 'https://pixabay.com/api/';
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  try {
    const response = await axios.get(BASE_URL, { params });
    return response.data.hits;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
}