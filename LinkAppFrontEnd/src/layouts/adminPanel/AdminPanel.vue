<!-- App Main Structure -->

<script setup>
import SideBar from '@/components/pages/admin/SideBar.vue'
import NavBar from '@/components/pages/admin/NavBar.vue'



</script>


<template>

<section>
 
<div id="wrapper" >
<NavBar/>
   <div class="row">
      <div class="col-md-3">
         <SideBar/>
      </div>
      <div class="col-md-9">
		  <RouterView/>
       
      </div>
   </div>
</div>
</section>
</template>


