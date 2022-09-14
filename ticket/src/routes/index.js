import Home from '../pages/Home';
import Manage from '../pages/Manage';
import Settings from '../pages/Settings';
import Ticket from '../pages/Ticket';

//public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/manage', component: Manage },
    { path: '/ticket', component: Ticket },
    { path: '/settings', component: Settings }
]

const privateRoutes = []

export { privateRoutes, publicRoutes }