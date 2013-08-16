
class Backbone.CheckboxItemView extends Backbone.View

  template: JST.checkboxItem

  defaults:
    name: 'input'
    text: null
    value: null
    selected: false
    inline: false
    checkedStyle: 'input-checked-green'

  tagName: 'label'

  className: 'checkbox'

  events:
    'change': 'changed'

  initialize: =>
    @options = _.defaults @options, @defaults
    @listenTo @model, 'change', @render
    @$el.on 'reset', @reset
    @render()

  render: =>
    @options.selected = @options.selected(@model) if _.isFunction @options.selected
    @$el.addClass 'inline' if @options.inline
    @$el.addClass @options.checkedStyle if @options.selected
    @$el.html @template
      name: if _.isFunction @options.name then @options.name(@model) else @options.name
      text: if _.isFunction @options.text then @options.text(@model) else @model.get(@options.text)
      value: if _.isFunction @options.value then @options.value(@model) else @model.get(@options.value)
      checked: @options.selected
    @$input = @$el.find('input')
    this

  reset: =>
    @$el.removeClass @options.checkedStyle
    @$input.attr 'checked', false

  changed: =>
    if @$el.find('input').attr('checked') == 'checked'
      @$el.addClass @options.checkedStyle
    else
      @$el.removeClass @options.checkedStyle
