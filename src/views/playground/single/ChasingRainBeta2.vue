<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// 创建雨滴及其随机属性，包括左边缘距离，宽高，可见度，动画时长，动画延迟
// 共同属性在css中统一设置，包括定位属性，动画名称等
const rainDrops = ref([])
const generateRainDrops = () => {
  for (let id = 0; id < 100; id++) {
    rainDrops.value.push({
      id: id,
      style: {
        left: Math.random() * 100 + '%',
        width: Math.random() * 1 + 1 + 'px',
        height: Math.random() * 15 + 5 + 'px',
        opacity: Math.random() / 2,
        animationDuration: Math.random() * 1 + 1 + 's',
        animationDelay: Math.random() * 2 + 's'
      }
    })
  }
}

// 进度指示器
const scrollProgress = ref(0)
const handleScroll = () => {
  const scrollTop = window.pageYOffset
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = (scrollTop / docHeight) * 100
  
  // 检查滚动出现动画
  checkScrollAnimation()
}

// 滚动出现动画
const observedElements = ref(new Set())
const checkScrollAnimation = () => {
  const elements = document.querySelectorAll('.scroll-reveal')
  elements.forEach(element => {
    const rect = element.getBoundingClientRect()
    const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0
    
    if (isVisible && !observedElements.value.has(element)) {
      element.classList.add('revealed')
      observedElements.value.add(element)
    }
  })
}

// 雨季形成内容
const rainGenesisData = ref({
  title: '雨季的形成',
  subtitle: 'The Genesis of Rainy Season',
  content: [
    '自春分启程，太阳开始它的北归。光，以每日0.25个纬度的耐心，一寸寸唤醒东亚大陆沉睡的体温。大地变得焦灼而渴望。',
    '然而，无垠的西太平洋却依然保持着冬日的从容。海水以其深邃的比热容，将热量层层包裹、沉淀，如同一个恪守秘密的守护者。于是，一道无形的天平开始倾斜——海面，孕育出庞大而沉稳的高压系统；陆地，则化作一片渴望填充的低谷。',
    '风，应召而来。',
    '它从海面向内陆进发，携带着海洋的呼吸、远方的水汽与未曾言说的承诺。这便是东南季风，一场年复一年的、盛大而沉默的奔赴。',
    '当饱含深情的季风遇见炽热渴望的大地，它们之间的低语，便凝结成雨。'
  ],
  epilogue: [
    '每一场雨，都有它必然的起点。',
    '每一段旅程，都始于一次无声的呼吸。',
    '而每一个故事，都将在雨中找到它独特的回响。'
  ],
  closing: '现在，你已站在雨幕的边缘。请随我一同，走进这场始于2025年春天的，一个人的"逐雨之旅"。'
})

