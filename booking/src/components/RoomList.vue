<template>
    <div>
      <h1>Room List</h1>
      <ul>
        <li v-for="room in rooms" :key="room.id">
            {{ room.name }} - {{ room.price_per_night }} - {{ room.capacity }}
            <button @click="bookRoom(room.id)">Book</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        rooms: []
      };
    },
    created() {
      axios.get('http://localhost:8000/app/rooms/')
        .then(response => {
          this.rooms = response.data;
        })
        .catch(error => {
          console.error("There was an error!", error);
        });
    },
    methods: {
        bookRoom(roomId) {
        if (this.isLoggedIn) {
            this.$router.push({ name: 'booking', params: { roomId: roomId } });
        } else {
            this.$router.push({ name: 'login' });
        }
        }
    },
    computed: {
        isLoggedIn() {
        return localStorage.getItem('access_token') !== null;
        }
  }
  };
  </script>
  