// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    isShow: true
  },

  beginToLearn() {
    // 点击跳转到list页面
    wx.navigateTo({
      url: '/pages/list/list'
    })
  },

  // 获取用户信息
  onGotUserInfo(){
    // 判断用户是否授权了
    wx.getSetting({
      success: (data) => {
        // 已授权
        if (data.authSetting['scope.userInfo']){
          this.setData({
            isShow: false
          })
          // 没授权
        }else{
          this.setData({
            isShow: true
          })
        }
      }
    }),
    // 获取用户登录的信息
    wx.getUserInfo({
      success: (data) => {
        this.setData({
          userInfo: data.userInfo
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log('onLoad 页面加载')
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // console.log('onReady 页面初次渲染完成')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // console.log('onShow 页面显示')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})