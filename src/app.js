import CATEGORY_DATA from './data'

// code转汉字大对象
const CodeToText = {}
// 汉字转code大对象
const TextToCode = {}

// 第一级
const categoryObject = CATEGORY_DATA['0']  // 门类数据

let categoryData = []

for (const prop in categoryObject) {
  categoryData.push({
    value: prop,
    label: categoryObject[prop]
  })
  CodeToText[prop] = categoryObject[prop]
  TextToCode[categoryObject[prop]] = {
    code: prop
  }
}

// 第二级
for (let i = 0, len = categoryData.length; i < len; i++) {
  const majorCode = categoryData[i].value
  const majorText = categoryData[i].label
  const majorChildren = []
  for (const prop in CATEGORY_DATA[majorCode]) {
    majorChildren.push({
      value: prop,
      label: CATEGORY_DATA[majorCode][prop]
    })
    CodeToText[prop] = CATEGORY_DATA[majorCode][prop]
    TextToCode[majorText][CATEGORY_DATA[majorCode][prop]] = {
      code: prop
    }
  }
  if (majorChildren.length) {
    categoryData[i].children = majorChildren
  }
}

// 第三级
for (let i = 0, len = categoryData.length; i < len; i++) {
  const majorObj = categoryData[i].children
  const majorText = categoryData[i].label
  if (majorObj) {
    for (let j = 0, len = majorObj.length; j < len; j++) {
      const mediumCode = majorObj[j].value
      const mediumText = majorObj[j].label
      const mediumChildren = []
      for (const prop in CATEGORY_DATA[mediumCode]) {
        mediumChildren.push({
          value: prop,
          label: CATEGORY_DATA[mediumCode][prop]
        })
        CodeToText[prop] = CATEGORY_DATA[mediumCode][prop]
        TextToCode[majorText][mediumText][CATEGORY_DATA[mediumCode][prop]] = {
          code: prop
        }
      }
      if (mediumChildren.length) {
        // 第四级
        for (let k = 0, len = mediumChildren.length; k < len; k++) {
          const smallText = mediumChildren[k].label
          const smallCode = mediumChildren[k].value
          const smallChildren = []
          for (const prop in CATEGORY_DATA[smallCode]) {
            smallChildren.push({
              value: prop,
              label: CATEGORY_DATA[smallCode][prop]
            })
            CodeToText[prop] = CATEGORY_DATA[smallCode][prop]
            TextToCode[majorText][mediumText][smallText][CATEGORY_DATA[smallCode][prop]] = {
              code: prop
            }
            if (smallChildren.length) {
              mediumChildren[k].children = smallChildren
            }
          }
        }
        majorObj[j].children = mediumChildren
      }
    }
  }
}

export { categoryData, CodeToText, TextToCode }
