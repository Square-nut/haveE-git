$(function($){
	
	// 占位符项目来填充列表的功能
	function populate(container, count, offset){
		var output = '';
		offset = isNaN(offset) ? 0 : offset;
		for(var i = 0; i<count; i++ ){
			output += '<li>'+(offset+i)+'</li>';
		}
		return $(output).appendTo(container);
	}

	// 主要调用部分
	$(document).on('activated',function(event){
		var $section = $(".scrollbox");
		var $frame = $section.find('.frame'),
			$ul = $frame.find('ul').eq(0),
			$scrollbar = $section.find('.scrollbar'),
			$buttons = $section.find('.controlbar [data-action]');
		
		populate($ul, 10);
			
		// 控制
		$buttons.on('click',function(e){
			var action = $(this).data('action');
			switch(action){
				case 'reset':
				$frame.sly('toStart');
				setTimeout(function(){
					$ul.find('li').slice(10).remove();
					$frame.sly('reload');
				}, 200);
				break;
				default:
				$frame.sly(action);
			}
		});
		
		$section.find(".slyWrap").each(function(i,e){
			var cont = $(this),
				frame = cont.find(".sly"),
				slidee = frame.find("ul"),
				scrollbar = cont.find(".scrollbar"),
				pagesbar = cont.find(".pages"),
				options = frame.data("options"),
				controls = cont.find(".controls"),
				prevButton = controls.find(".prev"),
				nextButton = controls.find(".next"),
				prevPageButton = controls.find(".prevPage"),
				nextPageButton = controls.find(".nextPage");

			options = $.extend({},options,{
				scrollBar: scrollbar,
				pagesBar: pagesbar,
				prev: prevButton,
				next: nextButton,
				prevPage: prevPageButton,
				nextPage: nextPageButton,
				disabledClass: 'btn-disabled'
			});

			frame.sly( options );

			cont.find("button").click(function(){
				var action = $(this).data('action'),
				arg = $(this).data('arg');
				switch(action){
					case 'add':
					slidee.append(slidee.children().slice(-1).clone().removeClass().text(function(i,text){
						return text/1 + 1;
					}));
					frame.sly('reload');
					break;
					case 'remove':
					slidee.find("li").slice(-1).remove();
					frame.sly('reload');
					break;
					default:
					frame.sly(action, arg);
				}
			});

		});
	
	}).trigger('activated');
	//自己加的，当滚动条前的高度=滚动条后的高度，滚动条隐藏
	var scroolbarh=$(".scrollbar").height();
	var handleh=$(".scrollbar .handle").height();
	if(scroolbarh==handleh){
		$(".scrollbar").hide();
	}

});