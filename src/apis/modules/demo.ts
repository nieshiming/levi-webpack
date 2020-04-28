import { API } from '@/utils/axios';

export const getResultList = (name?: string) => API(`POST /mock/login/account?name=${name}`);
