// pages/content/lists/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageTitle:'',
    lists: [
      {
        id:1,
        picurl:'../../../images/hy-max.jpg',
        title:'会员服务',
        description:'只要99元，享四重大礼包',
        price:'99'
      }, 
      {
        id:2,
        picurl:'../../../images/tszl-max.jpg',
        title:'中医特色诊疗',
        description:'专治久咳不愈、过敏哮喘、月经不调',
        price:'199'
      }, 
      {
        id:3,
        picurl:'../../../images/lszl-max.jpg',
        title:'绿色治疗',
        description:'只各种绿色治疗，让你更安心',
        price:'98'
      }, 
      {
        id:4,
        picurl:'../../../images/xsjyk-max.jpg',
        title:'新视界眼科',
        description:'关注眼睛健康，重现清晰世界',
        price:'999'
      }, 
      {
        id:5,
        picurl:'../../../images/makq-max.jpg',
        title:'美昂口腔',
        description:'关注口腔健康，让生活更美好',
        price:'888'
      }
    ],
    "srcollStatus":true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    this.setData({
      pageTitle:options.name
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.data.pageTitle,
    }) 
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
    setTimeout(()=>{console.log('sss');
      wx.stopPullDownRefresh()
    },1000)
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