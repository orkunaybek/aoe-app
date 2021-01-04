import Home from '../pages/Home';
import Units from '../pages/Units';
import UnitDetail from '../pages/UnitDetail';

const routes = [
  {
    path: '/',
    component: Home,
    key: 'home',
  },
  {
    path: '/units',
    component: Units,
    key: 'units',
  },
  {
    path: '/units/:id',
    component: UnitDetail,
    key: 'unitsDetail',
  },
];
export default routes;
