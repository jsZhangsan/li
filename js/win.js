(function($) {

})(jQuery)


var $UI = {
	defaultData: {
		id: ((new Date()).getMilliseconds()),
		title: "提示",
		showCloseBtn: true
	},
	/**
	 * 加载背景色
	 */
	addbackground: function() {
		if ($(".win_bg_black").length == 0) {
			$("body").append('<div class="win_bg_black"></div>');
		} else {
			$(".win_bg_black").show();
		}
	},
	/**
	 * 打开窗口
	 */
	openWin: function(opts) {
		$.extend(true, this.defaultData, opts);
		this.addbackground();

		if ($("#win_" + this.defaultData.id).length == 0) {
			$("#" + this.defaultData.id).show().wrap('<div id="win_' + this.defaultData.id + '" class="win_dialog"><div class="win_content"></div></div>');
			var w = $("#win_" + this.defaultData.id);

			var btnClose = "";
			if (this.defaultData.showCloseBtn) {
				btnClose = "X"
			}
			w.prepend('<div class="win_top"><span>' + this.defaultData.title + '</span><span class="win_erro_btn">' + btnClose + '</span></div>');

			w.css("margin-left", -(w.outerWidth(true) / 2));

			$this = this;
			$(".win_erro_btn").on({
				click: function() {
					$this.closeWin($(this).parents(".win_dialog").attr("id").substring(4));
				}
			});
		} else {
			$("#win_" + this.defaultData.id).show();
		}
	},
	/**
	 * 关闭窗口
	 */
	closeWin: function(id) {
		var w = $("#win_" + id);
		w.hide();

		var allHide = true;
		$(".win_dialog").each(function() {
			if (!$(this).is(":hidden")) {
				allHide = false;
				return;
			}
		});

		if (allHide) {
			$(".win_bg_black").hide();
		}
	}
};