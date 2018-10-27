interface useElementFocus {
  isFocused: boolean,
  bind: {
    onFocus: (event: React.FocusEvent<HTMLElement>) => undefined,
    onBlur: (event: React.BlurEvent<HTMLElement>) => undefined,
  }
}

export default function useElementFocus(): useElementFocus;
