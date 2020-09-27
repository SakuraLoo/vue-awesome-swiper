/* axios的code，约定code代码 */

export const SUCC_CODE = 0; // 成功
export const TIMEOUT = 10000; // 10秒后还未获取到数据，则报错超时

export const HOME_RECOMMEND_PAGE_SIZE = 20;
export const jsonpOptions = {
  param: 'callback',
  timeout: TIMEOUT
};