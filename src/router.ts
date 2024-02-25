import Home from '@/routes/index.tsx';
import About from '@/routes/About.tsx';
import Contact from '@/routes/Contact.tsx';
import DefaultLayout from '@/layouts/Default.tsx';
import HogeLayout from '@/layouts/Hoge.tsx';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    layout: DefaultLayout,
  },
  {
    path: '/about',
    exact: true,
    component: About,
    layout: HogeLayout,
  },
  {
    path: '/contact',
    exact: true,
    component: Contact,
    layout: DefaultLayout,
  },
];

export default routes;
