<script setup>
import { ref } from 'vue'
import GeneralHeader from '@/components/GeneralHeader.vue'
import ProjectExpSingle from './components/ProjectExpSingle.vue'

import bilibiliLogo from '@/assets/images/logos/bilibili-down.png'
import rosaLogo from '@/assets/images/logos/rosa-down.png'
import vantLogo from '@/assets/images/logos/vant-down.png'
import weraceLogo from '@/assets/images/logos/u9-down.png'
import xtxLogo from '@/assets/images/logos/xtx-down.png'

import furina1 from '@/assets/images/furina-1.jpeg'

const skillsList = ref([
  { name: '主技术栈', contents: ['HTML5', 'CSS3', 'JavaScript(ES6+)', 'Vue.js 2 & 3 基础'] },
  { name: '工作流', contents: ['Git 基础', 'Vite 基础', 'Webpack 基础(了解)', 'Node.js 基础(了解)'] },
  { name: 'AI / Prompt 编程 / 工具', contents: ['Trae IDE (AI集成IDE)', 'ChatGPT-5', 'Claude Sonnet 4.5', 'Gemini'] },
  { name: '职业证书', contents: ['软考中级-软件设计师（2024 年 11 月）'] },
  { name: '其他代码', contents: ['Python基础', 'C++程序设计', 'Java面向对象基础'] },
  { name: '英语能力', contents: ['CET-6: 508 (2024)', 'CET-4: 558 (2023)'] }
])

const projectDetails = ref([
  {
    projectName: '蔷薇丛的小书架',
    projectBgUrl: rosaLogo,
    projectDesc: [
      '基于Vue3 + TypeScript + Element Plus开发的在线图书管理系统，实现了图书的增删改查、分类管理、用户权限控制等核心功能',
      '采用前后端分离架构，前端使用Pinia进行状态管理，Axios封装HTTP请求，实现了响应式布局和组件化开发',
      '后端使用Node.js + Express + MySQL构建RESTful API，集成JWT身份验证和文件上传功能，支持图书封面上传和预览',
      '项目部署在阿里云服务器，使用Nginx反向代理，PM2进程管理，实现了自动化部署和监控'
    ]
  },
  {
    projectName: '智慧商城',
    projectBgUrl: vantLogo,
    projectDesc: [
      '基于微信小程序原生开发的电商平台，集成商品展示、购物车、订单管理、支付等完整电商流程',
      '使用Vant Weapp组件库构建用户界面，实现了商品搜索、分类筛选、收藏夹、地址管理等功能模块',
      '对接微信支付API和物流查询接口，实现了在线支付和订单跟踪功能，提升用户购物体验',
      '采用云开发模式，使用微信云数据库存储商品和订单信息，云函数处理业务逻辑，降低了开发和运维成本',
      '项目上线后日活用户达到500+，订单转化率提升15%，获得了良好的用户反馈'
    ]
  },
  {
    projectName: '小兔鲜儿',
    projectBgUrl: xtxLogo,
    projectDesc: [
      '基于Vue3 + Vite + Pinia开发的现代化电商前端项目，采用Composition API和TypeScript提升代码质量',
      '实现了商品详情页、购物车、结算流程、个人中心等核心电商功能，支持多规格商品选择和库存管理',
      '使用Vue Router进行路由管理，实现了路由懒加载和权限控制，优化了页面加载性能',
      '集成了第三方登录（微信、QQ）、在线客服、商品评价系统等增值功能，提升用户体验',
      '采用ESLint + Prettier规范代码格式，使用Husky + lint-staged实现Git提交前代码检查',
      '项目构建使用Vite进行模块打包，相比Webpack构建速度提升60%，开发体验显著改善'
    ]
  },
  {
    projectName: 'WeRace',
    projectBgUrl: weraceLogo,
    projectDesc: [
      '基于React Native开发的跨平台运动社交APP，支持iOS和Android双端运行，实现了一套代码多端部署',
      '集成高德地图SDK实现GPS轨迹记录、实时定位、路线规划等功能，支持跑步、骑行、徒步等多种运动模式',
      '使用Redux进行状态管理，React Navigation处理页面导航，实现了运动数据统计、社交分享、好友排行等功能',
      '后端采用Spring Boot + MyBatis Plus + Redis架构，实现了用户管理、运动数据存储、实时消息推送等服务',
      '集成了微信分享SDK和第三方登录，支持运动成果分享到社交平台，增强了用户粘性',
      '项目在应用商店上线后获得4.8分好评，累计下载量超过10万次，月活跃用户达到3000+'
    ]
  },
  {
    projectName: 'B站首页复刻',
    projectBgUrl: bilibiliLogo,
    projectDesc: [
      '使用原生HTML5 + CSS3 + JavaScript完整复刻哔哩哔哩网站首页，实现了像素级还原和交互效果',
      '采用Flex布局和Grid布局实现响应式设计，支持PC端、平板端、移动端多种屏幕尺寸适配',
      '使用CSS3动画和过渡效果实现了轮播图、悬停效果、加载动画等交互细节，提升用户体验',
      '通过Fetch API模拟数据请求，实现了视频列表动态加载、搜索建议、用户登录状态等功能',
      '项目代码结构清晰，注释完善，采用模块化开发思想，便于维护和扩展',
      '深入理解了前端基础技术栈，掌握了大型网站的布局技巧和性能优化方案'
    ]
  }
])
</script>

