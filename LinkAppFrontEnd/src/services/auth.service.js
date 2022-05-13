
import axios from 'axios';
const API_URL = 'http://localhost:3000/api/';

class AuthService {
  login(user) {
      console.log(user, 'userr')
      
    return axios
      .post(API_URL + 'login', {
        
        email: user.email,
        password: user.password
      })
      .then(response => {
          console.log()
        if (response.data.success == true) {
            console.log('true')
            localStorage.setItem('userToken', JSON.stringify(response.data.token));
            localStorage.setItem('user', JSON.stringify(response.data.user));
        }
        if (response.data.success == false){

         
        }
        

        
      });
  }
  logout() {
    localStorage.removeItem('user');
  }
  register(user) {
    return axios.post(API_URL + 'register', {
      username: user.username,
      email: user.email,
      password: user.password
    });
  }
}
export default new AuthService();