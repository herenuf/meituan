//监听屏幕宽度发生的变化，和横竖屏的变化，重新设置HTML的fontsize
onload = function() {
	function getRootFontSize() {
		var root = document.documentElement;
		var clientWidth = root.clientWidth;
		console.log(clientWidth); //得到屏幕宽
		root.style.footSize = clientWidth * 100 / 750 + "px";
	}
	window.addEventListener('orientationchange', getRootFontSize);
	window.addEventListener('resize', getRootFontSize);
	getRootFontSize();
	var categorySwiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
	});
	var categorySwiper = new Swiper('.head', {
		//		pagination: '.swiper-pagination',
		autoplay: 2000,
		speed: 300,
		autoplayDisableOnInteraction: false,
		pagination: '.swiper-pagination',
	});
	
	$(".city").click(function(){
		console.log(123);
	})
	


//参数1：DOM结构对象，或选择器
//参数2：
var myScroll = new IScroll('.content', {
	bounce: true,
	startY: -50,
	probeType: 3
});

console.log('maxScrollY', myScroll.maxScrollY);

myScroll.on('scroll', function() {
	//当能够触发下拉刷新时,让箭头换向
	if(myScroll.y >= 0) {
		document.querySelector('.head1 img').className = 'up';
	} else {
		document.querySelector('.head1 img').className = '';
	}

	//
	var disY = myScroll.y - myScroll.maxScrollY;
	if(disY <= 0) {
		document.querySelector('.foot img').className = 'down';
	} else if(disY > 0 && disY < 50) {
		document.querySelector('.foot img').className = '';
	}
})

myScroll.on('scrollEnd', function() {
	//判断松手滚动停止后,是否触发下拉刷新
	if(myScroll.y < 0 && myScroll.y > -50) {
		//没有触发下拉刷新,回到-50的位置
		myScroll.scrollTo(0, -50, 300);
	} else if(myScroll.y == 0) {
		//触发了下拉刷新,需要更换指示图片
		//更换图片
		document.querySelector('.head1 img').src = 'img/ajax-loader.gif';
		//发送请求,执行刷新
		setTimeout(function() {
			endRefresh();
		}, 2000);
	}

	//判断松手滚动停止后,是否触发上拉加载更多
	var disY = myScroll.y - myScroll.maxScrollY;
	if(disY <= 0) {
		//触发了
		document.querySelector('.foot img').src = 'img/ajax-loader.gif';
		//加载更多请求下一页数据,
		setTimeout(function() {
			endLoadMore();
		}, 2000);

	} else if(disY > 0 && disY < 50) {
		//没有触发,回到原来位置
		myScroll.scrollTo(0, myScroll.maxScrollY + 50, 300);
	}

})

//停止下拉刷新的方法
function endRefresh() {
	document.querySelector('.head1 img').src = 'img/arrow.png';
	myScroll.scrollTo(0, -50, 300);
}

//停止上拉加载更多的方法
function endLoadMore() {
	document.querySelector('.foot img').src = 'img/arrow.png';
	myScroll.scrollTo(0, myScroll.maxScrollY + 50, 300);
}



//////循环加样式数据
//var list = "";
//for(var j = 0; j < 1; j++) {
//	//console.log(obj.h3);
//	//获取json数据
//	$.get("code/home.json", function(d) {
//		var arr = d.data;
////		console.log(arr);
//		//				console.log(arr[1]);
//		for(var i = 0; i < arr.length; i++) {
//			var obj = arr[i];
////			console.log(arr[i]);
//			list += `<li class="dealcard active">
//						<div class="imgbox"><img src="${obj.img}"/></div>
//						<div class="textbox">
//							<h3>${obj.h3}<span class="run">${obj.run}</span></h3>
//							<p class="set-meal">${obj.set}</p>
//							<p class="price">￥<span class="price-weight">${obj.price}</span><span>元</span><span class="rate">&nbsp;门市价:<span class="num">${obj.num}</span>元</span><span class="sold">${obj.sold}</span></p>
//						</div>
//					</li>`;
//		}
//
//		document.querySelector(".four-list").innerHTML = list;
//		myScroll.refresh();
//	})
//}

"use strict";

//循环加样式数据
var list = "";
for (var i = 0; i < 10; i++) {
	//console.log(obj.h3);
	//获取json数据
	$.get("code/home.json", function (d) {
//		console.log(typeof d)
		if(typeof(d)=='string'){
			var d=JSON.parse(d);
			console.log(typeof d);
			var arr = d.data;
			for(var j = 0; j<arr.length;j++) {
				var obj = arr[j];
				//			console.log(arr[i]);
				list += "<li class=\"dealcard active\">\n\t\t\t\t\t\t<div class=\"imgbox\"><img src=\"" + obj.img + "\"/></div>\n\t\t\t\t\t\t<div class=\"textbox\">\n\t\t\t\t\t\t\t<h3>" + obj.h3 + "<span class=\"run\">" + obj.run + "</span></h3>\n\t\t\t\t\t\t\t<p class=\"set-meal\">" + obj.set + "</p>\n\t\t\t\t\t\t\t<p class=\"price\">\uFFE5<span class=\"price-weight\">" + obj.price + "</span><span>\u5143</span><span class=\"rate\">&nbsp;\u95E8\u5E02\u4EF7:<span class=\"num\">" + obj.num + "</span>\u5143</span><span class=\"sold\">" + obj.sold + "</span></p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>";
			}
	
			document.querySelector(".four-list").innerHTML = list;
			myScroll.refresh();
		}
	});
}
	

}