<script setup>
import SideBar from '@/components/pages/admin/SideBar.vue'
import NavBar from '@/components/pages/admin/NavBar.vue'
import Contnent from '@/components/pages/admin/Content.vue'
</script>

<template>
<section>

 
<NavBar/>

   <div class="row">
      <div class="col-md-3">
         <SideBar/>
      </div>
      <div class="col-md-9">
          <RouterView />
      </div>
   </div>

</section>
</template>

