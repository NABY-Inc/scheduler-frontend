<template>
  <div>
    <div v-if="currentRouteName == 'Login'" class="horizontal-layout horizontal-menu navbar-static 1-column footer-static bg-full-screen-image  blank-page" data-open="hover" data-menu="horizontal-menu" data-col="1-column">
        <router-view/>
    </div>
    <div v-else class="horizontal-layout horizontal-menu navbar-static 2-columns footer-static" data-open="hover" data-menu="horizontal-menu" data-col="2-columns">
      <navbar :url="currentRouteName"/>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
      <!-- BEGIN: Content-->
      <div class="app-content content">
        <div class="content-overlay"></div>
          <router-view/>
      </div>

      <footer/>
    </div>
  </div>
  
</template>

<script>
// import * from "./public/app-assets/vendors/js/";
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
    components: {
    // Header,
    Navbar,
    Footer,
  },

  computed: {
    currentRouteName() {
          return this.$route.name;
      }
  }
}
</script>



<style scoped>

</style>
