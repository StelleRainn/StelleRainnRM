import { ref } from 'vue'

import vue2Logo from '@/assets/images/shoppingMall/vue2-logo.png'
import vantLogo from '@/assets/images/shoppingMall/vant-logo.png'
import vueLogo from '@/assets/images/shoppingMall/vue-logo.png'
import vueRouter3Logo from '@/assets/images/shoppingMall/vue-router-3-logo.png'
import axiosLogo from '@/assets/images/shoppingMall/axios-logo.png'
import lessLogo from '@/assets/images/shoppingMall/less-logo.png'
import shoppingMallIndexBg from '@/assets/images/shoppingMall/shoppingMall-index-with-bg.png'
import githubLogo from '@/assets/images/shoppingMall/github-logo.png'

// 数组末尾填充冗余数据，动画循环时“以假乱真”
export const featureList = ref([
  'Vue Cli',
  'Vue Router 3',
  'Single Page Application',
  'Vant UI',
  'Vue X',
  'Axios',
  'Github Pages',
  'Less',
  'Vue Cli',
  'Vue Router 3'
])

export const highlights = ref([
  {
    imgUrl: vue2Logo,
    title: 'Vue2 + Vue CLI',
    desc: '基于Vue2框架与Vue CLI脚手架构建。完整的SPA单页应用架构，组件化开发思维贯穿始终'
  },
  {
    imgUrl: vantLogo,
    title: 'Vant UI 移动端',
    desc: '采用Vant UI组件库打造原生移动端体验。按需引入优化包体积，触控交互流畅自然'
  },
  {
    imgUrl: vueLogo,
    title: 'Vuex 状态管理',
    desc: '模块化Vuex架构管理复杂状态。购物车、用户信息等核心数据流转井然有序'
  },
  {
    imgUrl: vueRouter3Logo,
    title: '路由懒加载',
    desc: '智能路由懒加载策略。首屏加载速度提升，页面切换丝滑流畅'
  },
  {
    imgUrl: axiosLogo,
    title: '真实接口对接',
    desc: '完整的后端API对接体验。请求拦截、响应处理、错误提示一应俱全'
  },
  {
    imgUrl: lessLogo,
    title: 'Less 样式预处理',
    desc: '使用Less预处理器编写样式。嵌套语法与变量管理让CSS开发更加高效'
  },
  {
    imgUrl: shoppingMallIndexBg,
    title: '移动端适配',
    desc: '基于postcss-px-to-viewport的完美适配方案。多设备尺寸下视觉效果统一'
  },
  {
    imgUrl: githubLogo,
    title: 'GitHub Pages部署',
    desc: '一键部署至GitHub Pages。完整的CI/CD工作流，项目上线轻松便捷'
  }
])

