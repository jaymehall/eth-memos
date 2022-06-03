import axios from "axios";

const API = {
  Get: (url) => {
    return axios.get(url, {
      headers: { "Content-Type": "application/json" }
    });
  },

  Post: (url, data) => {
    return axios({
      method: "POST",
      url: url,
      data: data,
      headers: {
        "Content-Type": "application/json"
      }
    });
  },

  Put: (url, data) => {
    return axios({
      method: "PUT",
      url: url,
      data: data,
      headers: {
        "Content-Type": "application/json"
      }
    });
  },

  Delete: (url, data) => {
    return axios({
      method: "DELETE",
      url: url,
      data: data,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};

export default API;
