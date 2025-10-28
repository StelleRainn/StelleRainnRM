import { ref } from 'vue'

import kaqiuqiu from '@/assets/images/general/kaqiuqiu.png'
import kaqiuqiu2 from '@/assets/images/general/kaqiuqiu2.png'

// 数组末尾填充冗余数据，动画循环时"以假乱真"
export const featureList = ref([
  'HTML5 语义化',
  'CSS3 现代特性',
  'Flexbox 弹性布局',
  'IconFont 字体图标',
  '模块化 CSS',
  'rgba() 透明色',
  ':hover 伪类',
  ':not() 选择器',
  'SEO 优化',
  'HTML5 语义化',
  'CSS3 现代特性'
])

export const highlights = ref([
  {
    imgUrl: kaqiuqiu,
    title: '语义化 HTML5',
    desc: '使用 HTML5 语义化标签构建页面结构，提升代码可读性和 SEO 友好性'
  },
  {
    imgUrl: kaqiuqiu,
    title: 'CSS3 样式设计',
    desc: '运用 CSS3 现代特性，实现渐变、过渡动画等视觉效果，打造流畅的用户体验'
  },
  {
    imgUrl: kaqiuqiu2,
    title: 'Flexbox 弹性布局',
    desc: '全面采用 Flexbox 布局系统，轻松实现响应式页面和复杂对齐效果'
  },
  {
    imgUrl: kaqiuqiu,
    title: 'CSS Reset 规范',
    desc: '编写标准化的 CSS Reset，消除浏览器默认样式差异，确保跨浏览器一致性'
  },
  {
    imgUrl: kaqiuqiu,
    title: 'IconFont 字体图标',
    desc: '集成 IconFont 图标库，矢量图标加载快速、灵活可控，提升页面性能'
  },
  {
    imgUrl: kaqiuqiu2,
    title: '模块化 CSS',
    desc: '将样式文件拆分为 base、common、index 三层，提高代码复用性和可维护性'
  }
])

