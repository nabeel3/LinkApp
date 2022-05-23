import axios from "axios";
let userToken = JSON.parse(localStorage.getItem('AccessToken'));
export default axios.create({
  baseURL: "http://localhost:3000/api/",
  headers: {
    "Content-type": "application/json",
    'content-type': 'multipart/form-data',
   "Authorization": `Bearer ${userToken}` 
  }
});