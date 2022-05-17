<template>
   <section data-bs-version="5.1" class="menu cid-s48OLK6784" once="menu" id="menu1-h">
    <nav class="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg">
        <div class="container">
            <div class="navbar-brand">
                <span class="navbar-logo">
                    <a href="https://mobiri.se">
                        <img src="https://r.mobirisesite.com/206376/assets/images/logo.png?v=1NP2wk" alt="Mobirise Website Builder" style="height: 3.8rem;">
                    </a>
                </span>
                <span class="navbar-caption-wrap"><a class="navbar-caption text-black display-7" href="https://mobiri.se">Brand Name</a></span>
            </div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-bs-toggle="collapse" data-target="#navbarSupportedContent" data-bs-target="#navbarSupportedContent" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <div class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                
                <ul class="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true">
                    <li class="nav-item">
                             <RouterLink lass="nav-link link text-black display-1" to="/">Home</RouterLink>
                      </li>
                </ul>
                 <ul class="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true">
                    <li class="nav-item">
                             <RouterLink lass="nav-link link text-black display-1" to="/about">About</RouterLink>
                      </li>
                </ul>

                 

               

                 <ul v-if="!currentUser" class="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true">
                    <li class="nav-item">
                             <RouterLink lass="nav-link link text-black display-1" to="/login">Login</RouterLink>
                      </li>
                </ul>

                <ul v-if="currentUser" class="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true">
                    <li class="nav-item">
                             <RouterLink lass="nav-link link text-black display-1" to="/admin">adminnn</RouterLink>
                      </li>
                </ul>

                <ul v-if="!currentUser" class="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true">
                    <li class="nav-item">
                             <RouterLink lass="nav-link link text-black display-1" to="/register">Register</RouterLink>
                      </li>
                </ul>
                
                <ul v-if="currentUser" class="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true">
                    <li class="nav-item">
                             <a @click.prevent="logOut" lass="nav-link link text-black display-1" >Logout</a>
                      </li>
                </ul>
                
            </div>
        </div>
    </nav>
 

</section>


</template>

<script>

export default {

 computed: {
    currentUser() {
     console.log('this.$store.state.auth.user',this.$store.state.auth.user);
      return this.$store.state.auth.user;
    },

  },
  methods: {
      showAdminBoard() {
      if (this.currentUser && this.currentUser['roles']) {
        return this.currentUser['roles'].includes('ROLE_ADMIN');
      }
      return false;
    },
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
};


</script>


<style scoped>

</style>
