const num = [2,5,3,6,7,2,1];

const bubbleSort = (arr) => {

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) { // 
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }

  return arr;
}
