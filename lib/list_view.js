(function() {
  var _ref,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Backbone.CheckboxListView = (function(_super) {
    __extends(CheckboxListView, _super);

    function CheckboxListView() {
      this.selectToggle = __bind(this.selectToggle, this);
      this.renderCheckbox = __bind(this.renderCheckbox, this);
      this.render = __bind(this.render, this);
      this.initialize = __bind(this.initialize, this);
      _ref = CheckboxListView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    CheckboxListView.prototype.template = JST.checkboxList;

    CheckboxListView.prototype.defaults = {
      name: 'input',
      text: null,
      value: null,
      inline: false,
      defaultValue: [],
      selectAll: false,
      checkedStyle: 'input-checked-green',
      lang: 'en'
    };

    CheckboxListView.prototype.events = {
      'click .btn': 'selectToggle'
    };

    CheckboxListView.prototype.dictionary = {
      selectAll: {
        en: 'Select All',
        cn: '全選'
      },
      deSelectAll: {
        en: 'Cancel All',
        cn: '取消'
      }
    };

    CheckboxListView.prototype.initialize = function() {
      this.options = _.defaults(this.options, this.defaults);
      this.selectAll = this.options.selectAll;
      this.listenTo(this.collection, 'reset sync', this.renderCheckbox);
      this.render();
      return this;
    };

    CheckboxListView.prototype.render = function() {
      this.$el.html(this.template({
        toggleButton: this.options.selectAll ? this.dictionary.deSelectAll[this.options.lang] : this.dictionary.selectAll[this.options.lang]
      }));
      return this.renderCheckbox();
    };

    CheckboxListView.prototype.renderCheckbox = function() {
      var $div,
        _this = this;
      $div = this.$el.find('.form-checkbox-list');
      $div.empty();
      return this.collection.each(function(model) {
        var checkboxItemView;
        checkboxItemView = new Backbone.CheckboxItemView({
          model: model,
          name: _this.options.name,
          text: _this.options.text,
          value: _this.options.value,
          inline: _this.options.inline,
          checkedStyle: _this.options.checkedStyle,
          selected: _.include(_this.options.defaultValue, model.get(_this.options.value)) || _this.options.selectAll
        });
        return $div.append(checkboxItemView.render().el);
      });
    };

    CheckboxListView.prototype.selectToggle = function(e) {
      var $targetInput, $targetLabel;
      e.preventDefault();
      $targetInput = $(e.currentTarget.parentElement).find('input:checkbox');
      $targetLabel = $(e.currentTarget.parentElement).find('label');
      this.selectAll = !this.selectAll;
      if (this.selectAll) {
        $targetInput.attr("checked", true);
        $targetLabel.addClass(this.options.checkedStyle);
        return $(e.currentTarget).find('> font ').html('Cancel');
      } else {
        $targetInput.removeAttr("checked");
        $targetLabel.removeClass(this.options.checkedStyle);
        return $(e.currentTarget).find('> font ').html('Select All');
      }
    };

    return CheckboxListView;

  })(Backbone.View);

}).call(this);
