'use strict';
let { useState, useCallback } = require('react');

function useElementFocus() {
  let [isFocused, changeState] = useState(false);

  const onFocus = useCallback(function (event) {
    changeState(true);
  }, []);

  const onBlur = useCallback(function (event) {
    changeState(false);
  }, []);

  const bind = {
    onFocus,
    onBlur,
  };

  return {
    isFocused,
    bind,
  };
}

module.exports = useElementFocus;
