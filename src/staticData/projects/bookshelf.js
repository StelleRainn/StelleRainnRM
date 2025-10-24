import { ref } from 'vue'

import pnpmdev from '@/assets/images/bookshelf/pnpmdev.png'
import elAutoImport from '@/assets/images/bookshelf/el-auto-import.png'
import vue3LogoPure1 from '@/assets/images/bookshelf/vue3LogoPure1.png'
import elPlusLogoPure1 from '@/assets/images/bookshelf/elPlusLogoPure1.png'
import piniaLogoPure1 from '@/assets/images/bookshelf/piniaLogoPure1.png'
import vuerouter4PureLogoPure1 from '@/assets/images/bookshelf/vuerouter4LogoPure1.png'
import axiosLogo from '@/assets/images/shoppingMall/axios-logo.png'
import gitLogoPure1 from '@/assets/images/bookshelf/gitLogoPure1.png'
import piniaPersist from '@/assets/images/bookshelf/piniaPersist.png'
import vercelDepolyment from '@/assets/images/bookshelf/vercel-deployment.png'
import axiosInterceptors from '@/assets/images/bookshelf/axios-interceptors.png'
import vueQuill from '@/assets/images/bookshelf/vue-quill.png'
import vueRouter4Code from '@/assets/images/bookshelf/vueRouter4Code.png'
import gitLog from '@/assets/images/bookshelf/gitLog.png'

// 数组末尾填充冗余数据，动画循环时“以假乱真”
export const featureList = ref([
  'Composition API',
  'Vue Router',
  'Single Page Application',
  'Element Plus',
  'Pinia',
  'Axios',
  'Git',
  'Husky',
  'Vue Quill',
  'EsLint',
  'Composition API',
  'Vue Router'
])

export const highlights = ref([
  {
    imgUrl: vue3LogoPure1,
    title: 'Vue3 组合式API',
    desc: '全面采用Vue3组合式API开发，代码逻辑更清晰，复用性更强，开发效率显著提升'
  },
  {
    imgUrl: elPlusLogoPure1,
    title: 'Element Plus UI',
    desc: '基于Element Plus构建现代化管理界面，组件丰富，交互流畅，用户体验优秀'
  },
  {
    imgUrl: piniaLogoPure1,
    title: 'Pinia状态管理',
    desc: '使用Pinia实现状态持久化管理，数据流清晰，支持用户登录状态保持'
  },
  {
    imgUrl: vuerouter4PureLogoPure1,
    title: 'SPA单页应用',
    desc: '基于Vue Router 4构建SPA应用，路由导航守卫保护，页面切换流畅无刷新'
  },
  {
    imgUrl: gitLogoPure1,
    title: '完整CRUD功能',
    desc: '实现文章管理、分类管理、用户管理等完整业务功能，涵盖增删改查操作'
  },
  {
    imgUrl: vue3LogoPure1,
    title: '富文本编辑器',
    desc: '集成Vue Quill富文本编辑器，支持图片上传，为内容创作提供专业工具'
  },
  {
    imgUrl: axiosLogo,
    title: 'HTTP请求封装',
    desc: '基于Axios封装完整请求库，统一错误处理，支持token自动管理'
  },
  {
    imgUrl: gitLogoPure1,
    title: '工程化规范',
    desc: '集成ESLint、Prettier、Husky等工具，确保代码质量和团队协作规范'
  }
])

