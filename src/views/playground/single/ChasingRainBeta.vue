<template>
  <div class="chasing-rain-container">
    <!-- 背景动效层 -->
    <div class="rain-background">
      <div v-for="drop in rainDrops" :key="drop.id" class="rain-drop" :style="drop.style"></div>
    </div>

    <!-- 主要内容区域 -->
    <div class="story-content">
      <!-- 标题区域 -->
      <section class="title-section" ref="titleSection">
        <h1 class="main-title">{{ storyData.mainTitle.zh }}</h1>
        <h2 class="sub-title">{{ storyData.mainTitle.en }}</h2>
        <div class="title-divider"></div>
      </section>

      <!-- 引言区域 -->
      <section class="intro-section" ref="introSection">
        <div class="intro-content">
          <p
            v-for="(paragraph, index) in storyData.introduction"
            :key="index"
            class="intro-paragraph"
            :class="{ visible: visibleParagraphs.includes(index) }"
          >
            {{ paragraph }}
          </p>
        </div>

        <div class="quote-section">
          <div class="quote-divider"></div>
          <blockquote
            v-for="(quote, index) in storyData.quotes"
            :key="index"
            class="story-quote"
            :class="{ visible: visibleQuotes.includes(index) }"
          >
            {{ quote }}
          </blockquote>
          <div class="quote-divider"></div>
        </div>

        <p class="transition-text" :class="{ visible: showTransition }">
          {{ storyData.transitionText }}
        </p>
      </section>

      <!-- 章节导航 -->
      <section class="chapters-section" ref="chaptersSection">
        <h3 class="chapters-title">{{ storyData.chaptersTitle }}</h3>
        <div class="chapters-grid">
          <div
            v-for="(chapter, index) in storyData.chapters"
            :key="index"
            class="chapter-card"
            :class="{ visible: visibleChapters.includes(index) }"
            @click="selectChapter(index)"
          >
            <div class="chapter-number">{{ String(index + 1).padStart(2, '0') }}</div>
            <h4 class="chapter-title">{{ chapter.title.zh }}</h4>
            <h5 class="chapter-subtitle">{{ chapter.title.en }}</h5>
            <p class="chapter-description">{{ chapter.description }}</p>
            <div class="chapter-progress" :style="{ width: chapter.progress + '%' }"></div>
          </div>
        </div>
      </section>

      <!-- 选中章节的详细内容 -->
      <section v-if="selectedChapter !== null" class="chapter-detail" ref="chapterDetail">
        <div class="detail-content">
          <h3 class="detail-title">{{ storyData.chapters[selectedChapter].title.zh }}</h3>
          <div class="detail-text">
            <p v-for="(content, index) in storyData.chapters[selectedChapter].content" :key="index">
              {{ content }}
            </p>
          </div>
        </div>
      </section>

      <!-- 底部导航 -->
      <section class="navigation-section">
        <button class="nav-button" @click="scrollToTop">
          <span>{{ navigationText.backToTop }}</span>
        </button>
        <button class="nav-button primary" @click="startJourney">
          <span>{{ navigationText.startJourney }}</span>
        </button>
      </section>
    </div>

    <!-- 进度指示器 -->
    <div class="progress-indicator">
      <div class="progress-bar" :style="{ height: scrollProgress + '%' }"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

// 响应式数据
const titleSection = ref(null)
const introSection = ref(null)
const chaptersSection = ref(null)
const chapterDetail = ref(null)

const visibleParagraphs = ref([])
const visibleQuotes = ref([])
const visibleChapters = ref([])
const showTransition = ref(false)
const selectedChapter = ref(null)
const scrollProgress = ref(0)

// 雨滴动效数据
const rainDrops = ref([])

