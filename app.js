// app.js

App({
  globalData: {
    statusBarHeight: 44,
    contentHeight: 300
  },
  onLaunch() {
    wx.getSystemInfo({
      success: (result) => {
        console.log(result)
        this.globalData.statusBarHeight = result.statusBarHeight
        this.globalData.contentHeight = result.windowHeight - result.statusBarHeight - 44

      },
    })
  }
})
