new Vue({
	el: '#app',
	data: {
		headerTitle: 'Vue로 만든 갤러리',
		headerDesc: 'Vue :: Page 방식 코딩',
		thumb: [
			{ id: 0, title: '1번 사진', src: '../img/p1.jpg' },
			{ id: 1, title: '2번 사진', src: '../img/p2.jpg' },
			{ id: 2, title: '3번 사진', src: '../img/p3.jpg' },
			{ id: 3, title: '4번 사진', src: '../img/p4.jpg' },
			{ id: 4, title: '5번 사진', src: '../img/p5.jpg' },
			{ id: 5, title: '6번 사진', src: '../img/p6.jpg' },
			{ id: 6, title: '7번 사진', src: '../img/p7.jpg' },
			{ id: 7, title: '8번 사진', src: '../img/p8.jpg' },
		],
		selectedImg : '../img/p1.jpg',
	},
	methods: {
		onThumbClick(e) {
			var id = e.target.id.replace('thumb', '')
			this.selectedImg = this.thumb[id].src
			this.headerDesc = this.thumb[id].title
		}
	}
})