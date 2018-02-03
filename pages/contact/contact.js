const app = getApp()

Page({
    data: {
        shopInfo: null
    },
    onLoad: function (options) {
        // 生命周期函数--监听页面加载
        console.log('contact on load')
        if (app.globalData.shopInfo) {
            this.setData({
                shopInfo: app.globalData.shopInfo
            })
        } else {
            let that = this
            app.globalData.shopInfoCB.push((res) => {
                console.log('contact callfunc run')
                that.setData({
                    shopInfo: res.data
                })
            })
        }
    },
    makePhoneCall: function () {
        wx.makePhoneCall({
            phoneNumber: this.data.shopInfo.phone,
            success: function () {
                console.log("成功拨打电话")
            }
        })
    },

    previewImage: function (e) {
        var current = e.target.dataset.src;
        console.log(current)
        wx.previewImage({
            current: current,
            urls: [current],
        })
    },

    viewLocation: function (e) {
        wx.openLocation({
            latitude: this.data.shopInfo.latitude, // 纬度，范围为-90~90，负数表示南纬
            longitude: this.data.shopInfo.longitude, // 经度，范围为-180~180，负数表示西经
            scale: 28, // 缩放比例
            name: this.data.shopInfo.title, // 位置名
            address: this.data.shopInfo.addr, // 地址的详细说明
        })
    },
})