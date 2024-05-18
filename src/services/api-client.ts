import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "afc1eb807f544cee8b8e4803c47d1e6a",
  },
});
