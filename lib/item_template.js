this["JST"] = this["JST"] || {};

this["JST"]["checkboxItem"] = function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),isSingle = locals_.isSingle,name = locals_.name,value = locals_.value,checked = locals_.checked,text = locals_.text;if (!( isSingle))
{
name = name + "[]"
}
buf.push("<input" + (jade.attrs({ 'type':("checkbox"), 'name':(name), 'value':(value), 'checked':(checked) }, {"type":true,"name":true,"value":true,"checked":true})) + "/>" + (null == (jade.interp = text) ? "" : jade.interp));;return buf.join("");
};