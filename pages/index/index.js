//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    shopInfo: null,

    banners: ['../../image/green_tri.png',
      '../../image/location.png',
      '../../image/wechatHL.png',
      '../../image/icon_foot.png',
    ],
    notices: [
      '本店开业大酬宾！！',
      '小程序只要两元，一律两元',
      '三年免收维护费',
    ],
    goods: [{
        pic: '../../image/icon_API.png',
        desc: 'API',
        price: 40,
        originalPrice: 20,
      },
      {
        pic: '../../image/icon_API.png',
        desc: 'API',
        price: 40,
        originalPrice: 20,
      },
      {
        pic: '../../image/icon_API.png',
        desc: 'API',
        price: 40,
      },
      {
        pic: '../../image/icon_API.png',
        desc: 'API',
        price: 40,
        originalPrice: 20,
      },
      {
        pic: '../../image/icon_API.png',
        desc: 'API',
        price: 40,
        originalPrice: 20,
      },
      {
        pic: '../../image/icon_API.png',
        desc: 'API',
        price: 40,
        originalPrice: 20,
      },
      {
        pic: '../../image/icon_API.png',
        desc: 'API',
        price: 40,
        originalPrice: 20,
      },

    ]
  },

  onLoad: function () {
    console.log('index on load')
    if (app.globalData.shopInfo) {
      console.log('index data already ok')
      this.setData({
        shopInfo: app.globalData.shopInfo
      })
      wx.setNavigationBarTitle({
        title: app.globalData.shopInfo.title,
      })
    } else {
      let that = this
      app.globalData.shopInfoCB.push((res) => {
        console.log('index callfunc run')
        that.setData({
          shopInfo: res.data
        })
        console.log(res.data.title)
        wx.setNavigationBarTitle({
          title: res.data.title,
        })
      })
    }
  },
  //事件处理函数
  toDetailsTap: function (e) {
    var id = e.currentTarget.dataset.id;
    console.log(e)
    console.log(id)
    console.log(app.globalData.shopInfo.goods[parseInt(id)])

    wx.setStorageSync('goods-taped', app.globalData.shopInfo.goods[parseInt(id)])
    wx.navigateTo({
      url: '../goodsdetail/goodsdetail',
    })
  },
})