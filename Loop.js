// getting the element...
const innerloop = document.getElementById("number");
// creating a bubble sort array function...

const arrangement = (list) => {
  for (let i = 0; i < list.length; i++) {
    // Checking if the i elements are already in place

    for (let j = 0; j < list.length - i - 1; j++) {
      // Checking if the item at present iteration is greater than the next iteration

      if (list[j] > list[j + 1]) {
        // swapping them is the conditions are true
        let temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
      }
    }
  }
  innerloop.innerHTML = `the sorted array is ${list}`;
};

// This is our unsorted array
const list = [5, 2, 0, -3, 4, 5, 2, 10, 40, 1, 3, 4];

// Now pass this array to the bblSort() function
arrangement(list);
