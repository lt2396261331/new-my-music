export const selectDOM = () => {
  return new Promise((resovle, reject) => {
    const query = wx.createSelectorQuery()
    const queryNode = query.select('.banner-image')
    queryNode.boundingClientRect((res) => {
      resovle(res)
    })
    query.exec()
  })
}