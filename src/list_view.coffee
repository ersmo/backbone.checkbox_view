
class Backbone.CheckboxListView extends Backbone.View

  template: JST.checkboxList

  defaults:
    name: 'input'
    text: null
    value: null
    inline: false
    defaultValue: []
    selectAll: false
    checkedStyle: 'input-checked-green'
    lang: 'en'

  events:
    'click .btn': 'selectToggle'

  dictionary:
    selectAll:
      en: 'Select All'
      cn: '全選'
    deSelectAll:
      en: 'Cancel All'
      cn: '取消'

  initialize: =>
    @options = _.defaults @options, @defaults
    @selectAll = @options.selectAll
    @listenTo @collection, 'reset sync', @renderCheckbox
    @render()
    this

  render: =>
    @$el.html @template
      toggleButton: if @options.selectAll
        @dictionary.deSelectAll[@options.lang]
      else
        @dictionary.selectAll[@options.lang]
    @renderCheckbox()

  renderCheckbox: =>
    $div = @$el.find('.form-checkbox-list')
    $div.empty()
    @collection.each (model) =>
      checkboxItemView = new Backbone.CheckboxItemView
        model: model
        name: @options.name
        text: @options.text
        value: @options.value
        inline: @options.inline
        checkedStyle: @options.checkedStyle
        selected: _.include(@options.defaultValue, model.get(@options.value)) || @options.selectAll
      $div.append checkboxItemView.render().el

  selectToggle: (e) =>
    e.preventDefault()
    $targetInput = $(e.currentTarget.parentElement).find('input:checkbox')
    $targetLabel = $(e.currentTarget.parentElement).find('label')
    @selectAll = ! @selectAll
    if @selectAll
      $targetInput.attr "checked", true
      $targetLabel.addClass @options.checkedStyle
      $(e.currentTarget).find('> font ').html('Cancel')
    else
      $targetInput.removeAttr "checked"
      $targetLabel.removeClass @options.checkedStyle
      $(e.currentTarget).find('> font ').html('Select All')

