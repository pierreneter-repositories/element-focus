import React from 'react';
import { render } from 'react-dom';
import useElementFocus from './';

function App() {
  const { isFocused, bind } = useElementFocus();
  // bind = { onFocus: [function], onBlur: [function] }
  return (
    <div>
      <input {...bind} />
      <div>This input is {isFocused ? "focused" : "not focused"}</div>
    </div>
  );
}

render(<App />, window.root);
