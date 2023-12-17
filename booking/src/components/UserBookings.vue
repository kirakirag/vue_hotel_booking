<template>
    <div>
      <h2>Your Bookings</h2>
      <ul>
        <li v-for="booking in bookings" :key="booking.booking_number">
          {{ booking.booking_number }} {{ booking.room_detail.name }} - From: {{ booking.start_date }} To: {{ booking.end_date }}
          <button @click="cancelBooking(booking.booking_number)">Cancel</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        bookings: []
      };
    },
    created() {
      const authToken = localStorage.getItem('access_token');
      axios.get('http://localhost:8000/app/bookings/', {
        headers: { Authorization: `Bearer ${authToken}` }
      })
      .then(response => {
        this.bookings = response.data;
      })
      .catch(error => {
        console.error(error);
      });
    },
    methods: {
      cancelBooking(bookingId) {
        const authToken = localStorage.getItem('access_token');
        axios.post(`http://localhost:8000/app/bookings/${bookingId}/cancel/`, {}, {
          headers: { Authorization: `Bearer ${authToken}` }
        })
        .then(() => {
          this.bookings = this.bookings.filter(booking => booking.id !== bookingId);
        })
        .catch(error => {
          console.error(error);
        });
      }
    }
  };
  </script>
  