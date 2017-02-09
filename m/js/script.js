
$(function(){
	var $tabList = $('.tab-list a');
	var $tab = $('.tab-con');
	$tabList.click(function() {
			$(this).addClass('this').siblings().removeClass('this');
			var index = $tabList.index(this);
			$tab.find('>div').eq(index).show().siblings().hide();
			return false;
		})
  $tabList.eq(0).click();
  $('#top').click(function() {
		var speed = 300; //滑动的速度
		$('body,html').animate({
			scrollTop: 0
		}, speed);
		return false;
	});

    
});