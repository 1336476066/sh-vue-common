// .vuepress/config.js
const path = require("path");
console.log(path.resolve(__dirname, './components'))
module.exports = {
  themeConfig: {
    sidebar: [
      {
        title: '按钮',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          {
            title: 'Button 按钮1',
            collapsable: true,
            path: '/docs/Card',
          },
          {
            title: 'Button 按钮2',
            collapsable: true,
            path: '/docs/Button',
          }
        ]
      },
    ]
  },
  plugins: [
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, '../../src/components'),
      }
    ]
  ]
}