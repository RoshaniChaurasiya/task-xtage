// src/services/ModelService.js
import axios from "axios";

const ModelService = {
  async getModels() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async getModelById(id) {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default ModelService;
