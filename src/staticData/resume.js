import { ref } from 'vue'

import avatarImg from '@/assets/images/general/avatar.jpeg'
import bookshelfResmBg from '@/assets/images/bookshelf/bookshelfResmBg.png'
import shoppingMallResmBg from '@/assets/images/shoppingMall/shoppingMallResmBg.png'
import xtxResmBg from '@/assets/images/xtx/xtxResmBg.png'
import weraceResmBg from '@/assets/images/werace/weraceResmBg.png'
import bilibliResmBg from '@/assets/images/bilibili/bilibiliResmBg.png'

export const avatar = avatarImg

export const skillsList = ref([
  { name: '主技术栈', contents: ['HTML5', 'CSS3', 'JavaScript(ES6+)', 'Vue.js 2 & 3 基础'] },
  { name: '工作流', contents: ['Git 基础', 'Vite 基础', 'Webpack 基础(了解)', 'Node.js 基础(了解)'] },
  { name: 'AI / Prompt 编程 / 工具', contents: ['Trae IDE (AI集成IDE)', 'ChatGPT-5', 'Claude Sonnet 4.5', 'Gemini'] },
  { name: '职业证书', contents: ['软考中级-软件设计师（2024 年 11 月）'] },
  { name: '其他代码', contents: ['Python基础', 'C++程序设计', 'Java面向对象基础'] },
  { name: '英语能力', contents: ['CET-6: 508 (2024)', 'CET-4: 558 (2023)'] }
])

export const projectDetails = ref([
  {
    projectName: '蔷薇丛的小书架',
    projectBgUrl: bookshelfResmBg,
    shadowColor: '#7298be',
    projectDesc: [
      '基于Vue3 Composition API + Element Plus开发的在线图书管理系统，实现了完整的CRUD功能，包括文章管理、分类管理和用户管理',
      '采用Vite构建工具提供极速开发体验，使用Pinia实现状态持久化管理，支持用户登录状态保持',
      '基于Axios封装完整HTTP请求库，统一错误处理，支持token自动管理，提升开发效率',
      '集成Vue Quill富文本编辑器，支持图片上传，为内容创作提供专业工具',
      '使用Vue Router 4构建SPA单页应用，实现路由导航守卫保护，页面切换流畅无刷新',
      '集成ESLint、Prettier、Husky等工具，确保代码质量和团队协作规范'
    ]
  },
  {
    projectName: '智慧商城',
    projectBgUrl: shoppingMallResmBg,
    shadowColor: '#4dcaf7',
    projectDesc: [
      '基于Vue2 + Vue CLI构建的完整SPA单页应用，采用组件化开发思维贯穿始终',
      '使用Vant UI组件库打造原生移动端体验，按需引入优化包体积，触控交互流畅自然',
      '采用模块化Vuex架构管理复杂状态，购物车、用户信息等核心数据流转井然有序',
      '实现路由懒加载，优化首屏加载速度，提升用户体验',
      '使用Axios封装HTTP请求，统一处理接口数据和错误信息，提高代码可维护性',
      '采用Less预处理器组织CSS，提升样式开发效率，实现主题定制',
      '项目部署在GitHub Pages，实现零成本托管，支持CI/CD自动化部署流程'
    ]
  },
  {
    projectName: '小兔鲜儿',
    projectBgUrl: xtxResmBg,
    shadowColor: '#ff7a95',
    projectDesc: [
      '使用HTML5语义化标签构建页面结构，提升代码可读性和SEO友好性',
      '运用CSS3现代特性，实现渐变、过渡动画等视觉效果，打造流畅的用户体验',
      '全面采用Flexbox弹性布局系统，轻松实现响应式页面和复杂对齐效果',
      '编写标准化的CSS Reset，消除浏览器默认样式差异，确保跨浏览器一致性',
      '集成IconFont图标库，矢量图标加载快速、灵活可控，提升页面性能',
      '将样式文件拆分为base、common、index三层，提高代码复用性和可维护性'
    ]
  },
  {
    projectName: 'WeRace',
    projectBgUrl: weraceResmBg,
    shadowColor: '#7d2848',
    projectDesc: [
      '基于PHP构建的服务端架构，采用面向过程的开发模式，实现用户认证、数据处理等核心功能',
      '精心设计的MySQL关系型数据库架构，完美符合第三范式设计（3NF），包含8张核心数据表，支持用户、车队、赛事、社交等完整业务流程',
      '采用HTML5+CSS3技术栈，打造现代化响应式用户界面，兼容多种设备尺寸',
      '使用SCSS预处理器构建模块化样式系统，提升代码可维护性和开发效率',
      '实现完善的Session会话管理，确保用户登录状态安全可靠',
      '采用jQuery+AJAX技术实现无刷新数据交互，提升用户体验'
    ]
  },
  {
    projectName: 'B站首页复刻',
    projectBgUrl: bilibliResmBg,
    shadowColor: '#fc7498',
    projectDesc: [
      '使用原生HTML/CSS构建页面结构，每一个像素都承载着初学者的虔诚与执着',
      '通过JavaScript实现轮播图切换、无限滚动、悬浮效果等交互功能',
      '运用Flexbox布局，让页面在不同屏幕尺寸下都能优雅呈现',
      '将CSS和JS按功能拆分，初步体验了代码组织的重要性',
      '在JavaScript尚未熟练的阶段，通过精心设计的Prompt完成复杂交互功能，体现了AI辅助编程的应用',
      '从导航栏到视频卡片，精心复刻B站首页的每一个视觉元素，实现微交互设计'
    ]
  }
])
