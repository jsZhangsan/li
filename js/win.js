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
		if ($(".win-bg-black").length == 0) {
			$("body").append('<div class="win-bg-black"></div>');
		} else {
			$(".win-bg-black").show();
		}
	},
	/**
	 * 打开窗口
	 */
	openWin: function(opts) {
		$.extend(true, this.defaultData, opts);
		this.addbackground();

		if ($("#win_" + this.defaultData.id).length == 0) {
			$("#" + this.defaultData.id).show().wrap('<div id="win_' + this.defaultData.id + '" class="win-dialog"><div class="win-content"></div></div>');
			var w = $("#win_" + this.defaultData.id);

			var btnClose = "";
			if (this.defaultData.showCloseBtn) {
				btnClose = "×"
			}
			w.prepend('<div class="win-top"><span>' + this.defaultData.title + '</span><span class="win-erro-btn">' + btnClose + '</span></div>');
			w.css("margin-left", -(w.outerWidth(true) / 2)+"px");

			$this = this;
			$(".win-erro-btn").on({
				click: function() {
					$this.closeWin($(this).parents(".win-dialog").attr("id").substring(4));
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
		$(".win-dialog").each(function() {
			if (!$(this).is(":hidden")) {
				allHide = false;
				return;
			}
		});

		if (allHide) {
			$(".win-bg-black").hide();
		}
	}
};