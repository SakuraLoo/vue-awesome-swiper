/* axios 获取数据 */

import axios from 'axios'
import jsonp from '../assets/js/jsonp';
import { SUCC_CODE, TIMEOUT, HOME_RECOMMEND_PAGE_SIZE, jsonpOptions } from './config'

// 打乱数据顺序
const shuffle = (arr) => {
  const arrLength = arr.length;
  let i = arrLength;
  let rndNum;

  while (i--) {
    if (i !== (rndNum = Math.floor(Math.random() * arrLength))) {
      [arr[i], arr[rndNum]] = [arr[rndNum], arr[i]];
    }
  }
  return arr;
}

// 获取幻灯片数据 -- ajax
export const getHomeSlider = () => {
  return axios.get('http://www.imooc.com/api/home/slider', {
    timeout: TIMEOUT  
  }).then(res => {
    if (res.data.code === SUCC_CODE) {
      let sliders = res.data.slider;
      const slider = [sliders[Math.floor(Math.random() * sliders.length)]]; // 在slider中取随机数，放在一个数组中
      sliders = shuffle(sliders.filter(() => Math.random() >= 0.5));
      if (sliders.length === 0) {
        sliders = slider;
      }

      return sliders;
    }

    // 抛出错误
    throw new Error('没有成功获取到数据！');
  }).catch(err => { // 捕获错误：网络、超时
    if(err) {
      console.log(err)
    }

    return [ // 捕获到错误，放张404图片，告知用户
      {
        linkUrl: 'https://www.imooc.com',
        picUrl: require('assets/img/404.png')
      }
    ]
  }).then(data => { // 当用户网络很慢的时候，防止页面空白，所以延迟获取的时间
    return new Promise(resolve => { // 异步
      setTimeout(() => {
        resolve(data);
      }, 1000);
    })
  })
}

// 获取热门推荐数据 -- jsonp
export const getHomeRecommend = (page=1,psize=HOME_RECOMMEND_PAGE_SIZE) => {
  const url = 'https://ju.taobao.com/json/tg/ajaxGetItemsV2.json';
  const params = {
    page,
    psize,
    type:0,
    frontCatId:''
  }

  return jsonp(url,params,jsonpOptions).then(res => {
    if(res.code === '200') { // 正确 - 1
      return res;
    }

    throw new Error('没有成功获取到数据！');
  }).catch(err => { // 错误
    if(err) {
      console.log(err)
    }
  }).then(data => {  // 正确 - 2
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    })
  })
}