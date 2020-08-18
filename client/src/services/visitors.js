import axios from 'axios';

// TODO can I build this elsewhere? Like a singleton service (maybe this is too Spring-y)?
const PROTOCOL = `http`;
const ENV = `localhost`;
const PORT = `5100`;
const BASE_URL = `${PROTOCOL}://${ENV}:${PORT}`;
const RESOURCE_PATH = `visitors`;
const BASE_ENDPOINT = `${BASE_URL}/${RESOURCE_PATH}`;

const getCount = async () => {
  try {
    const res = await axios.get(BASE_ENDPOINT);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export default getCount;
