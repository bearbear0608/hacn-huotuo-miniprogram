// pages/successful/successful.js
const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {},

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function(options) {
    var navigateTitle = '提交成功'
    var successful = options.successful ? options.successful : '信息提交成功'
    var alert = options.alert ? options.alert : "我们已经收到你的反馈信息"
    var remarks = '注：'
    var notice = options.notice ? options.notice : '请勿重复提交。'
    var exit = '返回'


    this.setData({
      navigateTitle,
      successful,
      alert,
      notice,
      remarks,
      exit,
      successful
    })

    wx.setNavigationBarTitle({
      title: navigateTitle,
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function() {},

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function() {
    this.initData();
  },

  initData: function() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function() {},

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function() {},

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function() {

  },

  onShareAppMessage() {
    return app.data.shareData
  },

  exit: function() {
    wx.reLaunch({
      url: '/pages/officestatus/officestatus',
    })
  },
})