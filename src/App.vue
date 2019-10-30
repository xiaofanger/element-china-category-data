<template>
  <div class="area">
    <div>
      <span class="imp">国民经济行业分类级联数据选择器</span>
      <el-cascader
        size="large"
        :options="categoryData"
        v-model="selectedOptions1"
        @change="handleChange"
        clearable
        style="width: 50%;">
      </el-cascader>
    </div>
    <div class="bind">
      <div>绑定值：{{selectedOptions1}}</div>
      <div>区域码转汉字：{{CodeToText[selectedOptions1[0]]}},{{CodeToText[selectedOptions1[1]]}},{{CodeToText[selectedOptions1[2]]}},{{CodeToText[selectedOptions1[3]]}}</div>
      <div>汉字转区域码：{{convertTextToCode(CodeToText[selectedOptions1[0]], CodeToText[selectedOptions1[1]], CodeToText[selectedOptions1[2]], CodeToText[selectedOptions1[3]])}}</div>
    </div>
  </div>
</template>

<script>
import {
  categoryData, CodeToText, TextToCode
} from "../dist/app.js";

export default {
  data() {
    return {
      CodeToText,
      TextToCode,
      categoryData,
      selectedOptions1: ["A", "01", "011", "0111"]
    };
  },

  methods: {
    handleChange(value) {
      console.log(value);
    },
    convertTextToCode(categoryText, majorText, mediumText, smallText) {
      let code = "";
      if (categoryText && this.TextToCode[categoryText]) {
        const category = this.TextToCode[categoryText];
        code += category.code + ", ";
        if (majorText && category[majorText]) {
          const major = category[majorText];
          code += major.code + ", ";
          if (mediumText && major[mediumText]) {
            const medium = major[mediumText];
            code += major[mediumText].code + ", ";
            if (smallText && medium[smallText]) {
              code += medium[smallText].code;
            }
          }
        }
      }
      return code;
    }
  },
};
</script>

<style>
.area {
  padding-top: 50px;
  margin: 0 auto;
  width: 800px;
}
.bind {
  margin-top: 20px;
  line-height: 40px;
  text-indent: 15px;
}
.imp {
  color: #409eff;
}
</style>
