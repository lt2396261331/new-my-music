// pages/video-detail/index.js
import { getMvUrl, getMvDetail, getRelated, getDetailInfo } from '../../services/video'
Page({
  data: {
    videoId: 0,
    url: '',
    detailInfo: {},
    relatedList: [],
    mvDetailCount: {}
  },
  onLoad(option) {
    this.data.videoId = option.id
    this.fetchMvDetail()
    this.fetchRelated()
    this.fetchDetailInfo()
  },

  // 网络请求
  async fetchMvDetail() {
    const { data } = await getMvUrl(this.data.videoId)
    const { data: info } = await getMvDetail(this.data.videoId)
    this.setData({ url: data.url, detailInfo: info })
  },
  async fetchRelated() {
    const res = await getRelated(this.data.videoId)
    this.setData({ relatedList: res.data })
  },
  async fetchDetailInfo() {
    const res = await getDetailInfo(this.data.videoId)
    this.setData({
      mvDetailCount: res
    })
  }
})