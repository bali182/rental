export const error = cause => ({
  status: 'error',
  issues: cause,
  results: null
});

export const success = response => ({
  status: 'success',
  issues: [],
  results: response
});