<template>
  <GeneralHeader></GeneralHeader>
  <div class="resume-index-header">
    <h1>个人简历</h1>
    <h3>以小见大，潜力迸发</h3>
  </div>
  <div class="main-container">
    <div class="personal-info">
      <el-row>
        <el-col :span="8">
          <div class="avatar-area">
            <el-avatar :size="320" :src="furina1"></el-avatar>
          </div>
        </el-col>
        <el-col :span="16">
          <div class="details-area">
            <h3>徐友友</h3>
            <h5>软件工程系，前端开发</h5>
            <p>男，21岁 (2004)</p>
            <p>广东省，广州市 / 广东省，深圳市</p>
            <p>就读于<strong>广东外语外贸大学</strong>，软件工程学士学位</p>
            <p>主修课程：数据结构，算法设计，计算机组成原理，操作系统，计算机网络，自然语言处理，大数据处理等</p>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="skills">
      <el-row>
        <el-col :span="8"><div class="title">技能/证书</div></el-col>
        <el-col :span="16">
          <div class="skills-list">
            <ul>
              <li v-for="skill in skillsList" :key="skill.name">
                <div class="skill-name">{{ skill.name }}</div>
                <div class="skill-contents">
                  {{ skill.contents.join(', ') }}
                </div>
              </li>
            </ul>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="projects-experiences">
      <el-row>
        <el-col :span="8">
          <h1>项目经历</h1>
        </el-col>
      </el-row>
      <div class="projects-list">
        <ProjectExpSingle
          class="projects-list-item"
          v-for="(projectDetail, index) in projectDetails"
          :key="projectDetail.name"
          :projectDetail="projectDetail"
          :projectIndex="index"
        ></ProjectExpSingle>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.resume-index-header {
  width: 100%;
  height: 230px;
  padding-top: 65px;
  text-align: center;
  margin-bottom: 8px;

  h1 {
    font-size: 64px;
    letter-spacing: 2rem;
  }

  h3 {
    font-size: 32px;
    letter-spacing: 1rem;
    color: #8f8f8f;
  }
}

.main-container {
  padding: 0 40px;
  .personal-info,
  .skills,
  .projects-experiences {
    margin-bottom: 16px;
  }

  .personal-info {
    width: 100%;
    height: 400px;
    padding: 40px 0;
    background-color: #fff;
    border-radius: 30px;
    box-shadow: 5px 5px 5px 2px rgba(0, 0, 0, 0.2);

    .el-row,
    .el-col,
    .avatar-area,
    .details-area {
      height: 100%;
      display: flex;
    }

    .el-col:first-child {
      border-right: 1px solid #b7acac;
      justify-content: center;
      > .avatar-area {
        align-items: center;
      }
    }

    .details-area {
      flex-direction: column;
      padding: 20px 40px 0 40px;

      h3 {
        font-size: 48px;
        letter-spacing: 0.8rem;
        margin-bottom: 10px;
      }

      h5 {
        font-size: 24px;
        letter-spacing: 0.3rem;
        margin-bottom: 10px;
      }

      p {
        font-size: 15px;
        color: #8f8f8f;
        font-weight: light;
        line-height: 30px;
      }
    }
  }

  .skills {
    width: 100%;
    height: 650px;
    padding: 40px 0;
    background-color: #fff;
    border-radius: 30px;
    box-shadow: 5px 5px 5px 2px rgba(0, 0, 0, 0.2);

    .el-row,
    .el-col,
    .title,
    .skills-list {
      height: 100%;
      display: flex;
    }

    .el-col:first-child {
      justify-content: center;

      .title {
        align-items: center;
        font-size: 48px;
        letter-spacing: 0.5rem;
        font-weight: bold;
      }
    }

    .el-col:last-child {
      padding-left: 40px;

      .skills-list {
        align-items: center;

        ul {
          list-style: none;

          li {
            height: 80px;
            margin-bottom: 16px;
            padding: 0 20px;
            border: #8f8f8f solid 0.5px;
            border-radius: 30px;

            .skill-name {
              font-size: 20px;
              font-weight: bold;
              height: 40px;
              line-height: 40px;
            }

            .skill-contents {
              color: #2f2f2f;
            }
          }
        }
      }
    }
  }

  .projects-experiences {
    width: 100%;
    height: fit-content;
    padding: 40px 0;
    border-radius: 30px;
    box-shadow: 5px 5px 5px 2px rgba(0, 0, 0, 0.2);
    background-color: #fff;

    h1 {
      text-align: center;
      font-size: 48px;
      letter-spacing: 0.5rem;
      margin-bottom: 24px;
    }

    .projects-list {
      width: 100%;
      padding: 0 40px;
      display: flex;
      flex-direction: column;

      // 原方案 - 背景与内容同位
      // .projects-list-item {
      //   height: fit-content;
      //   width: 700px;
      //   margin-bottom: 32px;

      //   &:nth-child(odd) {
      //   }

      //   // 错位排开
      //   &:nth-child(even) {
      //     align-self: flex-end;
      //   }
      // }

      // 方案 2 - 背景与内容错位
      .projects-list-item {
        height: fit-content;
        width: 100%;
        margin-bottom: 32px;
      }
    }
  }
}
</style>
