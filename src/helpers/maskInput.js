export function maskInput(value, element, pattern, slot) {
  let regExp = new RegExp("\\d", "g");
  let slots = new Set(slot);
  let backspace = true;

  let prev = ((j) =>
    Array.from(pattern, (c, i) => (slots.has(c) ? (j = i + 1) : j)))(0);
  let first = [...pattern].findIndex((c) => slots.has(c));

  let format = (input) => {
    input = input.match(regExp) || [];
    return Array.from(pattern, (c) =>
      input[0] === c || slots.has(c) ? input.shift() || c : c
    );
  };

  let output = "";
  let inputValue = element.value;

  const [selectionStart, selectionEnd] = [
    element.selectionStart,
    element.selectionEnd,
  ].map((index) => {
    index = format(inputValue.slice(0, index)).findIndex((char) =>
      slots.has(char)
    );
    return index < 0
      ? prev[prev.length - 1]
      : backspace
      ? prev[index - 1] || first
      : index;
  });

  output = format(inputValue).join``;

  element.value = output;
  element.setSelectionRange(selectionStart, selectionEnd);

  return pattern === output ? "" : output;
}