export const introItemList = ref([
  {
    id: 'vue3-framework',
    label: 'Vue.js 3',
    slogan: '组合式API <br /> 现代化开发体验',
    desc: `项目基于 <strong>Vue.js 3</strong> 构建，充分利用了组合式API的优势。相比Vue 2的选项式API，<strong>组合式API</strong>让逻辑复用更加灵活，代码组织更加清晰。项目中广泛使用了 <strong>ref</strong>、<strong>reactive</strong> 等响应式API，以及 <strong>computed</strong>、<strong>watch</strong> 等组合函数，实现了高效的数据管理。结合 <strong>Vite</strong> 构建工具，开发服务器启动速度极快，热更新响应迅速，大幅提升了开发体验。`,
    bannerPicUrl: pnpmdev,
    bannerPicFootage: '* 使用 pnpm dev 命令即可快速启动开发服务器，速度相比 WebPack 更是飞跃',
    emphasizeList: [
      {
        emTitle: '组合式API',
        emDesc: `使用 <strong>setup</strong> 语法糖，代码更简洁，逻辑更清晰，便于维护和测试`
      },
      {
        emTitle: '响应式系统',
        emDesc: `通过 <strong>ref</strong> 和 <strong>reactive</strong> 创建响应式数据，自动追踪依赖变化`
      },
      {
        emTitle: 'Vite构建',
        emDesc: `基于 <strong>Vite</strong> 的极速构建，开发服务器秒级启动，热更新毫秒响应`
      }
    ]
  },
  {
    id: 'element-plus',
    label: 'Element Plus',
    slogan: '企业级UI组件库 <br /> 开箱即用',
    desc: `采用 <strong>Element Plus</strong> 作为UI组件库，为项目提供了丰富的企业级组件。通过 <strong>unplugin-auto-import</strong> 和 <strong>unplugin-vue-components</strong> 实现了组件的按需自动导入，既保证了开发效率，又优化了打包体积。项目中使用了表格、表单、弹窗、抽屉等多种组件，构建了完整的后台管理界面。支持 <strong>中文国际化</strong>，提供了良好的用户体验。`,
    bannerPicUrl: elAutoImport,
    bannerPicFootage: '* 自动导入配置让组件使用更加便捷',
    emphasizeList: [
      {
        emTitle: '丰富组件',
        emDesc: `包含 <strong>表格、表单、弹窗</strong> 等60+组件，满足各种业务场景需求`
      },
      {
        emTitle: '按需导入',
        emDesc: `通过插件实现 <strong>自动按需导入</strong>，减少打包体积，提升性能`
      },
      {
        emTitle: '主题定制',
        emDesc: `支持 <strong>SCSS变量</strong> 定制主题，轻松适配品牌色彩方案`
      }
    ]
  },
  {
    id: 'pinia-store',
    label: 'Pinia 状态管理',
    slogan: '轻量状态管理 <br /> 数据持久化',
    desc: `使用 <strong>Pinia</strong> 作为状态管理库，相比Vuex更加轻量和直观。项目中实现了用户信息的状态管理，包括 <strong>token管理</strong>、<strong>用户信息存储</strong> 等功能。通过 <strong>pinia-plugin-persistedstate</strong> 插件实现了状态持久化，用户刷新页面后登录状态依然保持。采用组合式API风格，状态管理代码更加清晰易懂。`,
    bannerPicUrl: piniaPersist,
    bannerPicFootage: '* 状态持久化确保用户体验的连续性',
    emphasizeList: [
      {
        emTitle: '轻量设计',
        emDesc: `相比Vuex更加 <strong>轻量简洁</strong>，没有mutations概念，直接修改state`
      },
      {
        emTitle: '持久化存储',
        emDesc: `集成 <strong>persistedstate插件</strong>，自动将状态保存到localStorage`
      },
      {
        emTitle: 'TypeScript支持',
        emDesc: `原生支持 <strong>TypeScript</strong>，提供完整的类型推导和检查`
      }
    ]
  },
  {
    id: 'vue-router',
    label: 'Vue Router 4',
    slogan: '单页应用路由 <br /> 导航守卫保护',
    desc: `基于 <strong>Vue Router 4</strong> 构建单页应用，实现了完整的路由系统。项目采用 <strong>嵌套路由</strong> 结构，主布局包含侧边栏导航，子路由渲染具体页面内容。通过 <strong>路由懒加载</strong> 优化首屏加载性能，使用 <strong>导航守卫</strong> 实现登录状态检查，未登录用户自动跳转到登录页面。支持 <strong>History模式</strong>，URL更加美观。`,
    bannerPicUrl: vueRouter4Code,
    bannerPicFootage: '* 导航守卫确保应用安全性',
    emphasizeList: [
      {
        emTitle: '嵌套路由',
        emDesc: `采用 <strong>嵌套路由</strong> 结构，布局组件与页面组件分离，结构清晰`
      },
      {
        emTitle: '懒加载',
        emDesc: `路由组件 <strong>按需加载</strong>，减少首屏加载时间，提升用户体验`
      },
      {
        emTitle: '导航守卫',
        emDesc: `实现 <strong>全局前置守卫</strong>，自动检查登录状态，保护私有路由`
      }
    ]
  },
  {
    id: 'business-features',
    label: '完整业务功能',
    slogan: '文章管理系统 <br /> CRUD操作完备',
    desc: `项目实现了完整的文章管理系统功能，包括 <strong>文章管理</strong>、<strong>分类管理</strong>、<strong>用户管理</strong> 等核心模块。支持文章的增删改查操作，提供了 <strong>分页查询</strong>、<strong>条件筛选</strong>、<strong>状态管理</strong> 等实用功能。集成了 <strong>Vue Quill</strong> 富文本编辑器，支持图片上传和富文本内容编辑。用户管理模块包含个人信息修改、头像上传、密码重置等功能。`,
    bannerPicUrl: vueQuill,
    bannerPicFootage: '* 富文本编辑器提供专业的内容创作体验',
    emphasizeList: [
      {
        emTitle: '文章管理',
        emDesc: `完整的 <strong>CRUD操作</strong>，支持分页、筛选、状态管理等功能`
      },
      {
        emTitle: '富文本编辑',
        emDesc: `集成 <strong>Vue Quill</strong> 编辑器，支持图片上传和格式化文本`
      },
      {
        emTitle: '用户系统',
        emDesc: `包含 <strong>登录认证</strong>、个人信息管理、头像上传等完整功能`
      }
    ]
  },
  {
    id: 'http-axios',
    label: 'HTTP请求封装',
    slogan: 'Axios拦截器 <br /> 统一请求管理',
    desc: `基于 <strong>Axios</strong> 封装了完整的HTTP请求库，实现了请求和响应拦截器。请求拦截器自动添加 <strong>Authorization</strong> 头部，响应拦截器统一处理错误和401状态码。通过统一的错误处理机制，提升了用户体验和代码的可维护性。接口设计遵循 <strong>RESTful</strong> 规范，支持灵活的环境配置，代码结构清晰易维护。`,
    bannerPicUrl: axiosInterceptors,
    bannerPicFootage: '* 请求拦截器自动处理token认证',
    emphasizeList: [
      {
        emTitle: '拦截器设计',
        emDesc: `实现 <strong>请求/响应拦截器</strong>，自动处理token和错误状态`
      },
      {
        emTitle: '统一错误处理',
        emDesc: `集中处理 <strong>HTTP错误</strong> 和业务异常，提升用户体验`
      },
      {
        emTitle: 'RESTful API',
        emDesc: `遵循 <strong>RESTful</strong> 设计规范，接口语义清晰，易于理解`
      }
    ]
  },
  {
    id: 'engineering',
    label: '工程化配置',
    slogan: '代码规范 <br /> 自动化流程',
    desc: `项目采用了完整的前端工程化配置，使用 <strong>ESLint</strong> 进行代码质量检查，<strong>Prettier</strong> 统一代码格式。通过 <strong>Husky</strong> 配置Git钩子，在提交前自动执行代码检查。使用 <strong>lint-staged</strong> 只对暂存区文件进行检查，提高效率。配置了 <strong>EditorConfig</strong> 统一编辑器设置，确保团队开发的一致性。支持 <strong>PNPM</strong> 包管理，提升依赖安装速度。`,
    bannerPicUrl: gitLog,
    bannerPicFootage: '* 迭代开发',
    emphasizeList: [
      {
        emTitle: '代码规范',
        emDesc: `<strong>ESLint + Prettier</strong> 确保代码风格统一，提高代码质量`
      },
      {
        emTitle: 'Git钩子',
        emDesc: `<strong>Husky</strong> 配置pre-commit钩子，提交前自动检查代码`
      },
      {
        emTitle: '包管理',
        emDesc: `使用 <strong>PNPM</strong> 管理依赖，安装速度快，磁盘占用少`
      }
    ]
  },
  {
    id: 'build-deploy',
    label: '构建与部署',
    slogan: 'Vite构建 <br /> 多环境支持',
    desc: `项目基于 <strong>Vite</strong> 构建工具，享受极速的开发体验和高效的生产构建。配置了多环境支持，可以灵活切换开发、测试、生产环境。支持 <strong>Vercel一键部署</strong>，只需将 Github 对应仓库导入，便可自动处理路由关系，剩下的交给 Vercel。`,
    bannerPicUrl: vercelDepolyment,
    bannerPicFootage: '* 一键部署到 Vercel',
    emphasizeList: [
      {
        emTitle: '极速构建',
        emDesc: `<strong>Vite</strong> 提供毫秒级热更新和极速的生产构建体验`
      },
      {
        emTitle: '多环境配置',
        emDesc: `支持 <strong>开发/生产</strong> 环境配置，灵活适配不同部署需求`
      },
      {
        emTitle: '自动部署',
        emDesc: `集成 <strong>gh-pages</strong>，支持一键部署到GitHub Pages`
      }
    ]
  }
])
