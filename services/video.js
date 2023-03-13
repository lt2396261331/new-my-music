import hxRequest from './index.js'

export function getTopMvList(limit = 20, offset = 0) {
  return hxRequest.get({
    url: '/top/mv',
    data: {
      limit,
      offset
    }
  })
}

export function getMvUrl(id) {
  return hxRequest.get({
    url: '/mv/url',
    data: {
      id,
      r: 1080
    }
  })
}

export function getMvDetail(mvid) {
  return hxRequest.get({
    url: '/mv/detail',
    data: {
      mvid
    }
  })
}

export function getRelated(id) {
  return hxRequest.get({
    url: '/related/allvideo',
    data: {
      id
    }
  })
}

// 获取mv点赞转发评论数数据
export function getDetailInfo(mvid) {
  return hxRequest.get({
    url: '/mv/detail/info',
    data: {
      mvid
    }
  })
}