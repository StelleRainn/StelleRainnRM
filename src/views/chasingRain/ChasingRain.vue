<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import { rainGenesisData, storyData } from '@/staticData/chasingRain'

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
  elements.forEach((element) => {
    const rect = element.getBoundingClientRect()
    const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0

    if (isVisible && !observedElements.value.has(element)) {
      element.classList.add('revealed')
      observedElements.value.add(element)
    }
  })
}

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
                :style="{ animationDelay: index * 0.2 + 's' }"
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
                :style="{ animationDelay: index * 0.3 + 1 + 's' }"
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
              :style="{ animationDelay: index * 0.1 + 's' }"
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
        <div v-for="chapter in storyData.chapters" :key="chapter.id" class="story-chapter scroll-reveal">
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
              :style="{ animationDelay: index * 0.2 + 's' }"
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
  left: 0;
  width: 3px;
  height: 100vh;
  background: rgba(255, 255, 255, 0.1);
  z-index: 0;

  .progress-bar {
    width: 100%;
    background: linear-gradient(135deg, #fd4d4d, #4dfdee);
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
      font-weight: 700;
      letter-spacing: 4rem;
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
        transition: all 0.4s ease-in-out;
        position: relative;
        overflow: hidden;

        &:hover {
          background: rgba(255, 255, 255, 0.1);
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
    margin: 400px auto;
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
