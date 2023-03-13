class hxRequest {
  constructor(baseURL, timeout) {
    this.baseURL = baseURL
    this.timeout = timeout
  }

  request(options) {
    return new Promise((resovle, reject) => {
      wx.request({ 
        ...options,
        url: this.baseURL + options.url,
        timeout: this.timeout,
        success: res => {
          resovle(res.data)
        },
        fail: reject
       })
    })
  }

  get(options) {
    return this.request({ ...options, method: 'get' })
  }

  post(options) {
    return this.request({ ...options, method: 'post' })
  }

  put(options) {
    return this.request({ ...options, method: 'put' })
  }

  delete(options) {
    return this.request({ ...options, method: 'delete' })
  }
}

export default new hxRequest('http://codercba.com:9002', 100000)
