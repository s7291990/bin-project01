function contentResize(){
	const wrap = document.querySelector('.container');
	const ratio = 1024 / 768;
	const windowRatio = window.innerWidth / window.innerHeight;
	if (windowRatio < ratio) {
		zoom = window.innerWidth / 1024; // 가로가 더 좁은 경우
	} else {
		zoom = window.innerHeight / 768; // 세로가 더 좁은 경우
	}
	wrap.style.transform = 'scale(' + zoom + ')';

	if(isFirst){
		isFirst = false;
		$(".wrapper").addClass("active");
	}
}