// 故事数据
const storyData = ref({
  title: '逐雨之旅',
  slogan: '每一场雨，都有它必然的起点',
  chapters: [
    {
      id: 1,
      title: '在花开与雨落时启程',
      subtitle: 'The Departure',
      summary: '三月春雨中的代码与梦想',
      content: [
        '三月的空气里混杂着泥土与新芽的气息。一段代码被敲下，一个名为「CodeSprint40」的计划在春雨中悄然生根。',
        '屏幕上的光标闪烁着，如同一个不安却坚定的心跳。教程网页一页页地被打开，从零开始的字符，在寂静的深夜逐渐垒砌。',
        '窗外的雨声，是这段旅程最初的伴奏，无人知晓它将持续多久，只知道，出发之时，花正开，雨正落。'
      ]
    },
    {
      id: 2,
      title: '不一样的波澜',
      subtitle: 'The Turbulence',
      summary: '热情与倦怠的拉锯战',
      content: [
        '计划，似乎永远追不上变化。视频课的进度条，在某一天停滞了。图书馆的座位空了出来，书包里装的不再是笔记本电脑，而是生活的其他重量。',
        '热情，像被夏日烈阳蒸发的水洼，迅速干涸。那段日子，屏幕是暗着的，唯有内心的海面，翻涌着名为"迷茫"的、不一样的波澜。',
        '路线被改写了，地图变得模糊，旅程陷入了漫长的停顿。'
      ]
    },
    {
      id: 3,
      title: '独舞的加速度',
      subtitle: 'The Perseverance',
      summary: '图书馆里的坚持与重启',
      content: [
        '九月，校园重新变得喧闹。书包再次被MacBook的重量填满，走向图书馆的路径，被脚步重新定义。',
        '一种近乎固执的规律性被建立起来：开馆，闭馆，循环播放的教学视频，日渐增多的代码仓库提交记录。',
        '这是一种独舞，没有观众，只有加速度本身。速度的曲线在无声中悄然改变着斜率，如同季风，在沉默中积蓄着奔赴大陆的力量。'
      ]
    },
    {
      id: 4,
      title: '雷鸣与合页之声',
      subtitle: 'The Epilogue',
      summary: '风雨中的最终推送',
      content: [
        '傍晚，天空被乌云压得很低。闪电撕裂天际，随后是滚动的雷鸣。就在这风雨交加的最高潮，最后一个命令被执行了。',
        '终端弹出成功的提示，一段始于春天的漫长构建，终于在此刻合页。电脑被合上，倒映出一张平静而疲惫的脸。',
        '卖掉的旧电脑，新贴上的贴纸，所有的过往都在这一声雷鸣中，被归档封存。雨，还在下，但故事已经讲完。'
      ]
    },
    {
      id: 5,
      title: '金秋色的序章',
      subtitle: 'The New Genesis',
      summary: '新的开始与无限可能',
      content: [
        '雨季，确乎是结束了。空气变得清爽而明亮，是典型的秋日气息。浏览器被打开，标签页是各大招聘网站与框架文档。',
        '桌面被清理干净，等待着新的项目文件夹被创建。上一场雨的余韵还在耳边回响，但视线所及，已是一片更为辽阔的、闪烁着金秋色泽的天地。',
        '下一段旅程，无需命名，只需踏入。'
      ]
    }
  ]
})

