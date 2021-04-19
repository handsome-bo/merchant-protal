import Vue from "vue"
 
Vue.filter('dataText',function(val){
	if(val == ''){
		return '/'
	} else {
		return val
	}
})
Vue.filter('Percent',function(val){
	if(!val){
		return '0'
	} else {
		return (val).toFixed(2)
		}
})

Vue.filter('TaxRateFormat',function(val){
	if(!val){
		return '0'
	} else {
		return (val / 100).toFixed(2)
		}
})
 
Vue.filter('MoneyFormat', function(val) {
	if(val) {
		val = val.toString().replace(/\$|\,/g, '');
		if(isNaN(val)) {
			val = "0";
		}
		let sign = (val == (val = Math.abs(val)));
		val = Math.floor(val * 100 + 0.50000000001);
		let cents = val % 100;
		val = Math.floor(val / 100).toString();
		if(cents < 10) {
			cents = "0" + cents
		}
		for(var i = 0; i < Math.floor((val.length - (1 + i)) / 3); i++) {
			val = val.substring(0, val.length - (4 * i + 3)) + ',' + val.substring(val.length - (4 * i + 3));
		}
		return(((sign) ? '' : '-') + val + '.' + cents);
	} else if(val == 0 || val == null) {
		return '0.00'
	}
});

//格式化月份
Vue.filter('formatMonth', function(value) {
	if(!value) {
		return value = ''
	} else {
		let date = new Date(value);
		return formatDate(date, 'yyyy年MM月');
	}
});

//格式化 日期
Vue.filter('formatDate', function(value) {
	if(!value) {
		return value = ''
	} else if(new Date(value) == 'Invalid Date') {
		return value
	} else {
		let date = new Date(value);
		return formatDate(date, 'yyyy-MM-dd');
	}
});
Vue.filter('formatDateDDMMYY', function(value) {
	if(!value) {
		return value = ''
	} else if(new Date(value) == 'Invalid Date') {
		return value
	} else {
		let date = new Date(value);
		return formatDate(date, 'dd/MM/yyyy');
	}
});


Vue.filter('formatHour', function(value) {
	if(!value) {
		return value = ''
	} else {
		let date = new Date(value);
		return formatDate(date, 'yyyy-MM-dd hh:mm');
	}
});

//定义formatDate
export function formatDate(date, fmt) { 
	if(/(y+)/.test(fmt)) {     
		fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));   
	}  
	let o = {     
		'M+': date.getMonth() + 1,
		  'd+': date.getDate(),
		   'h+': date.getHours(),
		  'm+': date.getMinutes(),
		    's+': date.getSeconds()  
	}  
	for(let k in o) {    
		let str = o[k] + '';  
		if(new RegExp(`(${k})`).test(fmt)) {  
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));  
		}  
	} 
	return fmt; 
	console.log(fmt)
}; 
export function numAdd(num1, num2) {
	var sq1, sq2, m;
	try {
		sq1 = num1.toString().split(".")[1].length;
	} catch(e) {
		sq1 = 0;
	}
	try {
		sq2 = num2.toString().split(".")[1].length;
	} catch(e) {
		sq2 = 0;
	}
	m = Math.pow(10, Math.max(sq1, sq2));
	return(num1 * m + num2 * m) / m;
}

function padLeftZero(str) { 
	return('00' + str).substr(str.length);
}  
