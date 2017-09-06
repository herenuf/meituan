//监听屏幕宽度发变化，和横竖屏变化，重新这是html的fontsize
window.onload = function() {

	function getRootFontSize() {
		var root = document.documentElement;
		var clientWidth = root.clientWidth;
		console.log(clientWidth)
		root.style.fontSize = clientWidth * 100 / 750 + 'px';
	}
	window.addEventListener('orientationchange', getRootFontSize);
	window.addEventListener('resize', getRootFontSize);
	getRootFontSize();

	var categorySwiper = new Swiper('.category-list', {
		pagination: '.swiper-pagination'
	});

	var myScroll = new IScroll('.content', {

	});

}