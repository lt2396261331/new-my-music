// components/menu-area/index.js
Component({
  properties: {
    menuList: {
      type: Array,
      value: []
    },
    title: {
      type: String,
      value: '热门歌单'
    }
  },
  methods: {
    onMenuMoreClick() {
      wx.navigateTo({
        url: '/pages/menu-detail/index',
      })
    }
  }
})
