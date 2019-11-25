//  接口服务
// var store = require('@/vuex/store').default.state
// var config = require('../config').default
import config from '../config'
import store from '@/store'
import common from '../common'
import axios from 'axios' 
// import Lockr from 'lockr'

const api = {}
//  域名
const url = (function() {
	let urls =''

	if (location.href.indexOf('test')!=-1||location.href.indexOf('localhost')!=-1||location.href.indexOf('127.0.0.1')!=-1) {
		urls = 'http://test.backend.txlinker.com/'
	} else {
		urls = 'http://api.backend.txlinker.com/'
	} 
	return urls
})()
axios.interceptors.request.use(config=> {
	return config;
  }, err=> {
	  console.log('请求超时')
	return Promise.resolve(err);
  })
  axios.interceptors.response.use(data=> {
	if (data.status && data.status == 200 && data.data.status == 'error') {
	  console.log(data.data.msg) 
	  return;
	}
	return data;
  }, err => {
	console.log(err)
	return Promise.resolve(err);
  })

export default { api, url }
