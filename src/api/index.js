import axios from 'axios';

const API = 'https://my-json-server.typicode.com/sergeykitchen/demo';

class Api {

  async getPosts() {
    try {
      return await axios.get(`${API}/posts`);
    }
    catch(e) {
      return e;
    }
  };

  async getPost(id) {
    try {
      return await axios.get(`${API}/posts/${id}`);
    }
    catch(e) {
      return e;
    }
  };

  async getTags() {
    try {
      return await axios.get(`${API}/tags`);
    }
    catch(e) {
      return e;
    }
  };
}

export default new Api();