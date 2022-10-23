<template>
    <div class="container-fluid position-fixed w-100"  :class="this.$store.getters.getMode ? 'header' : 'dark_header'">
      <nav class="navbar navbar-expand-lg">
          <h2 class="me-3 mt-1" :class="this.$store.getters.getMode ? 'header_name' : 'dark_header_name'" @click.prevent="$router.push('/home')">IKIGAI</h2>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="fa-solid fa-bars" :class="this.$store.getters.getMode ? 'mobile_menu_icon' : 'dark_mobile_menu_icon'"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03" style="margin-bottom: 3px;">
            <div class="me-auto mb-2 mb-lg-0 d-flex gap-2">
                <button class="nav-link active text-center rounded-3" :class="this.$store.getters.getMode ? 'button' : 'dark_button'" aria-current="page" @click.prevent="$router.push('/shop')">Shop</button>
                <button class="nav-link active text-center rounded-3" :class="this.$store.getters.getMode ? 'button' : 'dark_button'" aria-current="page" @click.prevent="$router.push('/about')">About</button>
                <button class="nav-link active text-center rounded-3" :class="this.$store.getters.getMode ? 'button' : 'dark_button'" aria-current="page" @click.prevent="$router.push('/donate')">Donate</button>
                <button class="nav-link active text-center rounded-3 w-50" :class="this.$store.getters.getMode ? 'button' : 'dark_button'" aria-current="page" style="white-space: nowrap" @click.prevent="$router.push('/contact')">Get in Touch!</button>
            </div>
            <div class="log-div d-flex me-4 p-1 gap-4">
                <i v-if="logged" class="fa-regular fa-user mt-1" :class="this.$store.getters.getMode ? 'header_mode_icon' : 'dark_header_mode_icon'"></i>
                <i v-if="logged" class="fa-solid fa-bag-shopping mt-1" :class="this.$store.getters.getMode ? 'header_mode_icon' : 'dark_header_mode_icon'"></i>
                <button v-if="!logged" class="nav-link active text-center rounded-3" :class="this.$store.getters.getMode ? 'button' : 'dark_button'" @click="logged = true" @click.prevent="$router.push('/login')">Login</button>
                <i v-if="!this.$store.getters.getMode" @click="light_mode = true" class="fa-regular fa-moon mt-1 "  :class="this.$store.getters.getMode ? 'header_mode_icon' : 'dark_header_mode_icon'"></i>
                <i v-else @click="light_mode = false" class="fa-solid fa-sun sun_header mt-1"  :class="this.$store.getters.getMode ? 'header_mode_icon' : 'dark_header_mode_icon'"></i>
                <i v-if="logged" class="fa-solid fa-arrow-right-from-bracket mt-1" :class="this.$store.getters.getMode ? 'header_mode_icon' : 'dark_header_mode_icon'" @click="logged = false"></i>
            </div>
          </div>
      </nav>
    </div>
</template>

<script>
export default {
  name: 'LoggedInHeader',
  data() {
    return {
      light_mode: undefined,
      logged: false
    }
  },
  watch:{
    light_mode(){
      if (!this.light_mode) {
        localStorage.setItem('theme', 'dark');
        this.$store.commit('changeMode', false)
        this.$emit('Mode', false)    
      }else{
        localStorage.setItem('theme', 'light');    
        this.$emit('Mode', true)
        this.$store.commit('changeMode', true)
      }
    }
  },
}
</script>

<style scoped>

</style>
