<template>
    <div class="container-fluid position-fixed w-100"  :class="light_mode ? 'header' : 'dark_header'">
      <nav class="navbar navbar-expand-lg">
          <h2 class="me-3" :class="light_mode ? 'header_name' : 'dark_header_name'" @click.prevent="$router.push('/dashboard')">Miraki</h2>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <div class="me-auto mb-2 mb-lg-0 d-md-flex gap-2">
                <button class="nav-link active text-center rounded-3" :class="light_mode ? 'button' : 'dark_button'" aria-current="page" @click.prevent="$router.push('/store')">Shop</button>
                <button class="nav-link active text-center rounded-3" :class="light_mode ? 'button' : 'dark_button'" aria-current="page">About</button>
            </div>
            <div class="log-div d-md-flex me-4 p-1 gap-4">
              <button class="nav-link active text-center rounded-3" :class="light_mode ? 'button' : 'dark_button'">Sign In</button>
              <i v-if="!light_mode" @click="light_mode = true" class="fa-regular fa-moon mt-1 "  :class="light_mode ? 'screen_mode_icon' : 'dark_screen_mode_icon'"></i>
              <i v-else @click="light_mode = false" class="fa-solid fa-sun mt-1"  :class="light_mode ? 'screen_mode_icon' : 'dark_screen_mode_icon'"></i>
            </div>
          </div>
      </nav>
    </div>
</template>

<script>
export default {
  name: 'LoggedOutHeader',
  data() {
    return {
      light_mode: true,
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
