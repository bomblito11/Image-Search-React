import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const API_KEY = '33145437-994e290732205a7e04a0a5ef4';

const getImages = async (searchValue, page) => {
  const response = await axios.get(`https://pixabay.com/api/`, {
    params: {
      key: API_KEY,
      q: searchValue,
      image_type: 'photo',
      orientation: 'horizontal',
      page,
      per_page: 12,
    },
  });

  return response.data.hits;
};

export { getImages };
