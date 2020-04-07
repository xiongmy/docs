import Course from './router.config';

function loadMdFile() {
  const mds = require.context('../components/course/', true, /[A-Za-z0-9-_,\s]+\.md$/i);
  const existMd = [];
  mds.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1 && matched[1].includes('en')) {
      const file = matched[1];
      existMd.push(file);
    }
  });
  return existMd;
}
/**
 * 过滤不存在的文件
 */
const files = loadMdFile();
const Routes = Course.filter(val => files.includes(`${val.path}-en`) && val);

const createRoutes = Routes.map(val => ({
  path: val.path,
  meta: {
    subTitle: val.subTitle,
    title: val.title,
  },
  component: () => import(`@/components/course/${val.component}-en.md`),
}));

export default createRoutes;
