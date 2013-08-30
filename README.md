# backbone.checkbox_view

> Backbone checkbox view helper

## Usage 

```js
new Backbone.CheckboxListView({
  el: $('.input-user'),
  collection: new Backbone.Collection([{
    id: 1,
    name: 'jarvis'
  }, {
    id: 2,
    name: 'kinua'
  }]),
  name: 'user_name',
  text: 'name',
  value: 'id',
  defaultValue: 1
});

new Backbone.CheckboxItemView({
  el: $('.input-user'),
  model: new Backbone.Model({
    id: 1,
    name: 'jarvis'
  }),
  name: 'user_name',
  text: 'name',
  value: 'id',
  selected: true
});

```

## Options

Backbone.CheckboxListView

```coffee
defaults:
  name: 'input'
  text: null
  value: null
  inline: false
  defaultValue: []
  selectAll: false
  lang: 'en'
```

Backbone.CheckboxItemView

```coffee
defaults:
  name: 'input'
  text: null
  value: null
  selected: false
  inline: false
  isSingle: false
```

## License

Copyright (c) 2013 Jarvis Ao Ieong   
Licensed under the MIT license.
