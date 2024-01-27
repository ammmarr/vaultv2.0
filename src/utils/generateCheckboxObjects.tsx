function generateCheckboxObjects(arr: any, keys: string[]) {
  if (!Array.isArray(arr) || !Array.isArray(keys) || keys.length === 0) {
    throw new Error(
      "Invalid input. Please provide an array and an array of keys."
    );
  }

  const uniqueValues = {};

  keys.forEach((key) => {
    uniqueValues[key] = [];
  });

  arr.forEach((obj) => {
    keys.forEach((key) => {
      if (obj && Object.prototype.hasOwnProperty.call(obj, key)) {
        const value = obj[key];

        if (Array.isArray(value)) {
          value.forEach((v) => {
            if (!uniqueValues[key].includes(v)) {
              uniqueValues[key].push(v);
            }
          });
        } else {
          if (!uniqueValues[key].includes(value)) {
            uniqueValues[key].push(value);
          }
        }
      }
    });
  });

  const checkboxObjects: any = [];

  keys.forEach((key) => {
    uniqueValues[key].forEach((value: any) => {
      const checkboxObj = {
        label: value,
        input: {
          type: "checkbox",
          value: value,
          name: value,
          "data-inputCategory": key,
        },
      };
      checkboxObjects.push(checkboxObj);
    });
  });

  return checkboxObjects;
}
