// components/menu-item/index.js
Component({
  properties: {
    itemData: {
      type: Object,
      value: {}
    }
  },
  methods: {
    handleClickMenu() {
      const id = this.data.itemData.id
      wx.navigateTo({
        url: `/pages/menu-song/index?type=menu&id=${id}`,
      })
    }
  }
})
