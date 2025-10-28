import { ref } from 'vue'

import kaqiuqiu from '@/assets/images/general/kaqiuqiu.png'
import kaqiuqiu2 from '@/assets/images/general/kaqiuqiu2.png'

// 数组末尾填充冗余数据，动画循环时"以假乱真"
export const featureList = ref([
  'PHP 后端开发',
  'MySQL 数据库',
  'HTML5+CSS3',
  '第三范式设计',
  'SCSS 预处理器',
  'Session 管理',
  'jQuery+AJAX',
  'MySQLi 扩展',
  'password_hash',
  '外键约束',
  'CASCADE 级联',
  'Flexbox 布局',
  'SQL 注入防护',
  'PHP 后端开发',
  'MySQL 数据库'
])

// WeRace 赛车社交平台 - 技术总结

export const highlights = ref([
  {
    imgUrl: kaqiuqiu,
    title: 'PHP后端架构',
    desc: '基于PHP构建的服务端架构，采用面向过程的开发模式，实现用户认证、数据处理等核心功能'
  },
  {
    imgUrl: kaqiuqiu2,
    title: 'MySQL数据库设计',
    desc: '精心设计的关系型数据库架构，完美符合第三范式设计（3NF）。包含8张核心数据表，支持用户、车队、赛事、社交等完整业务流程'
  },
  {
    imgUrl: kaqiuqiu,
    title: 'H5响应式界面',
    desc: '采用HTML5+CSS3技术栈，打造现代化响应式用户界面，兼容多种设备尺寸'
  },
  {
    imgUrl: kaqiuqiu2,
    title: 'SCSS模块化样式',
    desc: '使用SCSS预处理器构建模块化样式系统，提升代码可维护性和开发效率'
  },
  {
    imgUrl: kaqiuqiu,
    title: 'Session会话管理',
    desc: '完善的用户会话管理机制，确保用户状态持久化和安全性'
  },
  {
    imgUrl: kaqiuqiu2,
    title: '社交互动功能',
    desc: '集成发帖、评论、点赞等社交功能，配合jQuery实现流畅的用户交互体验'
  },
  {
    imgUrl: kaqiuqiu,
    title: '车队管理系统',
    desc: '完整的车队创建、加入、管理功能，支持多人协作的团队化赛车体验'
  },
  {
    imgUrl: kaqiuqiu2,
    title: '赛事注册平台',
    desc: '专业的赛事管理系统，支持赛事发布、报名、查看等完整流程'
  }
])

