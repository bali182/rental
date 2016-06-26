const intervalMapping = {
  'day': 'daily',
  'week': 'weekly',
  'month': 'monthly',
  'year': 'yearly'
}

function getDailyCost(cost, interval) {
  switch ((interval || '').toString().toLowerCase()) {
    case 'day': return cost;
    case 'week': return cost / 7;
    case 'month': return cost / 30;
    case 'year': return cost / 360;
    default: return null;
  }
}

export function toInterval(interval) {
  const lci = (interval || '').toString().toLowerCase();
  return intervalMapping[lci] ? intervalMapping[lci] : interval;
}

export function toIntervalCost(cost, interval, toInterval) {
  if (interval === toInterval) {
    return cost;
  }
  const dailyCost = getDailyCost(cost, interval);
  switch (toInterval) {
    case 'day': return dailyCost;
    case 'week': return dailyCost * 7;
    case 'month': return dailyCost * 30;
    case 'year': return dailyCost * 360;
  }
  return null;
}