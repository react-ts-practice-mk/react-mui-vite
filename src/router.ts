import Home  from '@/routes/index'
import About from '@/routes/About';
import Contact from '@/routes/Contact';
import DefaultLayout from '@/layouts/Default';
import HogeLayout from '@/layouts/Hoge';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    layout: DefaultLayout
  },
  {
    path: '/about',
    exact: true,
    component: About,
    layout: HogeLayout
  },
  {
    path: '/contact',
    exact: true,
    component: Contact,
    layout: DefaultLayout
  }
];

export default routes;