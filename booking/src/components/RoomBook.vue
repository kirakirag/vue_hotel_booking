<template>
    <div>
      <h2>Make a Booking</h2>
      <form @submit.prevent="makeBooking">
        <input type="date" v-model="startDate" required>
        <input type="date" v-model="endDate" required>
        <button type="submit">Book</button>
      </form>
      <div v-if="message" class="message">{{ message }}</div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    props: ['roomId'],
    data() {
      return {
        startDate: '',
        endDate: '',
        message: ''
      };
    },
    methods: {
      makeBooking() {
        const authToken = localStorage.getItem('access_token');
        axios.post('http://localhost:8000/app/bookings/', {
          room: this.roomId,
          start_date: this.startDate,
          end_date: this.endDate
        }, {
          headers: { Authorization: `Bearer ${authToken}` }
        })
        .then(response => {
          this.message = 'Booking successful!\n Your booking number: ' + response.data['booking_number'];
        })
        .catch(error => {
          this.message = 'Booking failed.\n ' + error.response.data['error'];
        });
      }
    }
  };
  </script>
  