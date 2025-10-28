import { ref } from 'vue'

import kaqiuqiu from '@/assets/images/general/kaqiuqiu.png'
import kaqiuqiu2 from '@/assets/images/general/kaqiuqiu2.png'

// 数组末尾填充冗余数据，动画循环时"以假乱真"
export const featureList = ref([
  '原生HTML/CSS',
  'JavaScript交互',
  'Flexbox布局',
  'AI辅助编程',
  '响应式设计',
  'DOM操作',
  'Prompt工程',
  '像素级还原',
  '微交互设计',
  '原生HTML/CSS',
  'JavaScript交互'
])

export const highlights = ref([
  {
    imgUrl: kaqiuqiu,
    title: '原生HTML/CSS',
    desc: '纯手工打造的页面结构，每一个像素都承载着初学者的虔诚与执着'
  },
  {
    imgUrl: kaqiuqiu2,
    title: 'JavaScript交互设计',
    desc: '轮播图切换、无限滚动、悬浮效果，在AI的指引下完成了第一次JS编程之旅'
  },
  {
    imgUrl: kaqiuqiu,
    title: 'Flex 布局',
    desc: '运用Flexbox布局，让页面在不同屏幕尺寸下都能优雅呈现'
  },
  {
    imgUrl: kaqiuqiu2,
    title: '模块化开发',
    desc: '将CSS和JS按功能拆分，初步体验了代码组织的重要性'
  },
  {
    imgUrl: kaqiuqiu,
    title: 'AI辅助编程',
    desc: '在JavaScript尚未熟练的阶段，通过精心设计的Prompt完成复杂交互功能'
  },
  {
    imgUrl: kaqiuqiu2,
    title: '细节还原',
    desc: '从导航栏到视频卡片，精心复刻B站首页的每一个视觉元素'
  }
])

