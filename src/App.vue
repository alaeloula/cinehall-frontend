<template>
  <navbar :isUser="isUser" />
  <router-view />
</template>

<script>
import Cookies from "vue-cookies";
import navbar from './components/navbar.vue';
export default {
  components: {
    navbar
  },
  data() {
    return {
      isUser: false
    }
  },
  watch: {
    $route(to, from) {
      if (!Cookies.get('token')) {
        this.isUser = false;
      }
      else {
        this.isUser = true;
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
