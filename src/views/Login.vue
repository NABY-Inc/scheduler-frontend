<template>
  <!-- BEGIN: Content-->
    <div class="app-content content">
      <div class="content-overlay"></div>
      <div class="content-wrapper">
        <div class="content-header row"></div>
        <div class="content-body"><!-- login page start -->
            <section id="auth-login" class="row flexbox-container">
                <div class="col-xl-8 col-11">
                    <div class="card bg-authentication mb-0">
                        <div class="row m-0">
                            <!-- left section-login -->
                            <div class="col-md-6 col-12 px-0">
                                <div class="card disable-rounded-right mb-0 p-2 h-100 d-flex justify-content-center">
                                    <div class="card-header pb-1">
                                        <div class="card-title">
                                            <h4 class="text-center mb-2">Welcome Back</h4>
                                            <small class="text-center text-danger" v-if="login_error">INVALID LOGIN CREDENTIALS</small>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <form @submit.prevent="login">
                                            <div class="form-group mb-50">
                                                <label class="text-bold-600" for="exampleInputEmail1">Username</label>
                                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Username" v-model="username" required></div>
                                                <small class="text-danger float-right" v-if="error">Username Field is required!</small>
                                            <div class="form-group">
                                                <label class="text-bold-600" for="exampleInputPassword1">Password</label>
                                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password" required>
                                                <small class="text-danger float-right mb-2" v-if="error">Password Field is required!</small>
                                            </div>
                                            <!-- <div class="form-group d-flex flex-md-row flex-column justify-content-between align-items-center">
                                                <div class="text-left">
                                                    <div class="checkbox checkbox-sm">
                                                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                                        <label class="checkboxsmall" for="exampleCheck1"><small>Keep me logged
                                                                in</small></label>
                                                    </div>
                                                </div>
                                            </div> -->
                                            <button type="submit" v-if="!isLoading" class="btn btn-primary glow w-100 position-relative">Login<i id="icon-arrow" class="bx bx-right-arrow-alt"></i></button>
                                            <button type="submit" v-else class="btn btn-primary glow w-100 position-relative" disabled><i class="bx bx-loader bx-spin"></i> Please wait..</button>
                                            <!-- <button type="submit" class="btn btn-primary glow w-100 position-relative">Login
                                                <i id="icon-arrow" class="bx bx-right-arrow-alt"></i>
                                            </button> -->
                                            <!-- {{-- <button type="submit" class="btn btn-primary glow w-100 position-relative">Login
                                                <i id="icon-arrow" class="bx bx-right-arrow-alt"></i>
                                            </button> --}} -->
                                        </form>
                                        <hr>
                                    </div>
                                </div>
                            </div>
                            <!-- right section image -->
                            <div class="col-md-6 d-md-block d-none text-center align-self-center p-3">
                                <img class="img-fluid" src="/app-assets/images/pages/login.png" alt="branding logo">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- login page ends -->
        </div>
      </div>
    <router-view/>
    </div>
    <!-- END: Content-->
</template>

<script>
import { mapState } from "vuex";
export default {
  name: 'Login',
  data(){
      return{
          username:null,
          password:null,
          error:false,
          isLoading:false,
      }
  },

    computed:{
        ...mapState('user',['login_error'])
    },

    watch:{
        login_error(login_error){
            return login_error
        }
    },

    methods:{
        login(){
            this.isLoading = true
            if (!this.username || !this.password) {
                this.error = true
                this.isLoading = false
            } else {
                this.$store.dispatch('user/login',{username:this.username,password:this.password}).then(()=>{
                    if (!this.login_error) {
                        this.$router.push('/dashboard')
                    }
                    this.isLoading = false
                })
            }
        }
    }
}
</script>
