import { ref } from 'vue'
import xiaoju1 from '@/assets/images/xiaoju-1.jpeg'
import forest1 from '@/assets/images/forest-1.jpeg'
import miku1 from '@/assets/images/miku-1.jpeg'
import furina1 from '@/assets/images/furina-1.jpeg'
import bannerPic from '@/assets/images/createvue.png'

export const highlights = ref([
  {
    imgUrl: xiaoju1,
    title: 'Vue3框架',
    desc: '基于Vue3框架打造。广泛应用了 Vue3 基础知识点。组合式API使代码编写更加灵活'
  },
  {
    imgUrl: forest1,
    title: 'Pinia持久化',
    desc: '使用Pinia完成时持久化管理。一段非常长的文本宣泄宣泄12额额2额而且委屈委屈额23456789我打完到位打完几个打卡给我的拉个我到了大啦我觉得拉跨给我来打卡公里外的过来拉开的结果我拉1'
  },
  { imgUrl: miku1, title: 'Vue Router', desc: 'SPA开发。在Vue Router加持下，页面开发更符合思维逻辑习惯' },
  { imgUrl: furina1, title: '工程管理', desc: '完备的 Git 体系' }
])

// 数组末尾填充冗余数据，动画循环时“以假乱真”
export const featureList = ref([
  'Composition API',
  'Vue Router',
  'Single Page Application',
  'Element Plus',
  'Pinia',
  'Axios',
  'Composition API',
  'Vue Router'
])

