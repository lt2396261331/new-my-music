import hxRequest from './index'

// 游客登录
export function login() {
  return hxRequest.get({
    url: '/register/anonimous'
  })
}

export function refresh() {
  return hxRequest.get({
    url: '/login/refresh'
  })
}
