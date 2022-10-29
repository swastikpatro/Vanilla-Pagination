function deepClone(input) {
  const result = Array.isArray(input) ? [] : {};

  if (typeof input !== 'object') {
    return input;
  }

  for (const key in input) {
    result[key] = deepClone(input[key]);
  }

  return result;
}

export default deepClone;
