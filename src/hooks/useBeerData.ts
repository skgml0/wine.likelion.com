import useSWR from 'swr';
import { fetcher } from '../utils/fetcher';
import { BEER_API_ENDPOINT } from '../constants';

export const useBeerData = (path: string) => {
  return useSWR(`${BEER_API_ENDPOINT}${path}`, fetcher);
  // fetcher 데이터 받아오기 위해
  // useSWR 데이터가 잘받아왔는지 상태관리 / SWR 상태관리 라이브러리 
}