<template>
    <nav>
      <router-link to="/">Home</router-link>
      <span v-if="isLoggedIn">
        <router-link to="/profile">Profile</router-link>
        <button @click="logout">Logout</button>
      </span>
      <span v-else>
        <router-link to="/login">Login</router-link>
        <router-link to="/register">Register</router-link>
      </span>
    </nav>
  </template>
  
  <script>
  import authStore from '../store/auth';
  export default {
    computed: {
    isLoggedIn() {
      return authStore.state.isLoggedIn;
    }
    },
    methods: {
      logout() {
        authStore.methods.logout();
        this.$router.push({ name: 'home' });
      }
    }
  };
  </script>
