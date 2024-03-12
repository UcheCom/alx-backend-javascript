export default function cleanSet(set, startStr) {
  let newStr = '';
  if (startStr === undefined || startStr.length === 0) return '';
  newString = [...set]
    .filter((elt) => (elt === undefined ? '' : elt.startsWith(startStr)))
    .map((elt) => (elt === undefined ? '' : elt.replace(startStr, '')))
    .join('-');
  return newStr;
}
