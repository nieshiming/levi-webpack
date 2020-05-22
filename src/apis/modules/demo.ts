import { API } from '@/utils/axios';

export const getResultList = (name?: string) => API(`POST /mock/login/account?name=${name}`);

/** 豆瓣 北美票房榜 */
export const getMovieList = API('GET /douban/v2/movie/us_box');

export const getProxyData = API('GET /levis/getlunbo');

export const mockGet = API('GET /levis/get');

export const mockPost = API('POST /levis/post');

export const mockPut = API('PUT /levis/put');

export const mockDelete = API('DELETE /levis/delete');
