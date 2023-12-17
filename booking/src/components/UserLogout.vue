<template>
    <div>
      <button @click="logout">Logout</button>
    </div>
</template>
  
<script>
import authStore from '../store/auth';

export default {
  methods: {
    logout() {
      authStore.methods.logout();
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      this.$router.push({ name: 'home' });
    }
  }
};
</script>
