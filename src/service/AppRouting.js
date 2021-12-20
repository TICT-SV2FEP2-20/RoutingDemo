import { Router } from '@vaadin/router';

window.addEventListener('load', () => {
  initRouter();
});

const initRouter = () => {
  const routerOutput = document.querySelector('#router-output');
  const router = new Router(routerOutput);
  router.setRoutes([
    { 
      path: '/',
      component: 'task-page'
    },
    {
      path: '/index.html',
      component: 'task-page'
    },   
    {
      path: '/about',
      component: 'about-info',
      action: () => import('../view/about-info/about-info')
    },
    {
      path: '(.*)',
      component: 'page-not-found'
    }
  ]);
}