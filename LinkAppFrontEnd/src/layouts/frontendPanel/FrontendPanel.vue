<!-- App Main Structure -->

<script setup>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

</script>
<template>
	<div id="wrapper" >
		<!--Header Frontend Panel -->
		<NavBar/>

		<!-- Main Container -->
		  <RouterView />

		<!-- Footer Frontend Panel -->
		<Footer/>

	</div>
</template>

