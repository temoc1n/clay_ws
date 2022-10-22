<template>
  <div class="container-fluid p-0" :class=" light_mode ? 'background' : 'dark_background'">
      <div class="header-component">
        <div class="header">
          <LoggedOutHeader @Mode="light_mode = !light_mode"/>
        </div>
      </div>
      <router-view></router-view>
        <MainFooter />
  </div>
</template>

<script>
import MainFooter from '@/components/MainFooter.vue'
import LoggedOutHeader from '@/components/LoggedOutHeader.vue'
export default {
  name: 'App',
  components:{
    LoggedOutHeader,
    MainFooter
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
