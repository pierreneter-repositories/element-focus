'use strict';
let test = require('ava');
let { createElement: h } = require('react');
let ReactTestRenderer = require('react-test-renderer');
let useElementFocus = require('./');

function render(val) {
  return ReactTestRenderer.create(val);
}

test(t => {
  function Component() {
    const { isFocused, bind } = useElementFocus();
    return h('input', { isFocused, ...bind });
  }

  const input = render(h(Component));

  t.is(input.toJSON().props.isFocused, false);
  input.toJSON().props.onFocus();
  t.is(input.toJSON().props.isFocused, true);
  input.toJSON().props.onBlur();
  t.is(input.toJSON().props.isFocused, false);
});
