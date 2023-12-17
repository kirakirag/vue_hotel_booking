<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email">
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password">
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    <div v-if="error" class="error-message">{{ error }}</div>
  </template>
  
  <script>
  import axios from 'axios';
  import authStore from '../store/auth';

  
  export default {
    data() {
      return {
        email: '',
        password: '',
        error: null
      };
    },
    methods: {
      login() {
        const data = {
          email: this.email,
          password: this.password
        };
        axios.post('http://localhost:8000/api/token/', data)
          .then(response => {
            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);
            authStore.methods.login(); // Update login state
            this.$router.push({ name: 'home' }); // Redirect to the home route
          })
          .catch(error => {
            this.error = "Invalid email or password";
            console.log(error);
          });
      }
    }
  };
  </script>
  