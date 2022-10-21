<template>
  <div class="container-fluid p-0" :class="getMode() ? 'background' : 'dark_background'">
    <div class="header-component">
      <div class="header">
        <LoggedOutHeader />
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
  methods:{
    getMode(){
      if(localStorage.getItem('theme') == 'light'){
        return true;
      }else{
        return false;
      }
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
