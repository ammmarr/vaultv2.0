function getUniqueValuesForKey(objects: any, key: string) {
  const valuesSet = new Set();
  for (const obj of objects) {
    if (key in obj) {
      const value = obj[key];
      if (value !== null) {
        valuesSet.add(value);
      }
    }
  }
  return [...valuesSet];
}
export default getUniqueValuesForKey;
