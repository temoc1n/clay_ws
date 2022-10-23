<template>
  <div class="container-fluid login_body">
    <div class="section">
      <div class="container">
        <div class="row full-height justify-content-center">
          <div class="col-12 text-center align-self-center py-5">
            <h2 class="me-3 mt-1 mb-3 login_title" :class="this.$store.getters.getMode ? 'header_name' : 'dark_header_name'" @click.prevent="$router.push('/home')">IKIGAI<br><p>Online Sculpting Store</p></h2>
            <div class="section pb-5 pt-5 pt-sm-2 text-center">
              <h6 class="mb-0 pb-3">
                <span>Log In </span><span>Sign Up</span>
              </h6>
              <input
                class="checkbox"
                type="checkbox"
                id="reg-log"
                name="reg-log"
              />
              <label for="reg-log"></label>
              <div class="card-3d-wrap mx-auto">
                <div class="card-3d-wrapper">
                  <div class="card-front">
                    <div class="center-wrap">
                      <div class="section text-center">
                        <h4 class="mb-4 pb-3">Log In</h4>
                        <div class="form-group">
                          <input
                            type="email"
                            name="logemail"
                            class="form-style"
                            placeholder="Email"
                            id="logemail"
                            autocomplete="off"
                          />
                          <i class="input-icon uil uil-at"></i>
                        </div>
                        <div class="form-group mt-2">
                          <input
                            type="password"
                            name="logpass"
                            class="form-style"
                            placeholder="Password"
                            id="logpass"
                            autocomplete="off"
                          />
                          <i class="input-icon uil uil-lock-alt"></i>
                        </div>
                        <a href="#" class="btn mt-4">submit</a>
                        <p class="mb-0 mt-4 text-center">
                          <a href="#0" class="link">Forgot your password?</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="card-back">
                    <div class="center-wrap">
                      <div class="section text-center">
                        <h4 class="mb-4 pb-3">Sign Up</h4>
                        <div class="form-group">
                          <input
                            type="text"
                            name="logname"
                            class="form-style"
                            placeholder="Username"
                            id="logname"
                            autocomplete="off"
                          />
                          <i class="input-icon uil uil-user"></i>
                        </div>
                        <div class="form-group mt-2">
                          <input
                            type="email"
                            name="logemail"
                            class="form-style"
                            placeholder="Email"
                            id="logemail"
                            autocomplete="off"
                          />
                          <i class="input-icon uil uil-at"></i>
                        </div>
                        <div class="form-group mt-2">
                          <input
                            type="password"
                            name="logpass"
                            class="form-style"
                            placeholder="Password"
                            id="logpass"
                            autocomplete="off"
                          />
                          <i class="input-icon uil uil-lock-alt"></i>
                        </div>
                        <a href="#" class="btn mt-4">submit</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name: "LoginView",
};
</script>
<style scoped>
@import url('../assets/login.css');
</style>