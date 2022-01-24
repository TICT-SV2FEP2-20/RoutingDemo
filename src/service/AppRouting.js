import { Router } from '@vaadin/router';

window.addEventListener('load', () => {
  initRouter();
});

const initRouter = () => {
  const urlPrefix = '/RoutingDemo';
  const routerOutput = document.querySelector('#router-output');
  const router = new Router(routerOutput);
  router.setRoutes([
    { 
      path: `${urlPrefix}/`,
      component: 'task-page'
    },
    {
      path: `${urlPrefix}/index.html`,
      component: 'task-page'
    },   
    {
      path: `${urlPrefix}/about`,
      component: 'about-info',
      action: () => import('../view/about-info/about-info')
    },
    {
      path: `${urlPrefix}/tasks/:id`,
      component: 'task-form'
    },
    {
      path: '(.*)',
      component: 'page-not-found'
    }
  ]);
}