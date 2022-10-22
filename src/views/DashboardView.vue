<template>
    <div class="container-fluid p-0" :class=" this.$store.getters.getMode ? 'background' : 'dark_background'">
      <div class="dashboard">
        <div class="carrousel pt-5">
          <ProductCarousel />
        </div>
        <div class="top_sales">
          <TopProducts />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import ProductCarousel from '@/components/ProductCarousel.vue'
  import TopProducts from '@/components/TopProducts.vue'
  export default {
    name: 'App',
    components:{
      ProductCarousel,
      TopProducts
  },
    data(){
      return{
        light_mode: true,
      }
    },
  }
  </script>
  
  <style>
  </style>
  