// 技术点介绍
export const introItemList = ref([
  {
    id: 'framework',
    label: 'Vue.js 3',
    slogan: '渐进式框架 <br /> 快速上手，超高效率',
    desc: `项目使用 <strong>Vue.js 3</strong> 作为主要开发框架，相比 Vue 2，Vue 3 提供了许多方便的新特性，例如<strong
        >组合式 API</strong
      >、<strong>内置语法糖</strong>、<strong>更高效的响应式系统</strong>，极大提高了项目的开发效率和灵活性。借助
      <strong>Vite</strong> 这一新一代构建工具，冷启动速度提升
      <strong>10 倍以上</strong>，热更新更是毫秒级响应，彻底告别“改一行等半天”的痛点。
      <strong>Pinia</strong> 作为官方推荐状态管理库，轻量、直观且完全支持 TypeScript，彻底摒弃了 mutations
      的冗余概念。再加上
      <strong>Vue Router 4</strong>
      的动态路由、路由级代码分割与导航守卫增强，整个技术栈在<strong>性能、可维护性与开发体验</strong>三个维度全面跃升，为复杂单页应用（SPA）与渐进式
      Web 应用提供了坚实底座。`,
    bannerPicUrl: bannerPic,
    bannerPicFootage: '* 在 Terminal 使用使用简单的命令即可快速搭建一个功能完备的 Vue App',
    emphasizeList: [
      {
        emTitle: '快速搭建',
        emDesc: `使用使用简单的命令即可快速搭建一个功能完备的。<strong>内置 dev, build, lint脚本`
      },
      { emTitle: '响应式数据', emDesc: `通过 ref 引用标识符轻松创建响应式数据，使用插值表达式即可在模板中使用` },
      { emTitle: '快速搭建', emDesc: `使用使用简单的命令即可快速搭建一个功能完备的。<strong>内置 dev, build, lint脚本` }
    ]
  },
  {
    id: 'persistence',
    label: 'Pinia 持久化',
    slogan: '状态长存，<br /> 数据无界。',
    desc: `Pinia 持久化，重塑状态管理新境界。精心设计的 <strong>Pinia Plugin Persistedstate</strong>，以极简的方式将状态无缝存储至 <strong>LocalStorage</strong> 或 <strong>SessionStorage</strong>，确保页面刷新后数据依然稳如磐石。无论是用户偏好、复杂表单，还是动态购物车，<strong>一键持久化</strong> 让数据管理轻盈优雅。配合 Pinia 的直观 API 和 TypeScript 支持，开发体验如丝般顺滑，效率与可靠性并驾齐驱，成就无懈可击的前端体验。`,
    bannerPicUrl: forest1,
    bannerPicFootage: '* 一行代码，状态永存，数据管理从未如此从容。',
    emphasizeList: [
      {
        emTitle: '无缝存储',
        emDesc: `<strong>LocalStorage</strong> 和 <strong>SessionStorage</strong> 双剑合璧，数据存储稳若磐石，刷新无忧。`
      },
      {
        emTitle: '灵活掌控',
        emDesc: `自定义存储策略，适配 <strong>复杂业务场景</strong>，游刃有余应对多样需求。`
      },
      {
        emTitle: '极致轻盈',
        emDesc: `Pinia 插件设计精巧，<strong>零性能负担</strong>，为开发者带来优雅体验。`
      }
    ]
  },
  {
    id: 'element-plus',
    label: 'ElementPlus 组件库',
    slogan: '美感天成，<br /> 效率非凡。',
    desc: `ElementPlus 组件库，重新定义前端美学与效率。每一个组件都精心雕琢，<strong>开箱即用</strong>，从基础按钮到复杂数据表格，皆以极致流畅的体验满足多样化需求。支持 <strong>按需加载</strong> 和 <strong>动态主题</strong>，让品牌化界面设计如行云流水。内置 <strong>国际化支持</strong>，助力应用轻松迈向全球舞台。ElementPlus 以优雅的设计语言和强大的功能矩阵，为开发者打造无与伦比的创作自由。`,
    bannerPicUrl: xiaoju1,
    bannerPicFootage: '* 从表单到弹窗，ElementPlus 赋予界面设计无限可能。',
    emphasizeList: [
      {
        emTitle: '组件矩阵',
        emDesc: `涵盖 <strong>表单、表格、弹窗</strong> 等丰富场景，快速构建现代化界面。`
      },
      {
        emTitle: '主题自由',
        emDesc: `支持 <strong>动态换肤</strong> 和 CSS 变量，品牌风格一键呈现。`
      }
    ]
  },
  {
    id: 'vue-router-spa',
    label: 'Vue 路由与 SPA 开发',
    slogan: '导航无痕，<br /> 体验超然。',
    desc: `Vue Router 4，为单页应用（SPA）注入非凡活力。凭借 <strong>动态路由</strong> 和 <strong>懒加载</strong> 技术，页面切换快如闪电，首屏加载速度提升 <strong>50%以上</strong>。支持 <strong>嵌套路由</strong> 和 <strong>导航守卫</strong>，轻松实现权限管理与流畅过渡动画。结合 Vite 的 <strong>代码分割</strong>，性能与可维护性双双突破天际。Vue Router 4 以极致简洁的逻辑，赋予开发者打造丝滑 SPA 体验的无限可能。`,
    bannerPicUrl: miku1,
    bannerPicFootage: '* 动态路由与懒加载，铸就极速单页应用体验。',
    emphasizeList: [
      {
        emTitle: '极速导航',
        emDesc: `<strong>懒加载</strong> 与代码分割，首屏性能提升至全新高度。`
      },
      {
        emTitle: '智能守卫',
        emDesc: `<strong>导航守卫</strong> 确保权限控制与页面过渡优雅自如。`
      },
      {
        emTitle: '灵活路由',
        emDesc: `支持 <strong>动态与嵌套路由</strong>，复杂页面逻辑一手掌控。`
      }
    ]
  },
  {
    id: 'backend-interface',
    label: '真实后端接口',
    slogan: '连接无间，<br /> 数据流转。',
    desc: `后端接口对接，从未如此精准高效。基于 <strong>OpenAPI/Swagger</strong> 规范，接口文档清晰如镜，<strong>自动生成</strong> TypeScript 类型定义，彻底告别手动维护的繁琐。支持 <strong>RESTful API</strong> 和 <strong>GraphQL</strong>，适配多样业务场景。结合 <strong>Axios</strong> 的流畅请求处理与 <strong>Mock 数据</strong> 功能，前后端并行开发效率翻倍，开发节奏快如疾风，为项目交付注入无限动能。`,
    bannerPicUrl: furina1,
    bannerPicFootage: '* 规范文档与 Mock 数据，助力前后端无缝协作。',
    emphasizeList: [
      {
        emTitle: '规范定义',
        emDesc: `<strong>OpenAPI</strong> 驱动接口文档，类型自动生成，开发更精准。`
      },
      {
        emTitle: '并行开发',
        emDesc: `<strong>Mock 数据</strong> 解放前端，告别等待后端接口的瓶颈。`
      }
    ]
  },
  {
    id: 'engineering',
    label: '工程化',
    slogan: '部署如风，<br /> 协作无界。',
    desc: `工程化体系，重新定义团队协作与上线效率。依托 <strong>Git</strong> 的版本控制，提交规范清晰如水，<strong>Husky</strong> 自动校验确保每行代码无可挑剔。结合 <strong>GitHub Actions</strong> 和 <strong>Vercel</strong>，实现 <strong>CI/CD 自动化部署</strong>，从代码推送至上线仅需数分钟。支持 <strong>多环境配置</strong>，开发、测试、生产环境切换如行云流水。工程化让项目管理优雅高效，团队协作如同一场完美的交响乐。`,
    bannerPicUrl: miku1,
    bannerPicFootage: '* 自动化部署与规范提交，项目上线从未如此轻松。',
    emphasizeList: [
      {
        emTitle: '自动化部署',
        emDesc: `<strong>GitHub Actions</strong> 与 <strong>Vercel</strong>，一键上线，效率拉满。`
      },
      {
        emTitle: '规范管理',
        emDesc: `<strong>Husky</strong> 确保提交信息清晰，代码历史整洁如新。`
      },
      {
        emTitle: '多环境适配',
        emDesc: `无缝切换 <strong>开发、测试、生产</strong> 环境，灵活应对复杂需求。`
      }
    ]
  },
  {
    id: 'normalization',
    label: '代码规范',
    slogan: '代码如诗，<br /> 优雅永恒。',
    desc: `代码规范，重塑开发美学与团队默契。依托 <strong>ESLint</strong> 实时捕获潜在错误，强制执行一致的代码风格，<strong>Prettier</strong> 自动格式化让每一行代码都如艺术品般整洁。全面支持 <strong>TypeScript</strong> 和 <strong>Vue 3</strong> 专属规则，代码质量直抵巅峰。集成 <strong>VS Code 插件</strong>，实时提示与修复，开发体验流畅无阻。规范的代码不仅是技术基石，更是团队协作的优雅宣言。`,
    bannerPicUrl: bannerPic,
    bannerPicFootage: '* ESLint 与 Prettier，打造整洁代码，成就优雅开发体验。',
    emphasizeList: [
      {
        emTitle: '自动格式化',
        emDesc: `<strong>Prettier</strong> 一键美化代码，告别风格分歧的烦恼。`
      },
      {
        emTitle: '实时纠错',
        emDesc: `<strong>ESLint</strong> 动态检测，代码质量始终如一。`
      },
      {
        emTitle: '工具集成',
        emDesc: `无缝适配 <strong>VS Code</strong> 与 CI 流程，开发效率再上新阶。`
      }
    ]
  }
])
