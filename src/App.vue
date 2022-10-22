<template>
  <div class="container-fluid p-0" :class=" light_mode ? 'background' : 'dark_background'">
      <div class="header-component">
        <div class="header">
          <LoggedOutHeader @Mode="light_mode = !light_mode"/>
        </div>
      </div>
      <router-view></router-view>
      <div class="footer-component">
        
      </div>
  </div>
</template>

<script>
import LoggedOutHeader from '@/components/LoggedOutHeader.vue'
export default {
  name: 'App',
  components:{
    LoggedOutHeader
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
