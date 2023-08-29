const number = document.getElementById("number");
let numbers = [5, 2, 0, -3, 4, 5, 2, 10, 40, 1, 3, 4];

let spacedNumbers = [];

for (let i = -3; i <= 40; i++) {
  if (numbers.includes(i)) {
    spacedNumbers.push(i);
  }
}

number.innerHTML = `the sorted numbers are: ${spacedNumbers.join(" ")}`;
