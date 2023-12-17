<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="register">
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email">
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password">
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
  <div v-if="error" class="error-message">{{ error }}</div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: null
    };
  },
  methods: {
    register() {
    const data = {
      email: this.email,
      password: this.password
    };
    axios.post('http://localhost:8000/app/register/', data)
      .then(response => {
        this.$router.push({ name: 'login' });
        console.log(response)
      })
      .catch(error => {
        this.error = "Registration failed: " + error.response.data['email'];
        console.log(error);
      });
    }
  }
};
</script>
