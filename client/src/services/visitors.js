import axios from 'axios';

export default {
  async getVisitors() {
    // TODO this can't be localhost hardcoded, depends on the env
    let res = await axios.get('http://localhost:5100/visitors');
    console.log('This is what I got');
    console.log(res);
    return res.data;
  },
};
