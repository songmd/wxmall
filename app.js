//app.js
App({
  onLaunch: function () {
    console.log('app launch')
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getUserInfo({
      success: res => {
        // 可以将 res 发送给后台解码出 unionId
        this.globalData.userInfo = res.userInfo
        console.log(res.userInfo)
      },
      fail: res => {
        console.log(res)
      }
    })

    wx.request({
      url: this.globalData.server,
      data: {},
      success: (res) => {
        console.log(res.data)
        this.globalData.shopInfo = res.data
        this.globalData.shopInfoCB.forEach(callFun => {
          callFun(res)
        });
      },
    })
  },
  globalData: {
    userInfo: null,
    server: 'https://tingjieshaoer.cn/shop2/user/songmd',
    // server: 'http://127.0.0.1:8000/shop2/user/songmd',
    shopInfo: null,
    shopInfoCB: [], //shop info 数据获取成功的回调函数列表
  }
})


