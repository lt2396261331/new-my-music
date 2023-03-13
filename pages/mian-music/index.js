// pages/mian-music/index.js
import _ from 'underscore'
import { getMusicBanner, getSongMenuList } from '../../services/music'
import { selectDOM } from '../../utils/qeury-select'
import recommendStore from '../../store/recommendStore'
import rankingStore, { rankingMap } from '../../store/rankingStore'

const throttleSelectFn = _.throttle(selectDOM, 50)

Page({
  data: {
    banners: [],
    bannerHeight: 0,
    songInfo: [],
    songs: [],
    hotMenuList: [],
    recMenuList: [],
    rankingInfo: {},
    hiddenRankingTitle: false
  },
  onLoad() {
    this.fetchBannerList()
    this.fetchHotMenuList()
    this.fetchRecMenuList()

    recommendStore.dispatch("fetchRecommendSongs")
    recommendStore.onState("recommendSongInfo", this.getSongsData)

    rankingStore.dispatch("getAllRankingAction")
    for (const key in rankingMap) {
      rankingStore.onState(key, this.getRankingData(key))
    }
  },

  // 页面事件
  handleSearchClick() {
    console.log("handleSearchClick")
  },
  swiperLoaded() {
    throttleSelectFn().then(res => {
      this.setData({ bannerHeight: res.height })
    })
  },
  recommendMore() {
    wx.navigateTo({
      url: '/pages/menu-song/index?type=recommend',
    })
  },
  handleSongItemTap(event) {
    const id = event.currentTarget.dataset.id
    const key = "recommendSongInfo"
    wx.navigateTo({
      url: `/pages/music-play/index?id=${id}&key=${key}`,
    })
  },

  // 网络请求
  async fetchBannerList() {
    const { banners } = await getMusicBanner()
    this.setData({ banners })
  },
  async fetchHotMenuList() {
    const res = await getSongMenuList("流行")
    this.setData({ hotMenuList: res.playlists })
  },
  async fetchRecMenuList() {
    const res = await getSongMenuList()
    this.setData({ recMenuList: res.playlists })
  },


  // ================= 获取store中数据 ==================
  getSongsData(value) {
    if (!value.tracks) return
    this.setData({ songInfo: value, songs: value.tracks.slice(0, 6) })
  },

  getRankingData(key) {
    return value => {
      if (!value.name) return
      const newRankingInfo = { ...this.data.rankingInfo, [key]: value }
      this.setData({ rankingInfo: newRankingInfo })
      if (!this.data.hiddenRankingTitle) this.setData({ hiddenRankingTitle: true })
    }
  },



  onUnload() {
    recommendStore.offState("recommendSongInfo", this.getSongsData)
  }
})