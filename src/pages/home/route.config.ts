import { RouteConfig } from '../../routes/types';
import Home from './Home';

const homeRoute: RouteConfig = {
  name: 'home',
  path: '/',
  component: Home,
  public: true,
};

export default homeRoute; 