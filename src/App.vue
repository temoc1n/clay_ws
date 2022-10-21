<template>
  <div class="container-fluid p-0" :class=" light_mode ? 'background' : 'dark_background'">
    <div class="header-component">
      <div class="header">
        <LoggedOutHeader @Mode="light_mode = !light_mode"/>
      </div>
      <div class="carrousel pt-5">
        <ProductCarousel />
      </div>
      <div class="dashboard">
        <div class="top_sales">
          <TopProducts />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoggedOutHeader from '@/components/LoggedOutHeader.vue'
import ProductCarousel from '@/components/ProductCarousel.vue'
import TopProducts from './components/TopProducts.vue'
export default {
  name: 'App',
  components:{
    LoggedOutHeader,
    ProductCarousel,
    TopProducts
},
  data(){
    return{
      light_mode: true,
    }
  },
  mounted(){
  this.$router.push("/dashboard")
   if(!localStorage.getItem('theme')){
      localStorage.setItem('theme', 'light');
    } 
  }
}
</script>

<style>
  @import url('./assets/main.css');
</style>
