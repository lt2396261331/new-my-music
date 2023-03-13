// pages/mian-video/index.js
import { getTopMvList } from '../../services/video'
Page({
  data: {
    mvList: [],
    hasMore: true
  },
  onLoad() {
    this.fetchMvList()
  },
  async fetchMvList() {
    if (!this.data.hasMore) return
    const res = await getTopMvList(20, this.data.mvList.length)
    this.setData({mvList: [ ...this.data.mvList, ...res.data ]})
    this.data.hasMore = res.hasMore
  },

  // 下拉刷新/上拉加载更多
  onReachBottom() {
    this.fetchMvList()
  },
  async onPullDownRefresh() {
    this.data.hasMore = true
    this.setData({ mvList: [] })
    await this.fetchMvList()

    wx.stopPullDownRefresh()
  }
})