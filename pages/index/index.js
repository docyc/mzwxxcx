// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "bannerData":[
      {"id":1,"name":"药食同源","picurl":"../../images/banner01.jpg"},
      { "id": 2, "name": "中医特色诊疗1", "picurl": "../../images/banner02.jpg" },
      { "id": 3, "name": "中医特色诊疗2", "picurl": "../../images/banner03.jpg" },
      { "id": 4, "name": "99元储蓄金", "picurl": "../../images/banner04.jpg" },
      { "id": 5, "name": "会员计划", "picurl": "../../images/banner05.jpg" }
    ],
    "navportData":[
      { "id": 1, "name": "药食同源", "catalog": "ysty", "picurl": "../../images/tabicon01.jpg" },
      { "id": 2, "name": "特色医疗", "catalog": "tsyl", "picurl": "../../images/tabicon02.jpg" },
      { "id": 3, "name": "新视界眼科", "catalog": "xsjyk", "picurl": "../../images/tabicon03.jpg" },
      { "id": 4, "name": "美昂口腔", "catalog": "makq", "picurl": "../../images/tabicon04.jpg" }
    ],
    "srcollStatus":true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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
    console.log('2222')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if(this.data.srcollStatus) return

    console.log('1111')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})