export const introItemList = ref([
  {
    id: 'vue2-framework',
    label: 'Vue.js 2',
    slogan: '渐进式框架 <br /> 稳定可靠，生产就绪',
    desc: `项目采用 <strong>Vue.js 2</strong> 作为核心开发框架，这是一个在生产环境中久经考验的稳定版本。通过 <strong>Vue CLI</strong> 脚手架快速搭建项目架构，内置了完整的开发工具链。项目充分运用了Vue2的核心特性：<strong>响应式数据绑定</strong>、<strong>组件化开发</strong>、<strong>指令系统</strong>等，构建了一个功能完整的单页应用。配合 <strong>Vue Router</strong> 实现页面路由管理，<strong>Vuex</strong> 进行状态管理，形成了完整的Vue生态技术栈，为复杂的电商业务逻辑提供了坚实的技术基础。`,
    bannerPicUrl: vue2Logo,
    bannerPicFootage: '* Vue CLI 一键生成项目结构，开发效率显著提升',
    emphasizeList: [
      {
        emTitle: '组件化架构',
        emDesc: `采用 <strong>单文件组件</strong> 开发模式，代码结构清晰，复用性强`
      },
      {
        emTitle: '响应式数据',
        emDesc: `基于 <strong>Object.defineProperty</strong> 的响应式系统，数据变化自动更新视图`
      },
      {
        emTitle: '生态完整',
        emDesc: `Vue Router + Vuex + Vue CLI 完整技术栈，<strong>开箱即用</strong>`
      }
    ]
  },
  {
    id: 'vant-mobile',
    label: 'Vant UI 移动端组件库',
    slogan: '轻量高效，<br /> 移动优先。',
    desc: `项目采用 <strong>Vant UI</strong> 作为移动端组件库，专为移动端场景精心设计。通过 <strong>按需引入</strong> 的方式优化包体积，仅引入项目实际使用的组件如NavBar、Button、Toast、ActionSheet等。Vant提供了丰富的移动端交互组件，从基础的按钮、输入框到复杂的购物车、支付流程，都有对应的高质量组件支持。组件设计遵循移动端交互规范，<strong>触控体验</strong>流畅自然，为用户提供了接近原生App的使用体验。`,
    bannerPicUrl: vue2Logo,
    bannerPicFootage: '* 50+ 高质量组件，覆盖移动端开发的各种场景',
    emphasizeList: [
      {
        emTitle: '按需加载',
        emDesc: `通过 <strong>babel-plugin-import</strong> 实现按需引入，有效控制包体积`
      },
      {
        emTitle: '移动优先',
        emDesc: `专为移动端设计，<strong>触控交互</strong>体验接近原生应用`
      },
      {
        emTitle: '主题定制',
        emDesc: `支持 <strong>Less变量</strong> 定制主题，轻松适配品牌风格`
      }
    ]
  },
  {
    id: 'vuex-state',
    label: 'Vuex 状态管理',
    slogan: '状态集中，<br /> 数据有序。',
    desc: `采用 <strong>Vuex</strong> 进行全局状态管理，将复杂的应用状态集中管理。项目中实现了 <strong>模块化</strong> 的Vuex架构，将用户信息(user)和购物车(cart)等不同业务逻辑分离到独立模块中。购物车模块实现了商品添加、删除、数量修改、全选等复杂交互逻辑，通过 <strong>getters</strong> 计算派生状态如总价、总数量等。状态变更严格遵循单向数据流，通过 <strong>mutations</strong> 同步修改状态，<strong>actions</strong> 处理异步操作，确保数据流转的可预测性和可维护性。`,
    bannerPicUrl: vue2Logo,
    bannerPicFootage: '* 模块化状态管理，复杂业务逻辑井然有序',
    emphasizeList: [
      {
        emTitle: '模块化设计',
        emDesc: `按业务功能拆分模块，<strong>user</strong> 和 <strong>cart</strong> 模块职责清晰`
      },
      {
        emTitle: '计算属性',
        emDesc: `通过 <strong>getters</strong> 实现购物车总价、总数量等派生状态计算`
      },
      {
        emTitle: '数据流规范',
        emDesc: `严格遵循 <strong>单向数据流</strong>，状态变更可追踪可预测`
      }
    ]
  },
  {
    id: 'router-lazy',
    label: 'Vue Router 与懒加载',
    slogan: '路由智能，<br /> 性能卓越。',
    desc: `项目采用 <strong>Vue Router</strong> 构建单页应用的路由系统，实现了页面间的无刷新切换。通过 <strong>路由懒加载</strong> 技术，将不同页面组件按需加载，显著提升首屏加载速度。配置了完整的路由守卫机制，实现了 <strong>登录状态检查</strong> 和权限控制。支持 <strong>动态路由参数</strong>，如商品详情页的商品ID传递。嵌套路由设计让布局组件与内容组件分离，底部导航栏(Tabbar)与页面内容独立管理，提升了代码的可维护性。`,
    bannerPicUrl: vue2Logo,
    bannerPicFootage: '* 路由懒加载 + 导航守卫，性能与安全并重',
    emphasizeList: [
      {
        emTitle: '懒加载优化',
        emDesc: `通过 <strong>动态import</strong> 实现组件懒加载，首屏性能大幅提升`
      },
      {
        emTitle: '权限控制',
        emDesc: `<strong>beforeEach</strong> 导航守卫实现登录状态检查和页面访问控制`
      },
      {
        emTitle: '嵌套路由',
        emDesc: `Layout布局与子页面分离，<strong>代码结构</strong>清晰易维护`
      }
    ]
  },
  {
    id: 'api-integration',
    label: '真实后端接口对接',
    slogan: '接口规范，<br /> 数据流畅。',
    desc: `项目与真实的后端API进行对接，实现了完整的前后端分离开发模式。基于 <strong>Axios</strong> 封装了统一的请求工具，配置了请求和响应拦截器。请求拦截器自动添加 <strong>Loading状态</strong> 和 <strong>Token认证</strong>，响应拦截器统一处理错误信息和成功提示。API模块化管理，将不同业务的接口分别封装到address、cart、category、home、login、order、product、user等模块中，接口调用清晰明确。支持商品列表、详情查询、购物车操作、订单管理、用户认证等完整的电商业务流程。`,
    bannerPicUrl: vue2Logo,
    bannerPicFootage: '* 完整的API对接体验，从登录到支付全流程覆盖',
    emphasizeList: [
      {
        emTitle: '请求拦截',
        emDesc: `自动添加 <strong>Loading效果</strong> 和 <strong>Token认证</strong>，用户体验流畅`
      },
      {
        emTitle: '模块化管理',
        emDesc: `按业务功能分离API模块，<strong>接口调用</strong>清晰有序`
      },
      {
        emTitle: '错误处理',
        emDesc: `统一的 <strong>错误提示</strong> 和异常处理机制，提升应用稳定性`
      }
    ]
  },
  {
    id: 'mobile-adaptation',
    label: '移动端适配方案',
    slogan: '一套代码，<br /> 多屏适配。',
    desc: `项目采用 <strong>postcss-px-to-viewport</strong> 实现移动端适配，将设计稿中的px单位自动转换为vw视口单位，确保在不同尺寸的移动设备上都能呈现一致的视觉效果。配合 <strong>Less预处理器</strong> 编写样式，通过变量、嵌套、混合等特性提升CSS开发效率。项目整体采用移动优先的设计理念，所有交互都针对触屏操作进行了优化。通过合理的布局设计和响应式处理，确保从小屏手机到大屏平板都能获得良好的用户体验。`,
    bannerPicUrl: vue2Logo,
    bannerPicFootage: '* 基于viewport的适配方案，多设备完美呈现',
    emphasizeList: [
      {
        emTitle: 'viewport适配',
        emDesc: `<strong>postcss-px-to-viewport</strong> 自动转换单位，适配各种屏幕尺寸`
      },
      {
        emTitle: 'Less预处理',
        emDesc: `使用 <strong>Less</strong> 编写样式，变量管理和嵌套语法提升开发效率`
      },
      {
        emTitle: '触屏优化',
        emDesc: `所有交互针对 <strong>移动端触控</strong> 优化，操作体验自然流畅`
      }
    ]
  },
  {
    id: 'engineering',
    label: '工程化与部署',
    slogan: '开发规范，<br /> 部署便捷。',
    desc: `项目采用完整的前端工程化方案，基于 <strong>Vue CLI</strong> 构建工具链，内置了开发服务器、代码打包、代码检查等功能。使用 <strong>ESLint</strong> 进行代码规范检查，确保代码质量和团队协作的一致性。配置了 <strong>GitHub Pages</strong> 自动部署，通过gh-pages工具实现一键部署。项目支持多环境配置，开发环境和生产环境使用不同的publicPath配置。完整的package.json脚本管理，包含serve、build、lint、deploy等常用命令，开发流程标准化。`,
    bannerPicUrl: vue2Logo,
    bannerPicFootage: '* 从开发到部署的完整工程化体验',
    emphasizeList: [
      {
        emTitle: '代码规范',
        emDesc: `<strong>ESLint</strong> 确保代码质量，团队协作更加高效`
      },
      {
        emTitle: '自动部署',
        emDesc: `<strong>GitHub Pages</strong> 一键部署，项目上线轻松便捷`
      },
      {
        emTitle: '多环境支持',
        emDesc: `开发和生产环境 <strong>配置分离</strong>，部署灵活可控`
      }
    ]
  }
])
