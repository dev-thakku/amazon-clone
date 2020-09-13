import axios from "axios";
const instance = axios.create({
  //THE HEROKU API URL
  baseURL: "https://amazon-clone-back-end.herokuapp.com",
  //"http://localhost:3001"
});
export default instance;
