import { API } from '@/utils/axios'

export const getResultList = (name?: string) => API(`POST /mock/login/account?name=${name}`)

/** 豆瓣 北美票房榜 */
export const getMovieList = API('GET /douban/v2/movie/us_box')

export const getProxyData = API('GET /mock/getlunbo')

export const mockGet = API('GET /api/testget?name=1')

export const mockPost = API('POST /api/testpost')

export const mockPut = API('PUT /mock/put')

export const mockDelete = API('DELETE /mock/delete')

export const login = API('GET /api/getmethods')

export const mockJsonp = API('GET /nodejs/getInfo')