export const introItemList = ref([
  {
    id: 'php-backend',
    label: 'PHP 后端开发',
    slogan: '服务端基石，<br /> 稳定可靠。',
    desc: `项目采用 <strong>PHP</strong> 作为后端开发语言，构建了完整的服务端架构。通过 <strong>面向过程</strong> 的开发模式，实现了用户认证、数据处理、业务逻辑等核心功能。使用 <strong>MySQLi</strong> 扩展进行数据库操作，支持预处理语句防止SQL注入攻击。集成 <strong>Session</strong> 机制实现用户状态管理，通过 <strong>password_hash()</strong> 和 <strong>password_verify()</strong> 函数确保密码安全存储。PHP的简洁语法和丰富的内置函数，为快速开发提供了强有力的支撑，让后端逻辑清晰易懂，维护成本低廉。`,
    bannerPicUrl: kaqiuqiu,
    bannerPicFootage: '* PHP 7.4+ 提供强大的后端支持，确保系统稳定运行。',
    emphasizeList: [
      {
        emTitle: '安全认证',
        emDesc: `采用 <strong>password_hash</strong> 加密存储，<strong>Session</strong> 管理用户状态，确保数据安全。`
      },
      {
        emTitle: '数据库交互',
        emDesc: `使用 <strong>MySQLi</strong> 预处理语句，有效防止SQL注入，保障数据完整性。`
      },
      {
        emTitle: '模块化设计',
        emDesc: `采用 <strong>include</strong> 机制实现代码复用，conn.php统一管理数据库连接。`
      }
    ]
  },
  {
    id: 'mysql-database',
    label: 'MySQL 数据库设计',
    slogan: '数据架构，<br /> 精妙设计。',
    desc: `数据库采用 <strong>MySQL 8.0</strong> 构建，精心设计了8张核心数据表，形成完整的业务数据模型。<strong>account</strong> 表管理用户基础信息，<strong>team</strong> 和 <strong>member_team</strong> 表实现车队管理，<strong>races</strong> 和 <strong>race_registration</strong> 表支撑赛事系统，<strong>social_post</strong>、<strong>social_comment</strong>、<strong>social_likes</strong> 表构建社交功能。通过 <strong>外键约束</strong> 确保数据一致性，使用 <strong>CASCADE</strong> 级联操作维护数据完整性。合理的索引设计和字段类型选择，保证了查询性能和存储效率的最佳平衡。`,
    bannerPicUrl: kaqiuqiu2,
    bannerPicFootage: '* 8张核心数据表，构建完整的赛车社交平台数据架构。',
    emphasizeList: [
      {
        emTitle: '关系设计',
        emDesc: `精心设计的 <strong>外键关系</strong>，确保用户、车队、赛事数据的完整性和一致性。`
      },
      {
        emTitle: '数据安全',
        emDesc: `使用 <strong>CASCADE</strong> 级联删除，<strong>utf8mb4</strong> 字符集支持多语言存储。`
      },
      {
        emTitle: '性能优化',
        emDesc: `合理的 <strong>主键和索引</strong> 设计，保证复杂查询的高效执行。`
      }
    ]
  },
  {
    id: 'html5-css3',
    label: 'HTML5+CSS3 前端',
    slogan: '现代界面，<br /> 优雅体验。',
    desc: `前端采用 <strong>HTML5</strong> 语义化标签构建页面结构，使用 <strong>CSS3</strong> 实现现代化视觉效果。通过 <strong>Flexbox</strong> 布局技术打造响应式界面，支持多种设备尺寸适配。集成 <strong>Google Fonts</strong> 字体服务，使用 <strong>Noto Serif SC</strong> 字体提升中文显示效果。运用 <strong>CSS3 动画</strong> 和 <strong>过渡效果</strong> 增强用户交互体验，<strong>backdrop-filter</strong> 实现毛玻璃效果的现代化导航栏。视频背景、渐变效果等视觉元素的巧妙运用，为用户带来沉浸式的赛车主题体验。`,
    bannerPicUrl: kaqiuqiu,
    bannerPicFootage: '* HTML5 语义化标签 + CSS3 现代特性，打造优雅用户界面。',
    emphasizeList: [
      {
        emTitle: '响应式设计',
        emDesc: `<strong>Flexbox</strong> 布局技术，确保在不同设备上的完美显示效果。`
      },
      {
        emTitle: '视觉效果',
        emDesc: `<strong>CSS3 动画</strong>、毛玻璃效果、渐变背景，提升界面现代感。`
      },
      {
        emTitle: '用户体验',
        emDesc: `<strong>hover 效果</strong>、平滑过渡动画，增强交互反馈和操作流畅性。`
      }
    ]
  },
  {
    id: 'scss-preprocessing',
    label: 'SCSS 预处理器',
    slogan: '样式工程化，<br /> 高效开发。',
    desc: `采用 <strong>SCSS</strong> 预处理器构建模块化样式系统，通过 <strong>嵌套规则</strong> 和 <strong>变量定义</strong> 提升代码可读性和维护性。使用 <strong>&</strong> 父选择器引用实现伪类和状态样式的优雅编写，<strong>@import</strong> 机制实现样式模块化管理。每个页面对应独立的SCSS文件，如 home.scss、social.scss、races.scss 等，确保样式的模块化和可维护性。自动编译生成对应的CSS文件和source map，便于开发调试和生产部署。SCSS的强大功能让样式开发更加高效，代码结构更加清晰。`,
    bannerPicUrl: kaqiuqiu2,
    bannerPicFootage: '* SCSS 模块化开发，让样式管理更加优雅高效。',
    emphasizeList: [
      {
        emTitle: '模块化管理',
        emDesc: `每个页面独立的 <strong>SCSS 文件</strong>，实现样式的模块化和组件化开发。`
      },
      {
        emTitle: '嵌套语法',
        emDesc: `<strong>嵌套规则</strong> 和父选择器引用，让CSS结构更加清晰直观。`
      },
      {
        emTitle: '开发效率',
        emDesc: `<strong>自动编译</strong> 和 source map 支持，提升开发调试效率。`
      }
    ]
  },
  {
    id: 'session-management',
    label: 'Session 状态管理',
    slogan: '会话持久，<br /> 状态无忧。',
    desc: `实现了完善的 <strong>Session</strong> 会话管理机制，通过 <strong>session_start()</strong> 启动会话，使用 <strong>$_SESSION['userInfo']</strong> 存储用户登录状态和基础信息。在用户登录成功后，将用户数据存储到Session中，实现跨页面的状态持久化。每个需要用户认证的页面都会检查Session状态，未登录用户将被引导至登录页面。Session数据包含用户ID、用户名、头像等关键信息，为个性化功能提供数据支撑。安全的会话管理确保了用户体验的连续性和数据的安全性，是整个应用用户体系的核心基础。`,
    bannerPicUrl: kaqiuqiu,
    bannerPicFootage: '* PHP Session 机制，确保用户状态的安全持久化管理。',
    emphasizeList: [
      {
        emTitle: '状态持久化',
        emDesc: `<strong>$_SESSION</strong> 全局变量存储用户信息，实现跨页面状态保持。`
      },
      {
        emTitle: '安全认证',
        emDesc: `每个页面的 <strong>Session 检查</strong>，确保未授权用户无法访问受保护资源。`
      },
      {
        emTitle: '用户体验',
        emDesc: `<strong>自动登录状态检测</strong>，为用户提供无缝的个性化体验。`
      }
    ]
  },
  {
    id: 'social-interaction',
    label: '社交互动系统',
    slogan: '互动无界，<br /> 社区活跃。',
    desc: `构建了完整的社交互动系统，支持用户发布动态、评论互动、点赞表达等核心社交功能。使用 <strong>jQuery</strong> 实现异步点赞功能，通过 <strong>AJAX</strong> 技术实现无刷新的用户交互体验。社交数据存储在 social_post、social_comment、social_likes 三张关联表中，通过外键关系确保数据一致性。支持富文本内容发布，用户头像显示，时间排序等功能。点赞状态的实时切换使用心形图标（♥/♡）直观展示，评论系统支持多级回复。整个社交系统为用户提供了丰富的互动方式，增强了平台的社区氛围和用户粘性。`,
    bannerPicUrl: kaqiuqiu2,
    bannerPicFootage: '* jQuery + AJAX 驱动的社交系统，打造活跃的用户社区。',
    emphasizeList: [
      {
        emTitle: '异步交互',
        emDesc: `<strong>jQuery AJAX</strong> 实现无刷新点赞，提升用户交互体验的流畅性。`
      },
      {
        emTitle: '数据关联',
        emDesc: `<strong>三表关联设计</strong>，支持帖子、评论、点赞的完整社交功能闭环。`
      },
      {
        emTitle: '实时反馈',
        emDesc: `<strong>即时状态更新</strong>，心形图标切换，让用户操作获得即时反馈。`
      }
    ]
  },
  {
    id: 'team-management',
    label: '车队管理系统',
    slogan: '团队协作，<br /> 共创辉煌。',
    desc: `实现了完整的车队管理系统，支持车队创建、加入、退出等核心功能。通过 <strong>team</strong> 和 <strong>member_team</strong> 两张表的关联设计，实现了灵活的多对多关系管理。用户可以创建属于自己的车队，设置车队名称和基础信息，也可以搜索并加入其他车队。系统自动记录加入时间，支持车队成员的查看和管理。车队创建者拥有管理权限，可以管理车队成员和车队信息。通过外键约束确保数据一致性，当用户或车队被删除时，相关的关联数据会自动清理。车队系统为用户提供了团队协作的平台，增强了社交属性和竞技体验。`,
    bannerPicUrl: kaqiuqiu,
    bannerPicFootage: '* 完整的车队管理功能，支持创建、加入、管理的全流程操作。',
    emphasizeList: [
      {
        emTitle: '灵活管理',
        emDesc: `<strong>创建和加入</strong> 双重模式，满足不同用户的车队参与需求。`
      },
      {
        emTitle: '权限控制',
        emDesc: `<strong>创建者权限</strong> 和成员权限分离，确保车队管理的有序进行。`
      },
      {
        emTitle: '数据完整性',
        emDesc: `<strong>外键约束</strong> 和级联操作，保证车队数据的一致性和完整性。`
      }
    ]
  },
  {
    id: 'race-management',
    label: '赛事管理平台',
    slogan: '竞技舞台，<br /> 激情无限。',
    desc: `构建了专业的赛事管理平台，涵盖赛事发布、报名、查看、管理等完整功能模块。<strong>races</strong> 表存储赛事基础信息，包括赛事名称、地点、距离、时间、奖励等关键数据。<strong>race_registration</strong> 表管理用户报名信息，通过复合主键防止重复报名。系统支持赛事列表展示、详情查看、一键报名等功能。使用 <strong>预处理语句</strong> 防止SQL注入，通过 <strong>try-catch</strong> 机制处理重复报名等异常情况。赛事时间排序、报名状态检查、用户已报名赛事查看等功能，为用户提供了完整的赛事参与体验。专业的赛事管理让平台具备了真实赛车社区的核心功能。`,
    bannerPicUrl: kaqiuqiu2,
    bannerPicFootage: '* 专业赛事管理系统，从报名到参赛的完整流程支持。',
    emphasizeList: [
      {
        emTitle: '完整流程',
        emDesc: `<strong>发布、报名、查看</strong> 全流程支持，打造专业的赛事管理体验。`
      },
      {
        emTitle: '防重复机制',
        emDesc: `<strong>复合主键</strong> 和异常处理，有效防止用户重复报名同一赛事。`
      },
      {
        emTitle: '数据安全',
        emDesc: `<strong>预处理语句</strong> 和参数绑定，确保赛事数据的安全性和完整性。`
      }
    ]
  },
  {
    id: 'system-architecture',
    label: '系统架构设计',
    slogan: '架构清晰，<br /> 扩展无忧。',
    desc: `采用经典的 <strong>三层架构</strong> 设计模式，实现了表现层、业务逻辑层、数据访问层的清晰分离。前端使用 HTML5+CSS3+JavaScript 构建用户界面，后端采用 PHP 处理业务逻辑，MySQL 数据库负责数据存储。通过 <strong>conn.php</strong> 统一管理数据库连接，实现了数据访问的标准化。模块化的文件组织结构，每个功能对应独立的PHP文件，便于维护和扩展。使用 <strong>include</strong> 机制实现代码复用，减少重复开发。整个系统架构简洁明了，易于理解和维护，为后续功能扩展和性能优化提供了良好的基础架构支撑。`,
    bannerPicUrl: kaqiuqiu,
    bannerPicFootage: '* 经典三层架构设计，确保系统的可维护性和可扩展性。',
    emphasizeList: [
      {
        emTitle: '分层设计',
        emDesc: `<strong>表现层、业务层、数据层</strong> 清晰分离，职责明确，便于维护。`
      },
      {
        emTitle: '模块化组织',
        emDesc: `<strong>功能模块化</strong> 文件结构，每个功能独立开发，易于扩展。`
      },
      {
        emTitle: '标准化开发',
        emDesc: `<strong>统一的数据库连接</strong> 和代码复用机制，提升开发效率和代码质量。`
      }
    ]
  }
])
