import AuthService from '../services/auth.service';
const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };
export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ commit }, user) {
      return AuthService.login(user).then(
        response => {
          console.log(response, 'hellllleee');
          if(response.success == false){
          commit('loginFailure');
          return Promise.reject(response.message);
          }

          if(response.success == true){
           // console.log('loginSuccess',response)
            commit('loginSuccess', response.user);
            return Promise.resolve(response.user);
          }
          else {
            error => {
              console.log('422323232323')
              commit('loginFailure');
              return Promise.reject(error);
            }

          }
        },
       
      );
    },
    logout({ commit }) {
      AuthService.logout();
      commit('logout');
    },
    register({ commit }, user) {
      return AuthService.register(user).then(
        response => {
          if(response.data.error ){
            console.log(response.data.error);

          commit('registerFailure');
          return Promise.reject(response.data.error);
          }
          else {
            console.log('esponse.data', response.data)
            commit('registerSuccess');
            return Promise.resolve(response.data);

          }

        
        },
        error => {
          console.log('down')
          commit('registerFailure');
          return Promise.reject(error);
        }
      );
    }
  },
  mutations: {
    loginSuccess(state, user) {
      state.status.loggedIn = true;
      state.user = user;
    },
    loginFailure(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    logout(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    registerSuccess(state) {
      state.status.loggedIn = false;
    },
    registerFailure(state) {
      state.status.loggedIn = false;
    }
  }
};