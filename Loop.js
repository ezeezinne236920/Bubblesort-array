const number = document.getElementById('number')
let numbers = [5, 2, 0, -3, 4, 5, 2, 10, 40, 1, 3, 4]

const spacedNumbers = []

let sortNumbers = (array) => {
  let position = 0,
    max = array[0],
    min = array[0]
  // getting the maximum number
  for (let i = 0; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i]
    }
  }
  //  creating a loop that stores the minimum value of zero to n position
  for (let j = 0; j < array.length; j++) {
    // finding the minimum number
    for (let k = 0; k < array.length; k++) {
      if (array[k] != null) {
        if (min > array[k]) {
          min = array[k]
          position = k
        }
      }
    }
    spacedNumbers[j] = min
    array[position] = null
    min = max
  }
  return spacedNumbers
}
const sorterdNumberList = sortNumbers(numbers).join(' ')

number.innerHTML = `the sorted numbers are: ${sorterdNumberList}`
