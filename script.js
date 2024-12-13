"use strict";

const inputEl = document.querySelector("#number");
const submitBtn = document.querySelector("#convert-btn");
const resultEl = document.querySelector("#output");

const checkInput = () => {
  const decNum = Number(inputEl.value);
  if (!decNum || isNaN(decNum)) {
    resultEl.innerHTML = "<h2>Please enter a valid number</h2>";
  } else {
    const romNum = arabicToRoman(decNum);
    resultEl.innerHTML = `<h2>${romNum}</h2>`;
  }
  inputEl.value = "";
};

submitBtn.addEventListener("click", checkInput);
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkInput();
  }
});

const arabicToRoman = (num) => {
  // Base cases
  if (num < 0) {
    return "Please enter a number greater than or equal to 1";
  } else if (num >= 4000) {
    return "Please enter a number less than or equal to 3999";
  } else {
    // Define Roman numeral symbols and their corresponding values
    const romanNumerals = [
      { value: 1000, symbol: "M" },
      { value: 900, symbol: "CM" },
      { value: 500, symbol: "D" },
      { value: 400, symbol: "CD" },
      { value: 100, symbol: "C" },
      { value: 90, symbol: "XC" },
      { value: 50, symbol: "L" },
      { value: 40, symbol: "XL" },
      { value: 10, symbol: "X" },
      { value: 9, symbol: "IX" },
      { value: 5, symbol: "V" },
      { value: 4, symbol: "IV" },
      { value: 1, symbol: "I" },
    ];
    // Find the largest Roman numeral symbol that fits into the number
    for (const { value, symbol } of romanNumerals) {
      if (num >= value) {
        // Subtract the value from the number and append the symbol
        return symbol + arabicToRoman(num - value);
      }
    }
  }
  return ""; // Ensure the function always returns a value
};
