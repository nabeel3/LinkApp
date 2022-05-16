export default function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));
    let userToken = JSON.parse(localStorage.getItem('AccessToken'));
    
    if (user && userToken) {
      return { Authorization: 'Bearer ' + userToken };
    } else {
      return {};
    }
  }