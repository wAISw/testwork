export const getKey = (object, path, defaultValue) => {
  let result;

  if (object == null)
    result = undefined;

  if (object && Object.keys(object).length > 0 && object[path])
    result = object[path];

  return result === undefined ? defaultValue : result;
};