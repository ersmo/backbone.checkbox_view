(function() {
  var _ref,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Backbone.CheckboxItemView = (function(_super) {
    __extends(CheckboxItemView, _super);

    function CheckboxItemView() {
      this.changed = __bind(this.changed, this);
      this.reset = __bind(this.reset, this);
      this.render = __bind(this.render, this);
      this.initialize = __bind(this.initialize, this);
      _ref = CheckboxItemView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    CheckboxItemView.prototype.template = JST.checkboxItem;

    CheckboxItemView.prototype.defaults = {
      name: 'input',
      text: null,
      value: null,
      selected: false,
      inline: false,
      isSingle: false,
      checkedStyle: 'input-checked-green'
    };

    CheckboxItemView.prototype.tagName = 'label';

    CheckboxItemView.prototype.className = 'checkbox';

    CheckboxItemView.prototype.events = {
      'change': 'changed'
    };

    CheckboxItemView.prototype.initialize = function() {
      this.options = _.defaults(this.options, this.defaults);
      this.listenTo(this.model, 'change', this.render);
      this.$el.on('reset', this.reset);
      return this.render();
    };

    CheckboxItemView.prototype.render = function() {
      if (_.isFunction(this.options.selected)) {
        this.options.selected = this.options.selected(this.model);
      }
      if (this.options.inline) {
        this.$el.addClass('inline');
      }
      if (this.options.selected) {
        this.$el.addClass(this.options.checkedStyle);
      }
      this.$el.html(this.template({
        name: _.isFunction(this.options.name) ? this.options.name(this.model) : this.options.name,
        text: _.isFunction(this.options.text) ? this.options.text(this.model) : this.model.get(this.options.text),
        value: _.isFunction(this.options.value) ? this.options.value(this.model) : this.model.get(this.options.value),
        checked: this.options.selected,
        isSingle: this.options.isSingle
      }));
      this.$input = this.$el.find('input');
      return this;
    };

    CheckboxItemView.prototype.reset = function() {
      this.$el.removeClass(this.options.checkedStyle);
      return this.$input.attr('checked', false);
    };

    CheckboxItemView.prototype.changed = function() {
      if (this.$el.find('input').attr('checked') === 'checked') {
        return this.$el.addClass(this.options.checkedStyle);
      } else {
        return this.$el.removeClass(this.options.checkedStyle);
      }
    };

    return CheckboxItemView;

  })(Backbone.View);

}).call(this);
