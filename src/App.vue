<template>
  <div class="container-fluid p-0" :class=" this.$store.getters.getMode ? 'background' : 'dark_background'">
      <div class="header-component">
        <div class="header">
          <MainHeader v-if="$route.name != 'login'"/>
        </div>
      </div>
      <router-view></router-view>
      <div class="footer-component">
        <div class="footer">
          <MainFooter v-if="$route.name != 'login'"/>
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
  mounted(){
    this.$router.push("/home")
    if(!localStorage.getItem('theme')){
      localStorage.setItem('theme', 'dark');
    } 
  }
}
</script>

<style>
  @import url('./assets/main.css');
</style>
