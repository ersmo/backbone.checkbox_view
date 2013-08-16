this["JST"] = this["JST"] || {};

this["JST"]["checkboxList"] = function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),toggleButton = locals_.toggleButton;buf.push("<a class=\"btn pull-right\"><i class=\"icon-check\"></i><font>" + (jade.escape(null == (jade.interp = toggleButton) ? "" : jade.interp)) + "</font></a><div class=\"form-checkbox-list\"></div>");;return buf.join("");
};