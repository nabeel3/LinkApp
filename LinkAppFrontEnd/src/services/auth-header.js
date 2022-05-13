export default function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));
    let userToken = JSON.parse(localStorage.getItem('userToken'));
    
    if (user && userToken) {
      return { Authorization: 'Bearer ' + userToken };
    } else {
      return {};
    }
  }