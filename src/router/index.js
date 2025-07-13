import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/auth/LoginView.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/auth/RegisterView.vue')
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: () => import('../views/auth/ForgotPasswordView.vue')
  },
  {
    path: '/student-dashboard',
    name: 'StudentDashboard',
    component: () => import('../views/student/StudentDashboard.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/student/StudentProfile.vue')
  },
  {
    path: '/room-application',
    name: 'RoomApplication',
    component: () => import('../views/student/RoomApplication.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
