const index1 = () => import(/* webpackChunkName: "index1" */ '@/components/api/update/index1.vue');
const index2 = () => import(/* webpackChunkName: "index2" */ '@/components/api/update/index2.vue');

export default [
  {
    path: 'update1',
    meta: {
      title: 'update1',
    },
    component: index1,
  },
  {
    path: 'update2',
    meta: {
      title: 'update2',
    },
    component: index2,
  },
  {
    path: 'update3',
    meta: {
      title: 'update3',
    },
    component: index2,
  },
];
