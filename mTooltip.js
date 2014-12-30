(function($) {
	$.fn.mTooltip = function(options) {
		this.each(function(i, e) {
			var tooltipContent = $(e).attr('data-mTooltipText');
			var tooltipBox = $();
			var tempOffset = $(e).offset();

			$(e).hover(function() {
				tooltipBox = $('<div class="mTooltip">'+tooltipContent+'</div>').appendTo('body');
				tooltipBox.hide();
				
				var tooltipLeft = (tempOffset.left + $(e).outerWidth() / 2) - (tooltipBox.outerWidth() / 2);
				var tooltipTop = tempOffset.top + $(e).outerHeight() / 2 + 20;
				
				tooltipBox.css({ position: 'absolute', left: tooltipLeft, top: tooltipTop });
				tooltipBox.fadeIn();
			}, function() {
				tooltipBox.finish().fadeOut('fast', function() {
					this.remove();
				});
			});
		});
	};
} (jQuery));