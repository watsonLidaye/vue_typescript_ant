import Vue from 'vue'
export default (function() {
	// 数字装字符串
	Vue.filter('numToString', function(value:number) {
		const string = (value+1).toString()
		return string
	})
})()