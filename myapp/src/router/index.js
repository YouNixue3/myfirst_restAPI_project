// import Vue from 'vue'

// View
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Blogs from '../views/blogs/Blogs.vue'
import News from '../views/news/News.vue'
import indexFarm from '../views/hydroponic_farm/indexFarm.vue'
import Login from '../views/Auth/Login.vue'
// import IndexDashboard from '../views/dashboard/Index.vue'
// import Feed from '../views/dashboard/Feed.vue'

// // Layout
// import Sidebar from '../components/Sidebar.vue'


// let dashboardMenu = {
//   path: '/dashboard',
//   component: Sidebar,
//   redirect: '/dashboard/',
//   name: 'Dashboard',
//   children: [
//     {
//       path: '',
//       name: 'indexDashboard',
//       component: IndexDashboard
//     },
//     {
//       path: 'feed',
//       name: 'Feed',
//       component: Feed
//     }
//   ]
// };

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: Blogs
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/farm',
    name: 'Farm',
    component: indexFarm
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

export default routes
