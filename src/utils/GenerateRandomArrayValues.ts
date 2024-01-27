export default function generateUniqueRandomNumbers(
  length: number,
  count: number
) {
  const uniqueNumbers: number[] = [];

  if (count >= length) {
    while (uniqueNumbers.length <= length) {
      const randomNumber = Math.floor(Math.random() * length) + 1;

      // Check if the generated number is unique
      if (!uniqueNumbers.includes(randomNumber)) {
        uniqueNumbers.push(randomNumber);
      }
    }
    return uniqueNumbers;
  }

  while (uniqueNumbers.length < count) {
    const randomNumber = Math.floor(Math.random() * length) + 1;

    // Check if the generated number is unique
    if (!uniqueNumbers.includes(randomNumber)) {
      uniqueNumbers.push(randomNumber);
    }
  }

  return uniqueNumbers;
}

// Example usage:
const result = generateUniqueRandomNumbers(5, 3);
