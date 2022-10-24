<template>
  <div class="container-fluid login_body" @click="warning_login = false, warning_register = false">
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
              <div v-if="warning_login" class="warning_base">
                <div class="pt-4 warning_error">
                  <div class="alert alert-warning" role="alert">
                    Whoops! These credentials do not match!
                  </div>
                </div>
              </div>
              <div v-else-if="succes_login" class="succes_base">
                <div class="pt-4 warning_succes">
                  <div class="alert alert-succes" role="alert">
                    Welcome back {{name}} !!
                  </div>
                </div>
              </div>
              <div v-else-if="succes_register" class="succes_base">
                <div class="pt-4 warning_succes">
                  <div class="alert alert-succes" role="alert">
                    Congrats! You can now login into your account.
                  </div>
                </div>
              </div>
              <div v-else-if="warning_register" class="warning_base">
                <div class="pt-4 warning_error">
                  <div class="alert alert-warning" role="alert">
                    Whoops! Please check if both your passwords match <br> or if it's at least 8 characters c:
                  </div>
                </div>
              </div>
              <div class="card-3d-wrap mx-auto">
                <div class="card-3d-wrapper">
                  <div class="card-front">
                    <div class="center-wrap">
                      <div class="section text-center">
                        <h4 class="mb-3 pb-3">Log In</h4>
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
            warning_login: false,
            warning_register: false,
            succes_login: false,
            succes_register: false,
            name: undefined
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
                    this.name = response.data.data.user.name;
                    this.succes_login = true;
                    localStorage.setItem('authToken',response.data.data.token);
                    this.$store.commit('Logged', true)
                    this.$router.push('/home');
                }
            }).catch((error)=>{
                console.log(error)
                this.warning_login = true
            })
        },
        Register(){
            axios.post('http://127.0.0.1:4444/api/register',{
                'name': this.username,
                'email': this.email,
                'password': this.password,
                'password_confirmation': this.rep_password
            }).then((response) => {
              if(response.data.data.token){
                    this.succes_register = true;
                    localStorage.setItem('authToken',response.data.data.token);
                    this.$store.commit('Logged', true)
                }
            }).catch((error)=>{
                console.log(error);
                this.warning_register = true;
            })
        }
    }
};
</script>
<style scoped>
@import url('../assets/login.css');
</style>