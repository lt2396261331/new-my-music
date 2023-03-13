// pages/menu-detail/index.js
import { getSongMenuTag, getSongMenuList } from "../../services/music"
Page({
  data: {
    songMenus: {}
  },
  onLoad() {
    this.fetchAllMenuList()
  },
  // 网络请求
  async fetchAllMenuList() {
    const { tags } = await getSongMenuTag()
    
    const allFetchList = []
    for (const tag of tags) {
      const promise = getSongMenuList(tag.name)
      allFetchList.push(promise)
    }

    Promise.all(allFetchList).then(res => {
      this.setData({ songMenus: res })
    })
  }
})