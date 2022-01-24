import { Router } from '@vaadin/router';

window.addEventListener('load', () => {
  initRouter();
});

const initRouter = () => {
  const githubRepo = '/RoutingDemo';
  const routerOutput = document.querySelector('#router-output');
  const router = new Router(routerOutput);
  router.setRoutes([
    { 
      path: `${githubRepo}/`,
      component: 'task-page'
    },
    {
      path: `${githubRepo}/index.html`,
      component: 'task-page'
    },   
    {
      path: `${githubRepo}/about`,
      component: 'about-info',
      action: () => import('../view/about-info/about-info')
    },
    {
      path: `${githubRepo}/tasks/:id`,
      component: 'task-form'
    },
    {
      path: '(.*)',
      component: 'page-not-found'
    }
  ]);
}