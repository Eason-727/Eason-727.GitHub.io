import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "57D02",
  
  description: "A VitePress Site",
  themeConfig: {
    // 全局背景图
    bgImage: {
      src: '',
      alt: '57D02'
    },
    // 首页配置
    mainTitle: '57D02',
    subTitles: ['全栈开发爱好者', '算法优化爱好者', '软件开发爱好者', '安卓与嵌入式开发爱好者'],
    defaultauthor: '57D02',
    // 网站顶部导航栏配置
    logo: "https://resource-un4.pages.dev/article/yjtp.webp",
    siteTitle: '57D02',
    menuItems: [
      {
        label: '我的网址',
        icon: 'fal fa-browser',
        children: [
          {
            key: 'action1',
            label: '闪装智拼',
            icon: 'fas fa-cubes',
            link: 'https://box.57d02.cn'
          },
          {
            key: 'action2',
            label: 'alist云盘',
            icon: 'fa-solid fa-square',
            link: 'https://alist.57d02.cn'
          },
        ]
      },
      {
        label: '更多功能',
        icon: 'fa-solid fa-list',
        children: [
          {
            key: 'action1',
            label: '404测试',
            icon: 'fa-solid fa-circle',
            link: '404'
          },
          {
            key: 'action2',
            label: '关于',
            icon: 'fa-solid fa-square',
            link: 'about/index'
          },
          {
            key: 'action3',
            label: '归档',
            icon: 'fa-solid fa-star',
            link: 'posts/hahha'
          }
        ]
      }
      
    ],
    // 侧边信息栏配置
    avatar: "https://resource-un4.pages.dev/article/yjtp.webp",
    name: '57D02',
    position: '全栈开发、优化算法爱好者',
    bio: '呜呜呜呜呜呜',
    socialLinks: [
      {
        name: 'GitHub',
        icon: 'fa-brands fa-github',
        url: 'https://github.com/57Darling02/'
      },
      {
        name: '邮箱',
        icon: 'fa-regular fa-envelope',
        url: '57Darling02@outlook.com'
      },
    ],
    // 站点页脚配置
    footer: {
      message: "VitePress",
      copyright: "Copyright © 2025-present 57D02",
    },
    // https://vitepress.dev/reference/default-theme-config
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
  }
})
