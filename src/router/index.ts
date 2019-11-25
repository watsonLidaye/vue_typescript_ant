const routes =  [
    {
      path: '/',
      name: 'home',
      component: (resolve:any) => require(['../views/Home.vue'], resolve),
    }
  ]
  export default routes