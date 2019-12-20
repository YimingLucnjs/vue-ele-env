module.exports = {
  plugins: {
    "autoprefixer": {},
    "postcss-pxtorem": {
      "rootValue": 100, 
      "propList": ["*"], // 转换为rem的属性
      "unitPrecision": 5, // rem 保留小数位数 
      "selectorBlackList": [], // 不转换的class，支持regx
      "minPixelValue": 14, // 小于14的px值不被转换
    }
  }
}
