import axios from "axios";
let userToken = JSON.parse(localStorage.getItem('AccessToken'));
export default axios.create({
  baseURL:  import.meta.env.VITE_APP_ROOT_API,
  headers: {
    "Content-type": "application/json",
    'content-type': 'multipart/form-data',
   "Authorization": `Bearer ${userToken}` 
  }
});