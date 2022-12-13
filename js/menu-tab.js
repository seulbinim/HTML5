$( document ).ready(function() {
  // DOM 선택 후 변수에 할당
  var menuItems= $('.menu-item');
  var boardTabs = $('.board-tab');
  var boardTabPanels = $('.board-panel');

  // 클릭 시 메인 메뉴 제어
  menuItems.on('click', function(){
    menuItems.removeClass('is-active')
    $(this).addClass('is-active');
  });

  // 탭 요소에 키보드 포커스를 받을 수 있도록 동적으로 tabindex 속성 추가
  boardTabs.attr('tabindex', '0');

  // 탭 클릭이나 엔터 및 스페이스 키를 눌렀을 때 제어
  boardTabs.on('click keyup', function(e){
    e.preventDefault();
    if(e.keyCode === 13 || e.type === 'click'){
      boardTabPanels.removeClass('is-select');
      $(this).parent().addClass('is-select');
    }
  });

  // tab 요소에 클릭 이벤트를 추가한다.
	$('.tab').on('click', function(e) {
		e.preventDefault();
		// 클릭한 tab 요소에 aria-selected=true로 지정하고 
		// 형제요소중에 자신 tab 이외의 나머지 tab 요소들을 aria-selected=false로 지정한다.
		$(this).attr('aria-selected', true).siblings().attr('aria-selected', false);
		$(this).attr('class', 'tab is-select').siblings().attr('class', 'tab');
		
		var selectedId = "#"+$(this).attr('aria-controls');
		//자신은 보이게하고 다른 tabpanel은 보이지 않게 지정한다.
		$(selectedId).addClass('is-select').siblings().removeClass('is-select');
	});
});