onMounted(() => {
  generateRainDrops()
  window.addEventListener('scroll', handleScroll)
  // 初始检查滚动动画
  setTimeout(() => {
    checkScrollAnimation()
  }, 100)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="rain-container">
    <!-- 雨幕背景 -->
    <div class="rain-background">
      <div class="rain-drop" v-for="rainDrop in rainDrops" :key="rainDrop.id" :style="rainDrop.style"></div>
    </div>

    <!-- 进度指示器 -->
    <div class="progress-indicator">
      <div class="progress-bar" :style="{ height: scrollProgress + '%' }"></div>
    </div>

    <!-- 主要内容 -->
    <div class="main-content">
      <!-- 头版区域 100vh -->
      <section class="hero-section">
        <div class="hero-content">
          <h1 class="main-title">{{ storyData.title }}</h1>
          <p class="slogan">{{ storyData.slogan }}</p>
        </div>
      </section>

      <!-- 雨季形成引入板块 -->
      <section class="rain-genesis-section scroll-reveal">
        <div class="genesis-container">
          <div class="genesis-header scroll-reveal">
            <h2 class="genesis-title">{{ rainGenesisData.title }}</h2>
            <h3 class="genesis-subtitle">{{ rainGenesisData.subtitle }}</h3>
          </div>
          
          <div class="genesis-content">
            <div class="genesis-main scroll-reveal">
              <p 
                v-for="(paragraph, index) in rainGenesisData.content" 
                :key="index"
                class="genesis-paragraph scroll-reveal"
                :style="{ animationDelay: (index * 0.2) + 's' }"
              >
                {{ paragraph }}
              </p>
            </div>
            
            <div class="genesis-epilogue scroll-reveal">
              <div class="epilogue-divider"></div>
              <p 
                v-for="(line, index) in rainGenesisData.epilogue" 
                :key="index"
                class="epilogue-line scroll-reveal"
                :style="{ animationDelay: (index * 0.3 + 1) + 's' }"
              >
                {{ line }}
              </p>
              <div class="epilogue-divider"></div>
            </div>
            
            <div class="genesis-closing scroll-reveal">
              <p class="closing-text">{{ rainGenesisData.closing }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 目录区域 700-800px -->
      <section class="catalog-section scroll-reveal">
        <div class="catalog-container">
          <h2 class="catalog-title scroll-reveal">章节目录</h2>
          <div class="chapters-scroll">
            <div 
              v-for="(chapter, index) in storyData.chapters" 
              :key="chapter.id"
              class="chapter-card scroll-reveal"
              :class="`chapter-${index + 1}`"
              :style="{ animationDelay: (index * 0.1) + 's' }"
            >
              <div class="chapter-number">{{ String(chapter.id).padStart(2, '0') }}</div>
              <h3 class="chapter-title">{{ chapter.title }}</h3>
              <h4 class="chapter-subtitle">{{ chapter.subtitle }}</h4>
              <p class="chapter-summary">{{ chapter.summary }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 章节内容区域 -->
      <section class="stories-section">
        <div 
          v-for="chapter in storyData.chapters" 
          :key="chapter.id"
          class="story-chapter scroll-reveal"
        >
          <div class="chapter-header scroll-reveal">
            <span class="chapter-label">第{{ chapter.id }}章</span>
            <h2 class="story-title">{{ chapter.title }}</h2>
            <h3 class="story-subtitle">{{ chapter.subtitle }}</h3>
          </div>
          <div class="story-content">
            <p 
              v-for="(paragraph, index) in chapter.content" 
              :key="index"
              class="story-paragraph scroll-reveal"
              :style="{ animationDelay: (index * 0.2) + 's' }"
            >
              {{ paragraph }}
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.rain-container {
  position: relative;
  width: 100%;
  background-color: #000;
  overflow-x: hidden;
  min-height: 100vh;
}

.rain-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;

  .rain-drop {
    background-color: #fff;
    position: fixed;
    top: -10px;
    animation: rainfall linear infinite forwards;
  }
}

@keyframes rainfall {
  to {
    transform: translateY(100vh);
  }
}

// 进度指示器
.progress-indicator {
  position: fixed;
  top: 0;
  right: 0;
  width: 3px;
  height: 100vh;
  background: rgba(255, 255, 255, 0.1);
  z-index: 1000;

  .progress-bar {
    width: 100%;
    background: linear-gradient(to bottom, #ffffff, rgba(255, 255, 255, 0.6));
    transition: height 0.1s ease;
  }
}

// 滚动出现动画
.scroll-reveal {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  &.revealed {
    opacity: 1;
    transform: translateY(0);
  }
}

// 主要内容
.main-content {
  position: relative;
  z-index: 1;
  color: #ffffff;
}

// 头版区域
.hero-section {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  .hero-content {
    .main-title {
      font-size: 8rem;
      font-weight: 100;
      letter-spacing: 1.5rem;
      margin-bottom: 3rem;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
      animation: titleGlow 4s ease-in-out infinite alternate;
    }

    .slogan {
      font-size: 1.8rem;
      font-weight: 300;
      letter-spacing: 0.8rem;
      color: rgba(255, 255, 255, 0.8);
      margin: 0;
    }
  }
}

@keyframes titleGlow {
  from { 
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
    transform: scale(1);
  }
  to { 
    text-shadow: 0 0 50px rgba(255, 255, 255, 0.6);
    transform: scale(1.02);
  }
}

// 雨季形成板块
.rain-genesis-section {
  padding: 8rem 0 10rem 0;
  background: linear-gradient(180deg, 
    rgba(0, 0, 0, 0.9) 0%, 
    rgba(15, 25, 35, 0.8) 50%, 
    rgba(0, 0, 0, 0.9) 100%
  );
  
  .genesis-container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 2rem;
    
    .genesis-header {
      text-align: center;
      margin-bottom: 6rem;
      
      .genesis-title {
        font-size: 4rem;
        font-weight: 200;
        letter-spacing: 1rem;
        margin-bottom: 2rem;
        background: linear-gradient(135deg, #ffffff, rgba(255, 255, 255, 0.7));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      
      .genesis-subtitle {
        font-size: 1.5rem;
        font-weight: 300;
        letter-spacing: 0.5rem;
        color: rgba(255, 255, 255, 0.7);
        margin: 0;
      }
    }
    
    .genesis-content {
      .genesis-main {
        margin-bottom: 6rem;
        
        .genesis-paragraph {
          font-size: 1.3rem;
          line-height: 2.4;
          letter-spacing: 0.1rem;
          margin-bottom: 3rem;
          color: rgba(255, 255, 255, 0.9);
          text-align: justify;
          text-indent: 2em;
          
          &:nth-child(3) {
            text-align: center;
            font-size: 1.5rem;
            font-weight: 300;
            letter-spacing: 0.3rem;
            text-indent: 0;
            margin: 4rem 0;
            color: rgba(255, 255, 255, 1);
          }
        }
      }
      
      .genesis-epilogue {
        margin: 6rem 0;
        text-align: center;
        
        .epilogue-divider {
          width: 100px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
          margin: 3rem auto;
        }
        
        .epilogue-line {
          font-size: 1.2rem;
          font-weight: 300;
          letter-spacing: 0.2rem;
          color: rgba(255, 255, 255, 0.8);
          margin: 1.5rem 0;
          font-style: italic;
        }
      }
      
      .genesis-closing {
        text-align: center;
        margin-top: 6rem;
        
        .closing-text {
          font-size: 1.4rem;
          line-height: 2.2;
          letter-spacing: 0.15rem;
          color: rgba(255, 255, 255, 0.9);
          max-width: 800px;
          margin: 0 auto;
          padding: 3rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(10px);
        }
      }
    }
  }
}

// 目录区域
.catalog-section {
  height: 850px;
  padding: 8rem 0 10rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  .catalog-container {
    width: 100%;
    max-width: 1400px;
    padding: 0 2rem;

    .catalog-title {
      font-size: 3.5rem;
      font-weight: 200;
      letter-spacing: 0.8rem;
      text-align: center;
      margin-bottom: 5rem;
      color: rgba(255, 255, 255, 0.9);
    }

    .chapters-scroll {
      display: flex;
      gap: 3rem;
      overflow-x: auto;
      padding: 3rem 0;
      
      &::-webkit-scrollbar {
        height: 8px;
      }
      
      &::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 4px;
      }
      
      &::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.3);
        border-radius: 4px;
      }

      .chapter-card {
        flex: 0 0 300px;
        aspect-ratio: 9/16;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 24px;
        padding: 2.5rem;
        backdrop-filter: blur(15px);
        cursor: pointer;
        transition: all 0.4s ease;
        position: relative;
        overflow: hidden;

        &:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-15px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
        }

        .chapter-number {
          font-size: 6rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.15);
          position: absolute;
          bottom: 1rem;
          right: 1.5rem;
          line-height: 1;
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
        }

        .chapter-title {
          font-size: 1.4rem;
          font-weight: 400;
          letter-spacing: 0.1rem;
          margin-bottom: 0.5rem;
          line-height: 1.4;
        }

        .chapter-subtitle {
          font-size: 1rem;
          font-weight: 300;
          letter-spacing: 0.2rem;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 2rem;
        }

        .chapter-summary {
          font-size: 0.9rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.8);
          letter-spacing: 0.05rem;
        }

        // 浮沉动画效果
        &.chapter-1 {
          animation: floating 2s ease-in-out infinite alternate;
        }
        &.chapter-2 {
          animation: floating 2.2s ease-in-out 0.3s infinite alternate;
        }
        &.chapter-3 {
          animation: floating 1.8s ease-in-out 0.6s infinite alternate;
        }
        &.chapter-4 {
          animation: floating 2.1s ease-in-out 0.9s infinite alternate;
        }
        &.chapter-5 {
          animation: floating 1.9s ease-in-out 1.2s infinite alternate;
        }
      }
    }
  }
}

