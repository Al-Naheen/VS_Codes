import axios from "axios";

const instance = axios.create({
  baseURL: "https://whatsapp-mern-5841.herokuapp.com",
});

export default instance;
