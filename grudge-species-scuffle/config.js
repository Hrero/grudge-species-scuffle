const fs = require('fs')

// 小游戏配置项
const config = {
  appid: 'wx4f1d443e3e20a662',
  secret: '6e68ad688849b1e5121f69154c6c6db8',

  httpsConfig: {
    key: fs.readFileSync('./7998885k.key'),
    cert: fs.readFileSync('./7998885p.pem'),
  },

  // 可以用环境变量指定端口，默认 443
  port: process.env.PORT || 7071,
}

module.exports = config