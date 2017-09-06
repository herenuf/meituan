

$(function(){
	$(".content li").on("tap",function(){
//		console.log(123);
		$(this).addClass("active").siblings().removeClass("active");
	})
	
//	var	list = "";
//	for(var i=0;i<1;i++){
//		$.get("goago.json",function(d){
//			if(typeof(d)=='string'){
//				var d=JSON.parse(d);
//				var arr=d.data;
//				console.log(arr);
//				for(var j=0;j<arr.length;j++){
//					var obj=arr[j];
//					list +=`<ul class="list1">
//								<li>
//									<h3>${obj.h3}</h3>
//									<div class="images">
//										<span><a href="#"><img src="${obj.img1}"/></a></span>
//										<span><a href="#"><img src="${obj.img2}"/></a></span>
//										<span><a href="#"><img src="${obj.img3}"/></a></span>
//									</div>
//									<p class="location"><span>${obj.location}</span><span class="cil"><span class="cil-lis"></span></span><span class="num">${obj.num}</span></p>
//								</li>
//							</ul>`;
//				}
//			}
//			document.querySelector(".list").innerHTML = list;
//		})
//		
//	}

"use strict";

var list = "";
for (var i = 0; i < 10; i++) {
	$.get("goago.json", function (d) {
		if (typeof d == 'string') {
			var d = JSON.parse(d);
			var arr = d.data;
			console.log(arr);
			for (var j = 0; j < arr.length; j++) {
				var obj = arr[j];
				list += "<ul class=\"list1\">\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<h3>" + obj.h3 + "</h3>\n\t\t\t\t\t\t\t\t\t<div class=\"images\">\n\t\t\t\t\t\t\t\t\t\t<span><a href=\"#\"><img src=\"" + obj.img1 + "\"/></a></span>\n\t\t\t\t\t\t\t\t\t\t<span><a href=\"#\"><img src=\"" + obj.img2 + "\"/></a></span>\n\t\t\t\t\t\t\t\t\t\t<span><a href=\"#\"><img src=\"" + obj.img3 + "\"/></a></span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<p class=\"location\"><span>" + obj.location + "</span><span class=\"cil\"><span class=\"cil-lis\"></span></span><span class=\"num\">" + obj.num + "</span></p>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>";
			}
		}
		document.querySelector(".list").innerHTML = list;
	});
}

})
