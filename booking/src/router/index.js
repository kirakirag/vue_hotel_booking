import { createRouter, createWebHistory } from 'vue-router';
import RoomList from '../components/RoomList.vue';
import UserLogin from '../components/UserLogin.vue';
import RoomBook from '../components/RoomBook.vue';
import UserLogout from '../components/UserLogout.vue'
import UserRegister from '../components/UserRegister.vue'
import UserBookings from '../components/UserBookings.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: RoomList
  },
  {
    path: '/login',
    name: 'login',
    component: UserLogin
  },
  {
    path: '/booking/:roomId',
    name: 'booking',
    component: RoomBook,
    props: true
  },
  {
    path: '/logout',
    name: 'logout',
    component: UserLogout,
  },
  {
    path: '/register',
    name: 'register',
    component: UserRegister,
  },
  {
    path: '/profile',
    name: 'profile',
    component: UserBookings,
  }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });

export default router;
