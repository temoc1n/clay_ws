<template>
  <div class="container-fluid p-0" :class=" light_mode ? 'background' : 'dark_background'">
    <div class="header-component">
      <div class="header">
        <LoggedOutHeader @Mode="light_mode = !light_mode"/>
      </div>
      <div class="carrousel pt-5">
        <ProductCarousel />
      </div>
    </div>
  </div>
</template>

<script>
import LoggedOutHeader from '@/components/LoggedOutHeader.vue'
import ProductCarousel from '@/components/ProductCarousel.vue'
export default {
  name: 'App',
  components:{
    LoggedOutHeader,
    ProductCarousel 
  },
  data(){
    return{
      light_mode: true,
    }
  },
  mounted(){
   if(!localStorage.getItem('theme')){
      localStorage.setItem('theme', 'light');
    } 
  }
}
</script>

<style>
  @import url('./assets/main.css');
</style>
