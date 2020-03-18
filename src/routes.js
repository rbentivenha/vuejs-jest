import NamesList from './pages/NamesList';
import index from './pages/index';
import Registry from './pages/Registry';
import NotFound from './pages/404';

const routes = [
    { path: '/new', component: Registry },
    { path: '/list', component: NamesList },
    { path: '/', component: index },
    { path: '/*', component: NotFound }
]

export default routes;