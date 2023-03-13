// pages/menu-song/index.js
import rankingStore, { rankingMap } from '../../store/rankingStore'
import recommendStore from '../../store/recommendStore'
import { getPlaylistDetail } from '../../services/music'

Page({
  data: {
    songInfo: {},
    key: "",
    type: ""
  },
  onLoad(option) {
    const { key, type, id } = option
    this.setData({ key, type })
    if (type === "ranking") {
      rankingStore.onState(key, this.getStroeData)
    } else if (type === 'recommend') {
      recommendStore.onState("recommendSongInfo", this.getStroeData)
    } else {
      this.getMenuInfo(id)
    }
  },
  // ================网络请求===================
  async getMenuInfo(id) {
    const res = await getPlaylistDetail(id)
    this.setData({songInfo: res.playlist})
  },


  // ================获取store数据==============
  getStroeData(value) {
    this.setData({ songInfo: value })
  },

  // 销毁
  onUnload() {
    if (this.data.type === "ranking") {
      rankingStore.offState(this.data.key, this.getStroeData)
    } else if (this.data.type === 'recommend') {
      recommendStore.offState("recommendSongInfo", this.getStroeData)
    }
  }
})