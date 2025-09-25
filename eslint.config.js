import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import pluginPrettier from 'eslint-plugin-prettier'
import configPrettier from '@vue/eslint-config-prettier'

export default defineConfig([
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}']
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  {
    languageOptions: {
      globals: {
        ...globals.browser,
        // 添加 Node.js 全局变量支持
        process: 'readonly'
      }
    }
  },

  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],

  // 使用 @vue/eslint-config-prettier 来处理 Vue 项目的 Prettier 集成
  configPrettier,

  {
    name: 'app/prettier-integration',
    plugins: {
      prettier: pluginPrettier
    },
    rules: {
      // 启用 Prettier 作为 ESLint 规则，自动读取 .prettierrc.json 配置
      'prettier/prettier': 'warn'
    }
  },

  {
    name: 'app/custom-rules',
    rules: {
      // Vue 相关规则
      'vue/multi-word-component-names': 'off',
      'vue/no-setup-props-destructure': 'off',

      // JavaScript 代码质量规则 - 只保留真正重要的错误
      'no-undef': 'error', // 未定义变量 - 这是真正的错误
      'no-debugger': 'warn', // debugger 语句 - 开发时可能需要，改为警告
      'no-unused-vars': 'warn', // 未使用的变量
      'no-console': 'warn', // console 语句
      'no-unreachable': 'warn', // 不可达代码
      'no-empty': 'warn' // 空代码块
    }
  }
])
