//findMusic.js
var util = require('../../utils/util.js');
//获取应用实例
const app = getApp();

Page({
  data: {
    inputShow: false,
    inputValue: "",
    navIndex: 0,
    navbar: ['音乐馆', '网络热歌'],
    swiperItem: [
      { id: 0, url: "../../image/banner/01.jpg", },
      { id: 1, url: "../../image/banner/02.jpg", },
      { id: 2, url: "../../image/banner/03.jpg", },
      { id: 3, url: "../../image/banner/04.jpg", },
      { id: 4, url: "../../image/banner/05.jpg", },
      { id: 5, url: "../../image/banner/06.jpg", },
      { id: 6, url: "../../image/banner/07.jpg", },
      { id: 7, url: "../../image/banner/08.jpg", },
      { id: 8, url: "../../image/banner/09.jpg", },
      { id: 9, url: "../../image/banner/10.jpg", }
    ],
    swiperCurrent: 0,
    recommend: [],
    topList: [],
    hotSearch: {
      hotkey: [],
      hotname: ""
    },
    searchKeyword: "",
    searchResList: [],
    searchPageNum: 1,
    isFromSearch: true,
    searchLoading: false,
    searchComplete: false,
    radioList: [],    //电台
    khotSong: []
  },
  
 
  
  

  showItem: function () {
    this.setData({
      inputShow: true
    });
  },
  hideItem: function () {
    this.setData({
      inputShow: false,
      inputValue: ""
    });
  },
  clearInput: function () {
    this.setData({
      inputValue: "",
    });
  },
  bindNavTab: function (e) {
    this.setData({
      navIndex: e.currentTarget.dataset.index
    });
  },
  bindSwiperChange: function (e) {
    this.setData({
      swiperCurrent: e.detail.current
    });
  },

  
  listenerButtonPlay: function () {
    wx.playBackgroundAudio({
      dataUrl:    'http://ws.stream.qqmusic.qq.com/101369814.m4a?fromtag=46',

      title: 'BY.me',
      //图片地址地址
      coverImgUrl: 'http://i.gtimg.cn/music/photo/mid_album_90/a/F/000QgFcm0v8WaF.jpg'

    })
  },
  //监听button暂停按钮
  listenerButtonPause: function () {
    wx.pauseBackgroundAudio({
    });
    console.log('暂停播放')
  },
  /**
   * 播放状态
   */
  listenerButtonGetPlayState: function () {
    wx.getBackgroundAudioPlayerState({
      success: function (res) {
        // success
        //duration  选定音频的长度（单位：s），只有在当前有音乐播放时返回
        console.log('duration:' + res.duration)
        console.log('currentPosition:' + res.currentPosition)
        //status    播放状态（2：没有音乐在播放，1：播放中，0：暂停中）
        console.log('status:' + res.status)
        console.log('downloadPercent:' + res.downloadPercent)
        //dataUrl   歌曲数据链接，只有在当前有音乐播放时返回 
        console.log('dataUrl:' + res.dataUrl)
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  /**
   * 设置进度
   */
  listenerButtonSeek: function () {
    wx.seekBackgroundAudio({
      position: 40
    })
  },
  /**
   * 停止播放
   */
  listenerButtonStop: function () {
    wx.stopBackgroundAudio({
    })
    console.log('停止播放')
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数  
    /** 
     * 监听音乐播放 
     */
    wx.onBackgroundAudioPlay(function () {
      // callback
      console.log('onBackgroundAudioPlay')
    })
    /**
     * 监听音乐暂停
     */
    wx.onBackgroundAudioPause(function () {
      // callback
      console.log('onBackgroundAudioPause')
    })
    /**
     * 监听音乐停止
     */
    wx.onBackgroundAudioStop(function () {
      // callback
      console.log('onBackgroundAudioStop')
    })
  }


 

});