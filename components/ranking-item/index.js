// components/ranking-item/index.js
Component({
  properties: {
    itemData: {
      type: Object,
      value: {}
    },
    key: {
      type: String,
      value: ""
    }
  },
  methods: {
    handleTapRanking() {
      const key = this.properties.key
      wx.navigateTo({
        url: `/pages/menu-song/index?type=ranking&key=${key}`,
      })
    }
  }
})
