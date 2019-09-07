export default function formControlState({ props, states }) {
  return states.reduce((acc, state) => {
    acc[state] = props[state];
    return acc;
  }, {});
}
