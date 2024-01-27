const addToCart = (item: any) => {
  if (typeof Storage !== "undefined") {
    // Code for localStorage/sessionStorage.

    // Retrieve existing data associated with the key "ss"
    let existingData = localStorage.getItem("cart");

    // Check if there's existing data
    if (existingData) {
      // If there's existing data, parse it (assuming it's in JSON format)
      let parsedData = JSON.parse(existingData);

      // Add a new item to the existing data or update existing item
      parsedData.newItem = "new value"; // Replace "newItem" and "new value" with your new data

      // Update local storage with the merged data
      localStorage.setItem("cart", JSON.stringify(parsedData));
    } else {
      // If there's no existing data, create a new object and add the item
      let newData = {
        newItem: "new value", // Replace "newItem" and "new value" with your new data
      };

      // Store the new data in local storage
      localStorage.setItem("cart", JSON.stringify(newData));
    }
  } else {
    // Sorry! No Web Storage support..
    console.log("Browser does not support local storage");
  }
};
