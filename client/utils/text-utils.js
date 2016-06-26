export function abbreviate(text, length, end = '...') {
  return (text.length <= length) 
    ? text
    : text.substring(0, length - end.length) + end;
}