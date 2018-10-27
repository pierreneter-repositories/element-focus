# `@rehooks/element-focus`

> React hook for check focus state of elements

> **Note:** This is using the new [React Hooks API Proposal](https://reactjs.org/docs/hooks-intro.html)
> which is subject to change until React 16.7 final.
>
> You'll need to install `react`, `react-dom`, etc at `^16.7.0-alpha.0`

## Install

```sh
yarn add @rehooks/element-focus
```

## Usage

```js
import useInputValue from '@rehooks/input-value';
import useElementFocus from '@rehooks/element-focus';

function MyComponent() {
  const { isFocused, bind } = useElementFocus();
  // bind = { onFocus: [function], onBlur: [function] }
  return (
    <div>
      <input {...bind} />
      <div>This input is {isFocused ? "focused" : "not focused"}</div>
    </div>
  );
}
```
