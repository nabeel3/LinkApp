
import axios from 'axios';
const API_URL = import.meta.env.VITE_APP_ROOT_API;

class AuthService {

  login(user) {
    return axios
      .post(API_URL + 'login', {
        email: user.email,
        password: user.password
      })
      .then(response => {
        console.log('yuipppppr', response)

        if (response.data.token) {
          console.log(response.data.user, 'response.data.user')

          console.log(response.data.token, 'res.user')

          localStorage.setItem('user', JSON.stringify(response.data.user));
          localStorage.setItem('AccessToken', JSON.stringify(response.data.token));
          return response.data;
        }

        return response.data;
      });
  }
  // login(user) {
  //     console.log(user, 'userr')
      
  //   return axios
  //     .post(API_URL + 'login', {
        
  //       email: user.email,
  //       password: user.password
  //     })
  //     .then(response => {
  //       if (response.data.accessToken) {
  //         localStorage.setItem('user', JSON.stringify(response.data));
  //       }
  //       return response.data;
  //     });
  //     .then(response => {
  //       if (response.data.success == true) {
  //           console.log('true')
  //           localStorage.setItem('userToken', JSON.stringify(response.data.token));
  //           localStorage.setItem('user', JSON.stringify(response.data.user));
  //       }
  //       if (response.data.success == false){

         
  //       }
        

        
  //     });
  // }
  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('AccessToken');
  }
  register(user) {
    return axios.post(API_URL + 'register', {
      name: user.username,
      email: user.email,
      password: user.password,
      confirm_password: user.password
    });
  }
}
export default new AuthService();