export const introItemList = ref([
  {
    id: 'html-css-foundation',
    label: 'HTML/CSS 基础',
    slogan: '万丈高楼，<br /> 始于足下。',
    desc: `项目采用 <strong>原生HTML</strong> 构建页面结构，每一个标签都体现了对语义化的理解与实践。<strong>CSS</strong> 样式编写涵盖了从简单的 <strong>margin</strong> 和 <strong>padding</strong> 到复杂的 <strong>Flexbox</strong> 布局，每一行代码都追求视觉效果的完美呈现。技术实现朴素而扎实，代码承载着初学者对前端世界的全部热忱。`,
    bannerPicUrl: kaqiuqiu,
    bannerPicFootage: '* 374行CSS代码，构建起前端开发的基础',
    emphasizeList: [
      {
        emTitle: '语义化标签',
        emDesc: `合理使用 <strong>header、div、img</strong> 等标签，构建清晰的页面结构`
      },
      {
        emTitle: 'Flexbox布局',
        emDesc: `运用 <strong>flex-direction、justify-content</strong> 实现响应式布局`
      },
      {
        emTitle: '样式组织',
        emDesc: `按功能模块拆分CSS文件，初步体验 <strong>模块化开发</strong> 的优势`
      }
    ]
  },
  {
    id: 'javascript-interaction',
    label: 'JavaScript 交互',
    slogan: '代码如诗，<br /> AI为笔。',
    desc: `在JavaScript基础学习阶段，项目采用了 <strong>AI辅助编程</strong> 的开发方式。通过精心设计的Prompt工程，成功实现了轮播图切换、无限滚动加载、悬浮弹窗等复杂交互功能。这种开发方式体现了现代开发的新可能性，突出了 <strong>问题分解</strong> 和 <strong>需求表达</strong> 的重要性。每一个功能的实现都是人机协作的结晶，展现了传统学习与AI时代的完美融合。`,
    bannerPicUrl: kaqiuqiu2,
    bannerPicFootage: '* 5个JS文件，见证AI辅助开发的神奇力量',
    emphasizeList: [
      {
        emTitle: '轮播图实现',
        emDesc: `通过 <strong>DOM操作</strong> 和 <strong>CSS Transform</strong> 实现流畅的图片切换效果`
      },
      {
        emTitle: '无限滚动',
        emDesc: `监听 <strong>scroll事件</strong>，动态加载内容，提升用户体验`
      },
      {
        emTitle: 'AI协作开发',
        emDesc: `运用 <strong>Prompt工程</strong>，将复杂需求转化为可执行的代码方案`
      }
    ]
  },
  {
    id: 'responsive-design',
    label: '响应式布局',
    slogan: '适配万屏，<br /> 优雅如一。',
    desc: `响应式设计是现代Web开发的基本要求。项目中大量运用了 <strong>Flexbox</strong> 布局技术，通过 <strong>flex-direction</strong>、<strong>flex-wrap</strong> 等属性实现了页面在不同屏幕尺寸下的自适应。特别是在处理导航栏和视频推荐区域时，灵活运用了 <strong>百分比宽度</strong> 和 <strong>相对定位</strong>，确保页面在缩放时能够保持良好的视觉效果。项目实践充分体现了移动优先设计的重要性。`,
    bannerPicUrl: kaqiuqiu,
    bannerPicFootage: '* Flexbox布局，让页面在任何设备上都能完美呈现',
    emphasizeList: [
      {
        emTitle: '弹性布局',
        emDesc: `运用 <strong>Flexbox</strong> 实现自适应布局，告别固定像素的束缚`
      },
      {
        emTitle: '媒体查询',
        emDesc: `通过CSS的 <strong>响应式设计</strong>，适配不同屏幕尺寸`
      },
      {
        emTitle: '视觉一致性',
        emDesc: `确保在各种设备上都能保持 <strong>良好的用户体验</strong>`
      }
    ]
  },
  {
    id: 'ui-restoration',
    label: 'UI界面复刻',
    slogan: '像素级还原，<br /> 匠心独运。',
    desc: `项目对B站首页进行了忠实复刻，从顶部导航栏的渐变背景到视频卡片的圆角设计，每一个细节都力求还原。通过 <strong>border-radius</strong> 实现圆角效果，使用 <strong>opacity</strong> 和 <strong>transition</strong> 创造悬浮交互，运用 <strong>z-index</strong> 管理层级关系。技术手段朴素而有效，对细节的执着追求体现了对 <strong>用户体验</strong> 的重视，展现了优秀界面设计需要无数个细节的完美组合。`,
    bannerPicUrl: kaqiuqiu2,
    bannerPicFootage: '* 从导航到卡片，每个元素都经过精心雕琢',
    emphasizeList: [
      {
        emTitle: '视觉还原',
        emDesc: `精确复刻B站首页的 <strong>色彩搭配</strong> 和 <strong>布局结构</strong>`
      },
      {
        emTitle: '交互细节',
        emDesc: `实现 <strong>悬浮效果</strong>、<strong>渐变动画</strong> 等微交互`
      },
      {
        emTitle: '用户体验',
        emDesc: `注重 <strong>视觉层次</strong> 和 <strong>操作反馈</strong>，提升界面友好度`
      }
    ]
  },
  {
    id: 'modular-development',
    label: '模块化开发',
    slogan: '分而治之，<br /> 井然有序。',
    desc: `即使在项目规模相对简单的情况下，也采用了模块化的开发方式。CSS按功能拆分为 <strong>body&header.css</strong>、<strong>rcmd_video.css</strong>、<strong>popup_for_profile.css</strong> 等文件，JavaScript也按照功能模块分为轮播图、隐藏频道、固定悬浮等独立文件。这种组织方式为后续学习更复杂的工程化开发奠定了良好的思维基础，充分体现了 <strong>代码组织</strong> 的重要性。`,
    bannerPicUrl: kaqiuqiu,
    bannerPicFootage: '* 5个CSS文件 + 4个JS文件，模块化思维的初次实践',
    emphasizeList: [
      {
        emTitle: '文件拆分',
        emDesc: `按功能将代码拆分到不同文件，提高 <strong>代码可维护性</strong>`
      },
      {
        emTitle: '职责分离',
        emDesc: `每个模块专注于特定功能，遵循 <strong>单一职责原则</strong>`
      },
      {
        emTitle: '扩展性',
        emDesc: `模块化结构为后续功能扩展提供了 <strong>良好的基础</strong>`
      }
    ]
  },
  {
    id: 'data-management',
    label: '数据管理',
    slogan: '内容为王，<br /> 数据驱动。',
    desc: `项目实现了一套简单而有效的数据管理方案。通过 <strong>fetch API</strong> 动态加载文本文件，将视频标题和信息与图片分离存储，实现了内容与展示的初步分离。8个图片文件配合对应的标题和信息文本文件，通过JavaScript的循环加载机制实现了无限滚动效果。这种数据组织方式虽然简单，但体现了 <strong>数据驱动</strong> 的开发思想，为后续学习更复杂的状态管理奠定了基础。`,
    bannerPicUrl: kaqiuqiu2,
    bannerPicFootage: '* 24个数据文件，构建起内容与展示分离的雏形',
    emphasizeList: [
      {
        emTitle: '异步加载',
        emDesc: `使用 <strong>fetch API</strong> 动态获取文本内容，提升页面性能`
      },
      {
        emTitle: '内容分离',
        emDesc: `将数据与展示逻辑分离，初步体验 <strong>MVC模式</strong> 的思想`
      },
      {
        emTitle: '循环复用',
        emDesc: `通过算法实现内容的 <strong>循环展示</strong>，优化资源利用`
      }
    ]
  }
])
