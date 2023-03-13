// pages/music-play/index.js
import { getSongDetail, getLyricDetail } from '../../services/music'

const app = getApp()

Page({
  data: {
    statusBarHeight: 0,
    contentHeight: 0,
    tabbarTag: ["歌曲", "歌词"],
    id: '',
    key: '',
    songInfo: {},
    lyrci: ""
  },
  onLoad(option) {
    const { id, key } = option
    this.setData({ 
      id, 
      key, 
      statusBarHeight: app.globalData.statusBarHeight,
      contentHeight: app.globalData.contentHeight
    })

    // 发送请求
    this.fetchSongDetail()
    this.fetchLyrDetail()
  },

  // ==============网络请求=================
  // 获取歌曲信息
  async fetchSongDetail() {
    const res = await getSongDetail(this.data.id)
    this.setData({ songInfo: res.songs[0] })
  },
  // 获取歌词信息
  async fetchLyrDetail() {
    const res = await getLyricDetail(this.data.id)
    this.setData({ lyrci: res.lrc.lyric })
  }
})