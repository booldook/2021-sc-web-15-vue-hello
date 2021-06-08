new Vue({
	el: '#app',
	data: {
		title: '',
		isShowImg: false,
	},
	methods: {
		onShowImg() {
			this.isShowImg = true
		},
		onHideImg() {
			this.isShowImg = false
		}
	}
})







// ES5
var obj = {
	title: 'ABCD',
	fn: function(){

	}
}

// ES6
const obj2 = {
	title: 'ABCD',
	fn() {

	}
}