<template>
  <div class="container-fluid p-0" :class=" light_mode ? 'background' : 'dark_background'">
      <div class="header-component">
        <div class="header">
          <MainHeader @Mode="light_mode = !light_mode"/>
        </div>
      </div>
      <router-view></router-view>
      <div class="footer-component">
        <div class="footer">
          <MainFooter />
        </div>
      </div>
  </div>
</template>

<script>
import MainFooter from '@/components/MainFooter.vue'
import MainHeader from '@/components/MainHeader.vue';
export default {
  name: 'App',
  components:{
    MainFooter,
    MainHeader
  },
  data(){
    return{
      logged: true
    }
  },
  mounted(){
    this.$router.push("/home")
    if(!localStorage.getItem('theme')){
      localStorage.setItem('theme', 'light');
    } 
  }
}
</script>

<style>
  @import url('./assets/main.css');
</style>