export const introItemList = ref([
  {
    id: 'html5-semantic',
    label: 'HTML5 语义化',
    slogan: '结构清晰，<br /> 语义明确。',
    desc: `项目采用 <strong>HTML5 语义化标签</strong> 构建页面结构，合理使用 header、nav、section 等标签，使代码结构一目了然。通过语义化的标签命名（如 .shortcut、.banner、.goods），不仅提升了代码的<strong>可读性</strong>，也为搜索引擎优化（SEO）打下良好基础。每个模块职责分明，便于团队协作与后期维护。采用<strong>合理的嵌套层级</strong>和清晰的注释，让代码逻辑清晰易懂，体现了前端开发的规范化思维。`,
    bannerPicUrl: kaqiuqiu,
    bannerPicFootage: '* 语义化标签让页面结构清晰可读，利于 SEO 和可维护性',
    emphasizeList: [
      {
        emTitle: '结构清晰',
        emDesc: `采用 <strong>模块化划分</strong>，快捷导航、头部、横幅、商品展示等各司其职，层次分明。`
      },
      {
        emTitle: '语义标签',
        emDesc: `合理使用 HTML5 标签，提升 <strong>SEO 友好性</strong> 和代码可读性。`
      },
      {
        emTitle: '规范命名',
        emDesc: `类名采用 <strong>BEM 命名思想</strong>，语义化强，便于团队协作和长期维护。`
      }
    ]
  },
  {
    id: 'css3-features',
    label: 'CSS3 现代特性',
    slogan: '现代美学，<br /> 流畅体验。',
    desc: `充分运用 <strong>CSS3 新特性</strong>，打造视觉出众的用户界面。使用 <strong>rgba() 透明色</strong> 实现半透明导航背景，<strong>transition 过渡动画</strong> 让交互更加丝滑，<strong>box-shadow 阴影效果</strong> 增强视觉层次感。通过 <strong>:hover 伪类</strong> 和 <strong>:not() 选择器</strong> 实现智能交互反馈，圆点导航器自动高亮与鼠标悬停切换展现了 CSS 选择器的强大能力。这些技术的综合应用，在不依赖 JavaScript 的情况下，就能实现<strong>丰富的视觉效果和交互体验</strong>。`,
    bannerPicUrl: kaqiuqiu2,
    bannerPicFootage: '* CSS3 让页面动效更流畅，视觉层次更丰富',
    emphasizeList: [
      {
        emTitle: '过渡动画',
        emDesc: `使用 <strong>transition</strong> 实现流畅的鼠标悬停效果，提升用户交互体验。`
      },
      {
        emTitle: '透明与阴影',
        emDesc: `<strong>rgba() 透明色</strong> 和 <strong>box-shadow</strong> 组合，打造现代化视觉层次。`
      },
      {
        emTitle: '高级选择器',
        emDesc: `灵活运用 <strong>:not()、:hover、:first-child</strong> 等，实现智能样式切换。`
      }
    ]
  },
  {
    id: 'flexbox-layout',
    label: 'Flexbox 弹性布局',
    slogan: '布局灵活，<br /> 对齐轻松。',
    desc: `项目全面采用 <strong>Flexbox 弹性布局</strong>，告别传统 float 和定位布局的复杂性。无论是快捷导航的右对齐、头部元素的水平排列，还是商品列表的均匀分布，都通过 <strong>display: flex</strong> 和相关属性轻松实现。使用 <strong>justify-content: space-between</strong> 实现两端对齐，<strong>align-self: flex-end</strong> 精准控制单个元素对齐方式。Flexbox 让复杂布局变得<strong>简单直观</strong>，大幅提升开发效率，代码量减少的同时，可维护性显著提高。`,
    bannerPicUrl: kaqiuqiu,
    bannerPicFootage: '* Flexbox 让复杂布局变得简单高效',
    emphasizeList: [
      {
        emTitle: '快速布局',
        emDesc: `<strong>display: flex</strong> 一行代码搞定复杂排列，告别 float 和 clear 的烦恼。`
      },
      {
        emTitle: '精准对齐',
        emDesc: `通过 <strong>justify-content、align-items</strong> 精确控制元素对齐方式。`
      },
      {
        emTitle: '响应灵活',
        emDesc: `弹性盒子自适应容器宽度，为响应式设计提供<strong>天然支持</strong>。`
      }
    ]
  },
  {
    id: 'css-reset',
    label: 'CSS Reset 规范化',
    slogan: '样式归零，<br /> 统一基准。',
    desc: `编写了完善的 <strong>CSS Reset</strong> 基础样式文件（base.css），系统性地重置浏览器默认样式。使用 <strong>* 通配符</strong> 统一清除 margin、padding 和设置 box-sizing，为全站元素建立统一的盒模型。针对 ul、ol、a、img、input 等常用标签进行<strong>针对性重置</strong>，去除列表样式、链接下划线、图片间隙等默认行为。这套规范化的基础样式，确保了页面在<strong>不同浏览器中的一致性表现</strong>，为后续样式开发奠定了坚实基础。`,
    bannerPicUrl: kaqiuqiu2,
    bannerPicFootage: '* 完善的 CSS Reset 确保跨浏览器一致性',
    emphasizeList: [
      {
        emTitle: '全局重置',
        emDesc: `使用 <strong>* 通配符</strong> 统一清除默认样式，建立统一的盒模型基准。`
      },
      {
        emTitle: '针对性处理',
        emDesc: `为 <strong>a、img、input、ul</strong> 等标签定制重置规则，消除常见兼容问题。`
      },
      {
        emTitle: '跨浏览器',
        emDesc: `确保页面在 <strong>Chrome、Safari、Firefox</strong> 等浏览器中表现一致。`
      }
    ]
  },
  {
    id: 'iconfont',
    label: 'IconFont 字体图标',
    slogan: '矢量图标，<br /> 灵活高效。',
    desc: `集成 <strong>IconFont 字体图标库</strong>，通过 .iconfont 类名配合特定类（如 .icon-search、.icon-cart-full）快速调用图标。相比传统图片，字体图标具有<strong>矢量可缩放、颜色可控、加载速度快</strong>等优势。在搜索框、购物车、导航箭头等场景广泛应用，通过 CSS 的 font-size 和 color 属性就能灵活调整图标大小和颜色。这种方式不仅提升了<strong>页面性能</strong>，也让图标管理更加便捷，减少了 HTTP 请求，优化了用户体验。`,
    bannerPicUrl: kaqiuqiu,
    bannerPicFootage: '* IconFont 矢量图标，性能优异，灵活可控',
    emphasizeList: [
      {
        emTitle: '矢量缩放',
        emDesc: `基于字体技术，<strong>无限缩放不失真</strong>，适配各种分辨率屏幕。`
      },
      {
        emTitle: '灵活控制',
        emDesc: `通过 <strong>CSS 属性</strong> 控制图标大小、颜色，无需重新制作图片资源。`
      },
      {
        emTitle: '性能优化',
        emDesc: `<strong>减少 HTTP 请求</strong>，字体文件体积小，提升页面加载速度。`
      }
    ]
  },
  {
    id: 'css-modular',
    label: '模块化 CSS 架构',
    slogan: '分层管理，<br /> 复用高效。',
    desc: `采用 <strong>模块化 CSS 架构</strong>，将样式文件科学分层为三个部分：<strong>base.css</strong> 负责全局重置和基础样式，<strong>common.css</strong> 存放头部、版心等可复用组件样式，<strong>index.css</strong> 专注于首页特有样式。这种分层策略遵循了<strong>关注点分离</strong>原则，使得样式职责清晰、复用性强。公共样式如 .wrapper、.title、.bd 等类可在多个模块中复用，避免了代码冗余。当需要修改全局样式时，只需调整 base.css，体现了<strong>高内聚、低耦合</strong>的工程化思维。`,
    bannerPicUrl: kaqiuqiu2,
    bannerPicFootage: '* 模块化 CSS 分层架构，提升代码复用性和可维护性',
    emphasizeList: [
      {
        emTitle: '三层分离',
        emDesc: `<strong>base、common、index</strong> 三层架构，职责清晰，便于维护。`
      },
      {
        emTitle: '样式复用',
        emDesc: `提取 <strong>公共类样式</strong>（如 .title、.bd），避免代码重复，提升效率。`
      },
      {
        emTitle: '易于扩展',
        emDesc: `新增页面时，复用 <strong>base 和 common</strong>，只需编写页面特定样式。`
      }
    ]
  }
])
