import { defineConfig } from 'dumi';
import { readdirSync } from 'fs';
import { join } from 'path';

const pkgList = readdirSync(join(__dirname, 'packages')).filter(
  (pkg) => pkg.charAt(0) !== '.',
);
const alias = pkgList.reduce((pre: any, pkg) => {
  pre[`@pro-demo/${pkg}`] = join(__dirname, 'packages', pkg, 'src');
  return {
    ...pre,
  };
}, {});

const tailPkgList = pkgList.map((path) => `packages/${path}/src`);

export default defineConfig({
  alias,
  resolve: {
    docDirs: tailPkgList,
  },
  themeConfig: {
    nav: {
      'zh-CN': [{ title: '组件', link: '/components' }],
    },
    sidebar: {
      '/components': [
        {
          title: '基础组件',
          children: [
            {
              title: 'button',
              link: '/components/button',
            },
            {
              title: 'tag',
              link: '/components/tag',
            },
          ],
        },
      ],
    },
  },
});
