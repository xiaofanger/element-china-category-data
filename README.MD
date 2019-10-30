# Element UI 中国国名经济行业分类

[![npm](https://img.shields.io/npm/v/element-china-category-data.svg)](https://www.npmjs.com/package/element-china-category-data) [![npm](https://img.shields.io/npm/dt/element-china-category-data.svg)](https://www.npmjs.com/package/element-china-category-data)


在日常开发过程中，有区域级联下拉选择的需求，发现了 [element-china-area-data](https://github.com/Plortinus/element-china-area-data) 项目。之后又有《国民经济行业分类》数据选择的需求，
所以参考[element-china-area-data](https://github.com/Plortinus/element-china-area-data)实现了基于element-ui的国民经济行业分类级联选择器组件。


## 安装

  `npm install element-china-category-data -S`

## 在线示例

[地址在此，网页打开会比较慢](https://xiaofanger.github.io/element-china-category-data/index.html)

## 使用

```js
import { categoryData,  CodeToText, TextToCode } from 'element-china-category-data'
```

  1. `categoryData`是国民经济行业分类数据集
  2. `CodeToText`是个大对象，属性是分类码，属性值是汉字 用法例如：`CodeToText['0111']`输出`稻谷种植`
  3. `TextToCode`是个大对象，属性是汉字，属性值是区域码 用法例如：`TextToCode['稻谷种植'].code`输出`0111`
  4. `CodeToText`、`TextToCode`的用法可参考 [element-china-area-data](https://github.com/Plortinus/element-china-area-data) 文档，使用方法是一致的

  * 省市区三级联动（不带“全部”选项）

    ```js
    <template>
      <div id="app">
        <el-cascader
          size="large"
          :options="options"
          v-model="selectedOptions"
          @change="handleChange">
        </el-cascader>
      </div>
    </template>

    <script>
      import { categoryData } from 'element-china-category-data'
      export default {
        data () {
          return {
            options: categoryData,
            selectedOptions: []
          }
        },

        methods: {
          handleChange (value) {
            console.log(value)
          }
        }
      }
    </script>
    ```

## 数据来源

[国家统计局《国民经济行业分类》2019修正版](http://www.stats.gov.cn/tjsj/tjbz/)

## 开发过程

`npm run dev` 是开发

`npm run build` + `npm run build-commonjs` + `npm run docs` 是准备发布