@keyframes floating {
  to {
    transform: translateY(-8px);
  }
}

// 章节内容区域
.stories-section {
  padding: 8rem 0 10rem 0;

  .story-chapter {
    max-width: 950px;
    margin: 0 auto 12rem auto;
    padding: 0 2rem;

    .chapter-header {
      text-align: center;
      margin-bottom: 6rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      padding-bottom: 3rem;

      .chapter-label {
        font-size: 1rem;
        letter-spacing: 0.3rem;
        color: rgba(255, 255, 255, 0.6);
        display: block;
        margin-bottom: 1rem;
      }

      .story-title {
        font-size: 2.5rem;
        font-weight: 300;
        letter-spacing: 0.3rem;
        margin-bottom: 1rem;
      }

      .story-subtitle {
        font-size: 1.2rem;
        font-weight: 200;
        letter-spacing: 0.4rem;
        color: rgba(255, 255, 255, 0.7);
        margin: 0;
      }
    }

    .story-content {
      .story-paragraph {
        font-size: 1.3rem;
        line-height: 2.4;
        letter-spacing: 0.1rem;
        margin-bottom: 3rem;
        color: rgba(255, 255, 255, 0.9);
        text-indent: 2em;
      }
    }
  }
}

// 响应式设计
@media (max-width: 768px) {
  .hero-section .hero-content {
    .main-title {
      font-size: 4rem;
      letter-spacing: 0.8rem;
    }
    
    .slogan {
      font-size: 1.2rem;
      letter-spacing: 0.4rem;
    }
  }

  .rain-genesis-section {
    padding: 6rem 0 8rem 0;
    
    .genesis-container .genesis-header {
      .genesis-title {
        font-size: 2.5rem;
        letter-spacing: 0.5rem;
      }
      
      .genesis-subtitle {
        font-size: 1.2rem;
        letter-spacing: 0.3rem;
      }
    }
    
    .genesis-content {
      .genesis-paragraph {
        font-size: 1.1rem;
        line-height: 2.2;
      }
      
      .closing-text {
        font-size: 1.2rem;
        padding: 2rem;
      }
    }
  }

  .catalog-section {
    height: auto;
    min-height: 700px;
    padding: 6rem 0 8rem 0;
    
    .catalog-container {
      .catalog-title {
        font-size: 2.5rem;
        letter-spacing: 0.5rem;
        margin-bottom: 3rem;
      }
      
      .chapters-scroll {
        gap: 2rem;
        padding: 2rem 0;
        
        .chapter-card {
          flex: 0 0 260px;
          aspect-ratio: 3/5;
          padding: 2rem;
          
          .chapter-number {
            font-size: 4rem;
          }
        }
      }
    }
  }

  .stories-section {
    padding: 6rem 0 8rem 0;
    
    .story-chapter {
      margin-bottom: 8rem;
      
      .chapter-header {
        margin-bottom: 4rem;
        padding-bottom: 2rem;
        
        .story-title {
          font-size: 2rem;
          letter-spacing: 0.2rem;
        }
      }
      
      .story-content .story-paragraph {
        font-size: 1.1rem;
        line-height: 2.2;
        letter-spacing: 0.05rem;
        margin-bottom: 2rem;
      }
    }
  }
}
</style>
