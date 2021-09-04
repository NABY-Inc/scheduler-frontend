import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Department from '../views/Department.vue'
import Courses from '../views/Courses.vue'
import Lecturers from '../views/lecturer/Index.vue'
import Venue from '../views/Venue.vue'
import Timestand from '../views/Timestand.vue'
import Schedule from '../views/Schedule.vue'
import ScheduleShow from '../views/ScheduleShow.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/department',
    name: 'Department',
    component: Department
  },
  {
    path: '/courses',
    name: 'Courses',
    component: Courses
  },
  {
    path: '/lecturers',
    name: 'Lecturers',
    component: Lecturers
  },
  {
    path: '/venue',
    name: 'Venue',
    component: Venue
  },
  {
    path: '/time-stand',
    name: 'Timestand',
    component: Timestand
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: Schedule
  },
  {
    path: '/show-schedule',
    name: 'ScheduleShow',
    component: ScheduleShow
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
