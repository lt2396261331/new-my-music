// components/video-item/index.js
Component({
  properties: {
    itemData: {
      type: Object,
      value: {}
    }
  },
  methods: {
    clickVideoItem() {
      wx.navigateTo({
        url: `/pages/video-detail/index?id=${this.properties.itemData.id}`
      })
    }
  }
})
