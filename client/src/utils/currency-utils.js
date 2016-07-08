const symbolMapping = {
  'eur': '€',
  'usd': '$',
  'gbp': '£',
  'cny': '¥'
}

export function toSymbol(currency) {
  const lcc = (currency || '').toString().toLowerCase();
  return symbolMapping[lcc] ? symbolMapping[lcc] : currency;
}