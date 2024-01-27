function extractUniqueValuesByKey(arr: any, key: string) {
  if (!Array.isArray(arr) || typeof key !== "string") {
    throw new Error(
      "Input is not valid. Please provide an array and a string key."
    );
  }

  const values: any = [];

  arr.forEach((obj) => {
    if (obj && Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];

      if (Array.isArray(value)) {
        value.forEach((v) => {
          if (v !== "All Item Groups" && !values.includes(v)) {
            values.push(v);
          }
        });
      } else {
        if (value !== "All Item Groups" && !values.includes(value)) {
          values.push(value);
        }
      }
    }
  });

  return values;
}
export default extractUniqueValuesByKey;
