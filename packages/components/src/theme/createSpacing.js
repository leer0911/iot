export default function createSpacing(spacingInput = 8) {
  let transform = factor => {
    return spacingInput * factor;
  };

  if (typeof spacingInput === 'function') {
    transform = spacingInput;
  }

  const spacing = (...args) => {
    if (args.length === 1) {
      return transform(args[0]);
    }

    return args
      .map(factor => {
        const output = transform(factor);
        return typeof output === 'number' ? `${output}px` : output;
      })
      .join(' ');
  };

  return spacing;
}
