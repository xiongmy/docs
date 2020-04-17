import Vue from 'vue';
import Router from 'vue-router';
import Course from './views/course/index.vue';
import CourseChildren from '@/router/course';
import CourseChildrenEn from '@/router/course-en';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      redirect: '/zh/course/course1-1',
      component: Course,
    },
    {
      path: '/zh/course',
      component: Course,
      redirect: '/zh/course/course1-1',
      children: CourseChildren,
    },
    {
      path: '/en/course',
      component: Course,
      redirect: '/en/course/course2-1',
      children: CourseChildrenEn,
    },
  ],
});