// 故事数据
const storyData = ref({
  mainTitle: {
    zh: '雨季的形成',
    en: 'The Genesis of Rainy Season'
  },
  introduction: [
    '自春分启程，太阳开始它的北归。光，以每日0.25个纬度的耐心，一寸寸唤醒东亚大陆沉睡的体温。大地变得焦灼而渴望。',
    '然而，无垠的西太平洋却依然保持着冬日的从容。海水以其深邃的比热容，将热量层层包裹、沉淀，如同一个恪守秘密的守护者。于是，一道无形的天平开始倾斜——海面，孕育出庞大而沉稳的高压系统；陆地，则化作一片渴望填充的低谷。',
    '风，应召而来。',
    '它从海面向内陆进发，携带着海洋的呼吸、远方的水汽与未曾言说的承诺。这便是东南季风，一场年复一年的、盛大而沉默的奔赴。',
    '当饱含深情的季风遇见炽热渴望的大地，它们之间的低语，便凝结成雨。'
  ],
  quotes: [
    '每一场雨，都有它必然的起点。',
    '每一段旅程，都始于一次无声的呼吸。',
    '而每一个故事，都将在雨中找到它独特的回响。'
  ],
  transitionText: '现在，你已站在雨幕的边缘。请随我一同，走进这场始于2025年春天的，一个人的"逐雨之旅"。',
  chaptersTitle: '旅程章节',
  chapters: [
    {
      title: { zh: '在花开与雨落时启程', en: 'The Departure' },
      description: '讲述项目最初的诞生。那个3月21日的决定，原计划"CodeSprint40"的冲动与雄心。',
      progress: 100,
      content: [
        '春分时节，万物复苏。在这个充满希望的时刻，一个关于代码与梦想的故事悄然开始。',
        '那是一个平凡的3月21日，却注定成为不平凡的起点。面对未知的技术海洋，心中既有紧张，更有决心。',
        '这里是故事的"春分"，是季风转向的起点。'
      ]
    },
    {
      title: { zh: '不一样的波澜', en: 'The Turbulence' },
      description: '描述计划遭遇的变数。热情与倦怠的拉锯，自我认知的模糊与混乱。',
      progress: 75,
      content: [
        '旅程并非一帆风顺。热情与倦怠开始了漫长的拉锯战。',
        '暑假的虚度与内心的挣扎交织，自我认知变得模糊而混乱。',
        '这是旅程中的"低压谷地"，是季风登陆前不可避免的湍流。'
      ]
    },
    {
      title: { zh: '破晓', en: 'The Perseverance' },
      description: '展现重启与坚持。开学后背起书包走向图书馆的日复一日。',
      progress: 90,
      content: [
        '破晓时分，新的希望在地平线上升起。',
        '开学后背起书包走向图书馆，日复一日的坚持成为新的节奏。',
        '将学习从"冲动"变为"热情"，在"速度与加速度"哲学下自我驱动。'
      ]
    },
    {
      title: { zh: '于雨中道谢', en: 'The Epilogue' },
      description: '抵达与反思。在暴风雨傍晚完成最终推送的仪式感。',
      progress: 100,
      content: [
        '在暴风雨的傍晚，最终的推送带着仪式感完成。',
        '回望181天的里程碑，心中满怀慨叹。',
        '卖掉旧电脑换新工具，这是象征性的告别，也是新的开始。'
      ]
    },
    {
      title: { zh: '金秋色的序章', en: 'The New Genesis' },
      description: '展望未来。将这段旅程内化为力量，迈向职业舞台的真正开始。',
      progress: 60,
      content: [
        '金秋时节，新的序章正在书写。',
        '将这段旅程内化为力量，指向投递简历、寻找实习的下一步行动。',
        '这不是结束，而是以"新生"之姿，迈向职业舞台的真正开始。'
      ]
    }
  ]
})

const navigationText = ref({
  backToTop: '回到顶部',
  startJourney: '开始旅程'
})

// 生成雨滴
const generateRainDrops = () => {
  rainDrops.value = []
  for (let i = 0; i < 50; i++) {
    rainDrops.value.push({
      id: i,
      style: {
        left: Math.random() * 100 + '%',
        animationDelay: Math.random() * 2 + 's',
        animationDuration: Math.random() * 1 + 1 + 's',
        opacity: Math.random() * 0.3 + 0.1
      }
    })
  }
}

// 滚动监听
const handleScroll = () => {
  const scrollTop = window.pageYOffset
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = (scrollTop / docHeight) * 100

  // 渐进式显示内容
  if (scrollTop > 200) {
    visibleParagraphs.value = [0, 1, 2, 3, 4]
  }
  if (scrollTop > 600) {
    visibleQuotes.value = [0, 1, 2]
  }
  if (scrollTop > 800) {
    showTransition.value = true
  }
  if (scrollTop > 1000) {
    visibleChapters.value = [0, 1, 2, 3, 4]
  }
}

// 选择章节
const selectChapter = (index) => {
  selectedChapter.value = index
  nextTick(() => {
    if (chapterDetail.value) {
      chapterDetail.value.scrollIntoView({ behavior: 'smooth' })
    }
  })
}

// 滚动到顶部
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// 开始旅程
const startJourney = () => {
  // 这里可以添加跳转到实际故事页面的逻辑
  console.log('开始逐雨之旅...')
}

onMounted(() => {
  generateRainDrops()
  console.log(rainDrops.value)
  window.addEventListener('scroll', handleScroll)

  // 初始动画
  setTimeout(() => {
    visibleParagraphs.value = [0]
  }, 500)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.chasing-rain-container {
  position: relative;
  min-height: 100vh;
  /* background: linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #1e3c72 100%); */
  background-color: #000;
  color: #ffffff;
  overflow-x: hidden;
}

/* 雨滴背景动效 */
.rain-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.rain-drop {
  position: absolute;
  top: -10px;
  width: 2px;
  height: 20px;
  background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.6), transparent);
  animation: fall linear infinite;
}

