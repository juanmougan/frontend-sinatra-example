import axios from 'axios';

const BASE_URL = process.env.VUE_APP_BASE_URL;
const RESOURCE_PATH = `visitors`;
const BASE_ENDPOINT = `${BASE_URL}/${RESOURCE_PATH}`;
console.log(BASE_ENDPOINT);

const getCount = async () => {
  try {
    const res = await axios.get(BASE_ENDPOINT);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export default getCount;
