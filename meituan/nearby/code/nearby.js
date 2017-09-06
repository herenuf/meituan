

$(function(){
	$(".content li").on("tap",function(){
//		console.log(123);
		$(this).addClass("active").siblings().removeClass("active");
	})


//循环加样式数据
//var list = "";
//for(var j = 0; j < 1; j++) {
//	//console.log(obj.h3);
//	//获取json数据
//	$.get("../code/nearby.json", function(d) {
//		var arr = d.data;
////		console.log(arr);
//		//				console.log(arr[1]);
//		for(var i = 0; i < arr.length; i++) {
//			var obj = arr[i];
////			console.log(arr[i]);
//			list +=`<li>
//				<div class="photo"><img src="${obj.img}"/></div>
//				<div class="text">
//					<h3>${obj.h3}</h3>
//					<span class="people"><span class="color">￥</span>${obj.people}</span>
//					<div class="location"><span class="grill">${obj.grill}</span><span>|</span><span class="detailed-address">${obj.address}</span><span class="distance">${obj.distance}</span></div>
//					<div class="like"><span class="num">${obj.num}</span><span>人点赞</span></div>
//					<div class="discount"><span class="quan">${obj.quan}</span class="replace">${obj.replace}</div>
//				</div>
//			</li>`;
//		}
//
//		document.querySelector(".store-list").innerHTML = list;
//	})
//}
"use strict";

var list = "";
for (var j = 0; j < 10; j++) {
	//console.log(obj.h3);
	//获取json数据
	$.get("../code/nearby.json", function (d) {
		
		if(typeof(d)=='string'){
			var d=JSON.parse(d);
			var arr=d.data;
			//console.log(arr);
			//console.log(arr[1]);
			for (var i = 0; i < arr.length; i++) {
				var obj = arr[i];
				//console.log(arr[i]);
				list += "<li>\n\t\t\t\t<div class=\"photo\"><img src=\"" + obj.img + "\"/></div>\n\t\t\t\t<div class=\"text\">\n\t\t\t\t\t<h3>" + obj.h3 + "</h3>\n\t\t\t\t\t<span class=\"people\"><span class=\"color\">\uFFE5</span>" + obj.people + "</span>\n\t\t\t\t\t<div class=\"location\"><span class=\"grill\">" + obj.grill + "</span><span>|</span><span class=\"detailed-address\">" + obj.address + "</span><span class=\"distance\">" + obj.distance + "</span></div>\n\t\t\t\t\t<div class=\"like\"><span class=\"num\">" + obj.num + "</span><span>\u4EBA\u70B9\u8D5E</span></div>\n\t\t\t\t\t<div class=\"discount\"><span class=\"quan\">" + obj.quan + "</span class=\"replace\">" + obj.replace + "</div>\n\t\t\t\t</div>\n\t\t\t</li>";
			}
		}
		

		document.querySelector(".store-list").innerHTML = list;
	});
}
	
})
