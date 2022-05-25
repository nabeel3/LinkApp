<template>
<div >
    <h1 class="visually-hidden"></h1>

  <div class="d-flex flex-column flex-shrink-0 p-2 text-white bg-dark" style="width: 280px;  min-height: calc(100vh - 50px);">
  
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
       <li>
        <RouterLink to='/posts' class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#table"/></svg>
          Dashboard
        </RouterLink>
      </li>
      <li>
        <RouterLink to='/posts' class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#table"/></svg>
          Posts
        </RouterLink>
      </li>
      <li>
         <RouterLink to='/tags' class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#table"/></svg>
          
          Tag
        </RouterLink>
      </li>
      <li>
        <RouterLink to='/videos' class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#table"/></svg>
          Video
        </RouterLink>
      </li>
    </ul>
    <hr>
    <div class="dropdown">
      <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <!-- <img src="" alt="" width="32" height="32" class="rounded-circle me-2"> -->
         <img src="https://larasoft.io/assets/img/logo-colour.webp" class="w-50 "  style="display:inline; margin-right:30px" />
        <strong>Profile</strong>
      </a>
      <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        <!-- <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider"></li> -->
        <li>
          <a  @click.prevent="logOut" class="dropdown-item" to='/logout'>Sign out</a>
          </li>
      </ul>
    </div>
  </div>

  <div class="b-example-divider"></div>


</div>
</template>

<script>

export default {
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
};


</script>