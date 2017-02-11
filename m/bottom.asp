
</div>
<div class="bottom-f">
	<a href="tel:15002933668" class="bottom-l">
		<i class="iconfont">&#xe603;</i>
		<span>服务手机</span>
	</a>
	<a href="tel:15002933668" class="bottom-l">
		<i class="iconfont hd">&#xe603;</i>
		<span>服务热线</span>
	</a>

	<a href="tel:15002933668" class="bottom-l">
		<i class="iconfont">&#xe645;</i>
		<span>在线咨询</span>
	</a>
	<a href="tel:15002933668" class="bottom-l">
		<i class="iconfont">&#xe614;</i>
		<span>查看地图</span>
	</a>
</div>

</body>
<script src="http://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script>
<script src="js/script.js"></script>
<script src="js/swiper.min.js"></script>
<script type="text/javascript">
	window.onload = function() {
		var mySwiper = new Swiper('.swiper-container', {
			direction: 'horizontal',
			pagination: '.swiper-pagination',
			loop: true,
			autoplay: 3000,
			autoplayDisableOnInteraction: false,
			/*用户操作停止后不停止*/
			paginationClickable: true,
			/*分页器*/
			grabCursor: true,
			prevButton: '.swiper-button-prev',
			nextButton: '.swiper-button-next',
			onSlideChangeStart: function() {
				//回调函数
			}
		});
	};
</script>

</html>