@keyframes fall {
  to {
    transform: translateY(100vh);
  }
}

/* 主要内容 */
.story-content {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* 标题区域 */
.title-section {
  text-align: center;
  padding: 8rem 0 4rem;
  background: radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
}

.main-title {
  font-size: 3.5rem;
  font-weight: 300;
  margin-bottom: 1rem;
  letter-spacing: 0.2rem;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  animation: titleGlow 3s ease-in-out infinite alternate;
}

.sub-title {
  font-size: 1.5rem;
  font-weight: 200;
  color: rgba(255, 255, 255, 0.8);
  letter-spacing: 0.3rem;
  margin-bottom: 2rem;
}

.title-divider {
  width: 100px;
  height: 2px;
  background: linear-gradient(to right, transparent, #ffffff, transparent);
  margin: 0 auto;
}

@keyframes titleGlow {
  from {
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  }
  to {
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.6);
  }
}

/* 引言区域 */
.intro-section {
  padding: 4rem 0;
}

.intro-content {
  max-width: 800px;
  margin: 0 auto;
}

.intro-paragraph {
  font-size: 1.2rem;
  line-height: 2;
  margin-bottom: 2rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.intro-paragraph.visible {
  opacity: 1;
  transform: translateY(0);
}

.intro-paragraph:nth-child(3) {
  text-align: center;
  font-size: 1.5rem;
  font-weight: 300;
  color: #87ceeb;
  margin: 3rem 0;
}

/* 引用区域 */
.quote-section {
  margin: 4rem 0;
  text-align: center;
}

.quote-divider {
  width: 200px;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.5), transparent);
  margin: 2rem auto;
}

.story-quote {
  display: block;
  font-size: 1.3rem;
  font-style: italic;
  color: #b0e0e6;
  margin: 1.5rem 0;
  opacity: 0;
  transform: translateX(-30px);
  transition: all 0.8s ease;
}

.story-quote.visible {
  opacity: 1;
  transform: translateX(0);
}

.transition-text {
  font-size: 1.4rem;
  text-align: center;
  color: #ffe4b5;
  margin: 4rem 0;
  opacity: 0;
  transform: scale(0.9);
  transition: all 1s ease;
}

.transition-text.visible {
  opacity: 1;
  transform: scale(1);
}

/* 章节区域 */
.chapters-section {
  padding: 4rem 0;
}

.chapters-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #e6e6fa;
}

.chapters-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.chapter-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(50px);
  position: relative;
  overflow: hidden;
}

.chapter-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.chapter-card:hover {
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.chapter-number {
  font-size: 3rem;
  font-weight: 100;
  color: rgba(255, 255, 255, 0.3);
  position: absolute;
  top: 1rem;
  right: 1.5rem;
}

.chapter-title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #f0f8ff;
}

.chapter-subtitle {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1rem;
  font-weight: 300;
}

.chapter-description {
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1.5rem;
}

.chapter-progress {
  height: 3px;
  background: linear-gradient(to right, #4fc3f7, #29b6f6);
  border-radius: 2px;
  transition: width 0.3s ease;
}

/* 章节详情 */
.chapter-detail {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  padding: 3rem;
  margin: 2rem 0;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.detail-title {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #e0ffff;
  text-align: center;
}

.detail-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
}

/* 导航区域 */
.navigation-section {
  text-align: center;
  padding: 4rem 0;
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.nav-button {
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  color: #ffffff;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.nav-button:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.nav-button.primary {
  background: linear-gradient(45deg, #4fc3f7, #29b6f6);
  border-color: #29b6f6;
}

.nav-button.primary:hover {
  background: linear-gradient(45deg, #29b6f6, #0288d1);
  box-shadow: 0 10px 20px rgba(41, 182, 246, 0.3);
}

/* 进度指示器 */
.progress-indicator {
  position: fixed;
  top: 0;
  right: 0;
  width: 4px;
  height: 100vh;
  background: rgba(255, 255, 255, 0.1);
  z-index: 1000;
}

.progress-bar {
  width: 100%;
  background: linear-gradient(to bottom, #4fc3f7, #29b6f6);
  transition: height 0.1s ease;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .story-content {
    padding: 0 1rem;
  }

  .main-title {
    font-size: 2.5rem;
  }

  .chapters-grid {
    grid-template-columns: 1fr;
  }

  .navigation-section {
    flex-direction: column;
    align-items: center;
  }

  .nav-button {
    width: 200px;
  }
}
</style>
