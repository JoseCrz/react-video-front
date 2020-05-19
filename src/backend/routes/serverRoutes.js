import Home from '../../frontend/containers/Home'
import Login from '../../frontend/containers/Login'
import Register from '../../frontend/containers/Register'
import Player from '../../frontend/containers/Player'
import NotFound from '../../frontend/containers/NotFound'

const routes = [
  {
    exact: true,
    path: '/',
    component: Home
  },
  {
    exact: true,
    path: '/login',
    component: Login
  },
  {
    exact: true,
    path: '/register',
    component: Register
  },
  {
    exact: true,
    path: '/player/:id',
    component: Player
  },
  {
    exact: true,
    path: '/player/:id',
    component: Player
  },
  {
    name: 'NotFound',
    component: NotFound
  }
]

export default routes