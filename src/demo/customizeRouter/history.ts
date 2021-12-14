import { parsePath } from './utils'

export interface History {
  push(): void
}

export type State = object | null

export type Listener = (location: Location) => void

export interface Location {
  state: State
  hash: string
  search: string
  pathname: string
}

const getLocation = (): Location => {
  const { pathname, search, hash } = window.location
  return {
    pathname,
    search,
    hash,
    state: null,
  }
}

let location = getLocation()

const getNextLocation = (to: string, state: State = null) => ({
  ...parsePath(to),
  state,
})

const listeners: Listener[] = []

const push = (to: string, state?: State) => {
  location = getNextLocation(to, state)
  window.history.pushState(state, '', to)
  listeners.forEach((fn) => fn(location))
}

// 设置监听函数
const listen = (fn: Listener) => {
  listeners.push(fn)
  return function unlisten() {
    listeners = listeners.filter((listener) => listener !== fn)
  }
}

// 处理浏览器的前进后退
window.addEventListener('popstate', () => {
  location = getLocation()
  listeners.forEach((fn) => fn(location))
})

export const history = {
  get location() {
    return location
  },
  push,
  listen,
}
