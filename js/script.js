var _hmt = _hmt || [];
(function() {
	var hm = document.createElement("script");
	hm.src = "https://hm.baidu.com/hm.js?d0b8c6014f11f0286bf530137cbcdda1";
	var s = document.getElementsByTagName("script")[0];
	s.parentNode.insertBefore(hm, s);
})();
$(function() {

	//禁止右键代码，单机鼠标右键时禁止它的默认事件
	/*var body = document.getElementsByTagName('body')[0];
	body.oncontextmenu = function() {
		return false;
	}*/

	//tab选项卡
	var $tabList = $('.bg211 ul li');
	var $tab = $('.bg212-w');
	$tabList.hover(function() {
		$(this).addClass('this').siblings().removeClass('this');
		var index = $tabList.index(this);
		$tab.find('>div').eq(index).show().siblings().hide();
	})
	$tabList.click(function() {
		$(this).addClass('this').siblings().removeClass('this');
		var index = $tabList.index(this);
		$tab.find('>div').eq(index).show().siblings().hide();
		return false;
	});
	$tabList.eq(0).click();
	//首页渐现效果
	var jsn = $('#jsn'),
		tgn = $('#tgn'),
		kfn = $('#kfn'),
		csss = $('.css'),
		top = $('#top');
	if(jsn.length > 0) {
		$(window).scroll(function() {
			if($(window).scrollTop() > 0) {
				jsn.addClass('t-3');
				jsn.find('.web-l').addClass('n-3');
				jsn.find('.web-r').addClass('n-3r');
				tgn.addClass('t-3');
				tgn.find('.web-l').addClass('n-3');
				tgn.find('.web-r').addClass('n-3r');
				kfn.addClass('t-3');
				kfn.find('.web-l').addClass('n-3');
				kfn.find('.web-r').addClass('n-3r');
				top.addClass('t-3');
			}
			if($(window).scrollTop() > $('#jsn').offset().top - $(window).height()) {
				$('#jsn').addClass('t-3h').find('.web-l,.web-r').addClass('t-3h');
			} else {
				$('#jsn').removeClass('t-3h').find('.web-l,.web-r').removeClass('t-3h');
			}
			if($(window).scrollTop() > $('#tgn').offset().top - $(window).height()) {
				$('#tgn').addClass('t-3h').find('.web-l,.web-r').addClass('t-3h');
			} else {
				$('#tgn').removeClass('t-3h').find('.web-l,.web-r').removeClass('t-3h');
			}
			if($(window).scrollTop() > $('#kfn').offset().top - $(window).height()) {
				$('#kfn').addClass('t-3h').find('.web-l,.web-r').addClass('t-3h');
			} else {
				$('#kfn').removeClass('t-3h').find('.web-l,.web-r').removeClass('t-3h');
			}
			if($(window).scrollTop() > $('#top').offset().top - $(window).height() + 100) {
				$('#top').addClass('t-3h');
			} else {
				$('#top').removeClass('t-3h');
			}
		});
	}

	//banner
	var bannerSlider = new Slider($('#banner_tabs'), {
		time: 5000,
		delay: 400,
		event: 'hover',
		auto: true,
		mode: 'fade',
		controller: $('#bannerCtrl'),
		activeControllerCls: 'active'
	});
	$('#banner_tabs .flex-prev').click(function() {
		bannerSlider.prev()
	});
	$('#banner_tabs .flex-next').click(function() {
		bannerSlider.next()
	});
	//右侧客服
	var $qq = $('#qq'),
		$zx = $('#zx'),
		$zxn = $('#zxn'),
		$re = $('#re');
	$zx.click(function() {
		$zxn.toggle();
	});
	$re.click(function() {
		$(this).find('div').slideToggle(200);
		return false;
	})
	$(window).scroll(function() {
		if($(window).scrollTop() > 400) {
			$qq.fadeIn(500); //一秒渐入动画

		} else {
			$qq.fadeOut(500);
		}
	});
	//返回顶部
	top.click(function() {
		$('body,html').animate({
			scrollTop: 0
		}, 300);
		return false;
	});
	$('.itopw').click(function() {
		$('body,html').animate({
			scrollTop: 0
		}, 300);
		return false;
	});
	$('.jb').fadeOut();
	
	//向左滚动效果
	if($('#demo').length > 0) {
		var speed = 50; //数字越大速度越慢
		var t = $('#demo')[0];
		var t1 = $('#demo1')[0];
		var t2 = $('#demo2')[0];
		t2.innerHTML = t1.innerHTML;

		function Marquee() {
			if(t2.offsetWidth - t.scrollLeft <= 0)
				t.scrollLeft -= t1.offsetWidth;
			else {
				t.scrollLeft++;
			}
		}
		var MyMar = setInterval(Marquee, speed);
		t.onmouseover = function() {
			clearInterval(MyMar)
		};
		t.onmouseout = function() {
			MyMar = setInterval(Marquee, speed)
		};
	} 
	
	//跳到
	/*$('.tgs').click(function() {
		var scroll_offset = csss.offset();
		$("body,html").animate({
			scrollTop: scroll_offset.top
		}, 500);
		return false;
	});
	$('.js').click(function() {
		var scroll_offset = jsn.offset();
		$("body,html").animate({
			scrollTop: scroll_offset.top
		}, 500);
		return false;
	});
	$('.tg').click(function() {
		var scroll_offset = tgn.offset();
		$("body,html").animate({
			scrollTop: scroll_offset.top
		}, 500);
		return false;
	});
	$('.kf').click(function() {
		var scroll_offset = kfn.offset();
		$("body,html").animate({
			scrollTop: scroll_offset.top
		}, 500);
		return false;
	});
	$('.yxx').click(function() {
		var scroll_offset = $("#yxn").offset();
		$("body,html").animate({
			scrollTop: scroll_offset.top
		}, 500);
		return false;
	});
	$('.bpp').click(function() {
		var scroll_offset = $("#bpn").offset();
		$("body,html").animate({
			scrollTop: scroll_offset.top
		}, 500);
		return false;
	});*/
	
	
})
try{window.console&&window.console.log&&(
	console.log("一张网页，要经历怎样的过程，才能抵达用户面前？\n一位新人，要经历怎样的成长，才能站在技术之巅？\n探寻这里的秘密；\n体验这里的挑战；\n成为这里的主人；\n加入霸屏，你，可以影响世界。\n"),
	console.log("欢迎加入我们","color:red")
	)}