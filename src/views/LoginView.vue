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
                        <h4 class="mb-3 pb-3">Log In</h4>
                        <p v-if="warning">Wrong credentials, <br>please try again ♥</p>
                        <div class="form-group">
                          <input
                            type="email"
                            name="logemail"
                            class="form-style"
                            placeholder="Email"
                            id="logemail"
                            autocomplete="off"
                            v-model="email"
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
                            v-model="password"
                          />
                          <i class="input-icon uil uil-lock-alt"></i>
                        </div>
                        <a href="#" class="btn mt-4" @click="Login">submit</a>
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
                            placeholder="Full Name"
                            id="logname"
                            autocomplete="off"
                            v-model="username"
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
                            v-model="email"
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
                            v-model="password"
                          />
                          <i class="input-icon uil uil-lock-alt"></i>
                        </div>
                        <div class="form-group mt-2">
                          <input
                            type="password"
                            name="logpass"
                            class="form-style"
                            placeholder="Repet Password"
                            id="logpass"
                            autocomplete="off"
                            v-model="rep_password"
                          />
                          <i class="input-icon uil uil-lock-alt"></i>
                        </div>
                        <a href="#" class="btn mt-4" @click="Register">submit</a>
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
import axios from 'axios';
export default {
    name: "LoginView",
    data(){
        return{
            username: undefined,
            email: undefined,
            password: undefined,
            rep_password: undefined,
            warning: false
        }
    },
    methods:{
        Login(){
            axios.post('http://127.0.0.1:4444/api/login',
            {
                'email':this.email,
                'password':this.password
            }).then((response) =>{
                if(response.data.data.token){
                    localStorage.setItem('authToken',response.data.data.token);
                    this.$store.commit('Logged', true)
                    this.$router.push('/home');
                }
            }).catch((error)=>{
                console.log(error)
                this.warning = true
            })
        },
        Register(){
            axios.post('http://127.0.0.1:4444/api/register',{
                'name': this.username,
                'email': this.email,
                'password': this.password,
                'password_confirmation': this.rep_password
            }).then((response) => {
                console.log(response)
            }).catch((error)=>{
                console.log(error);
                this.warning = true;
            })
        }
    }
};
</script>
<style scoped>
@import url('../assets/login.css');
</style>