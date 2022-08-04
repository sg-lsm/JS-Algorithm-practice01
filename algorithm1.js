// 1. fivonaci

function fivonaci(n) {
  let result = [0, 1];
  for (let i = 2; i < n; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }
  return result;
}

// console.log(fivonaci(4));
// console.log(fivonaci(5));
// console.log(fivonaci(6));
// console.log(fivonaci(7));
// console.log(fivonaci(8));

// 2. reserveFivonaci

function reserveFivonaci(n) {
  if (n < 2) {
    return n;
  }
  return reserveFivonaci(n - 1) + reserveFivonaci(n - 2);
}

// console.log(reserveFivonaci(4))
// console.log(reserveFivonaci(5))
// console.log(reserveFivonaci(6))
// console.log(reserveFivonaci(7))
// console.log(reserveFivonaci(8))

// 3. factorial

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
}

// console.log(factorial(3));
// console.log(factorial(4));
// console.log(factorial(5));
// console.log(factorial(6));

// 4. reserveFactorial

function reserveFactorial(n) {
  if (n < 2) {
    return n;
  }
  return n * reserveFactorial(n - 1);
}

// console.log(reserveFactorial(3))
// console.log(reserveFactorial(4))
// console.log(reserveFactorial(5))
// console.log(reserveFactorial(6))

// 5. isPrime

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % 2 === 0) return false;
  }
  return true;
}

// console.log(isPrime(12))
// console.log(isPrime(13))
// console.log(isPrime(14))
// console.log(isPrime(15))

// 6. isPrimeOfBitWise

function isPrimeOfBitWise(n) {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
}

// console.log(isPrimeOfBitWise(2));
// console.log(isPrimeOfBitWise(3));
// console.log(isPrimeOfBitWise(4));
// console.log(isPrimeOfBitWise(5));

// 7. isPowerOfTwo

function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

// console.log(isPowerOfTwo(3))
// console.log(isPowerOfTwo(4))
// console.log(isPowerOfTwo(5))
// console.log(isPowerOfTwo(6))
// console.log(isPowerOfTwo(8))

// 8. binarySearch

function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    }
    if (target > arr[middleIndex]) {
      leftIndex = middleIndex + 1;
    }
    if (target === arr[middleIndex]) {
      return middleIndex;
    }
  }
  return -1;
}
// O(logn)

// console.log(binarySearch([1,2,3,4,5,6,7],2))
// console.log(binarySearch([1,2,3,4,5,6,7],7))
// console.log(binarySearch([1,2,3,4,5,6,7],10))

// 9. recursiveBinarySearch

function recursiveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (target < arr[middleIndex]) {
    return search(arr, target, leftIndex, middleIndex - 1);
  } else {
    return search(arr, target, middleIndex + 1, rightIndex);
  }
  if (target === arr[middleIndex]) {
    return middleIndex;
  }
}

// 10. recursiveBinarySearch

function recursiveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}
function search(arr, target, leftIndex, rightIndex) {
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (target === arr[middleIndex]) {
    return middleIndex;
  }
  if (leftIndex > rightIndex) {
    return -1;
  }
  if (target < arr[middleIndex]) {
    return search(arr, target, leftIndex, middleIndex - 1);
  } else {
    return search(arr, target, middleIndex + 1, rightIndex);
  }
}

// O(logn);

// console.log(recursiveBinarySearch([1, 2, 3, 4, 5, 6, 7], 2));
// console.log(recursiveBinarySearch([1, 2, 3, 4, 5, 6, 7], 7));
// console.log(recursiveBinarySearch([1, 2, 3, 4, 5, 6, 7], 10));

// 11. sorting Algorithm (Bubble,Insertion, Quick, Merge)

// 11-1. Bubble sort

function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

// do-while(for루프) 이므로 Big-O => O(n^2);

// let arr = [4, -1, 17, -20, 20, -7];

// bubbleSort(arr);

// console.log(arr);

// 11-2 Insertion sort
// 정의에 따라 하나의 항목이 항상 정렬되기 때문에 배열을 정리된 부분과 정리되지 않은 부분을 가상으로 나누어 분할한다.
// 첫번째 요소가 이미 정렬되었다고 가정하고 나머지 요소는 정리되지 않았다고 가정한다.
// 정리되지 않은 요소를 정리된 요소들 모두와 비교한다.

function insertionSort(arr) {
  for (let i = 1; i < arr.length - 1; i++) {
    let numberSort = arr[i];
    let previousNum = i - 1;
    while (previousNum >= 0 && arr[previousNum] > numberSort) {
      arr[previousNum + 1] = arr[previousNum];
      previousNum = previousNum - 1;
    }
    arr[previousNum + 1] = numberSort;
  }
}

// let arr = [4, -1, 17, -20, 20, -7];
// insertionSort(arr);
// console.log(arr);

// 11-3 Quick sort

function quickSort(arr) {
  let pivot = arr[arr.length - 1];
  let leftElement = [];
  let rightElement = [];

  if (arr.length < 2) {
    return arr;
  }

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      leftElement.push(arr[i]);
    } else {
      rightElement.push(arr[i]);
    }
  }
  return [...quickSort(leftElement), pivot, ...quickSort(rightElement)];
}

// let arr = [8, 20, -4, 6, -2];

// console.log(quickSort(arr));

// 11-4 mergeSort

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let middle = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, middle);
  let rightArr = arr.slice(middle);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}
function merge(leftArr, rightArr) {
  let soltedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      soltedArr.push(leftArr.shift());
    } else {
      soltedArr.push(rightArr.shift());
    }
  }
  return [...soltedArr, ...leftArr, ...rightArr];
}

// let arr = [8, 20, -4, 6, -2];

// console.log(mergeSort(arr));

// 12. cartesian problem

function cartesian(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result.push([arr1[i], arr2[j]]);
    }
  }
  return result;
}

// for문이 중첩되어 돌아가고 있으나 두 배열의 길이가 같을 수도, 다를 수도 있으니 배열의 길이에 따라 시간복잡도는 달라진다.
// 만약 두개의 요소의 길이가 같다면 시간 복잡도는 O(n^2)일 것이다.
// Big-O - O(mn)

const arr1 = [1, 2];
const arr2 = [3, 4, 5];

console.log(cartesian(arr1, arr2));

// 13. climbing staircase problem

function staircase(n) {
  let numOfWay = [1, 2];
  for (let i = 2; i < n; i++) {
    numOfWay[i] = numOfWay[i - 1] + numOfWay[i - 2];
  }

  // 인덱스가 0부터 시작하니 numOfWay와 수일치를 위해 반환값에 -1을 해줘야 한다.
  return numOfWay[n - 1];
}

// console.log(staircase(1));
// console.log(staircase(2));
// console.log(staircase(3));
// console.log(staircase(4));
// console.log(staircase(5));

// 13-1. recursiveStaircase

function recursiveStaircase(n) {
  if (n === 1 || n === 2) {
    return n;
  }
  return recursiveStaircase(n - 1) + recursiveStaircase(n - 2);
}

// console.log(recursiveStaircase(1));
// console.log(recursiveStaircase(2));
// console.log(recursiveStaircase(3));
// console.log(recursiveStaircase(4));
// console.log(recursiveStaircase(5));

// 14. tower of hanoi

function towerOfHanoi(n, fromRod, toRod, usingRod) {
  if (n === 1) {
    console.log(`move disk 1 from ${fromRod} to ${toRod}`);
    return;
  }
  towerOfHanoi(n - 1, fromRod, usingRod, toRod);
  console.log(`move disk ${n} from ${fromRod} to ${toRod}`);
  towerOfHanoi(n - 1, usingRod, toRod, fromRod);
}

towerOfHanoi(3, "A", "C", "B");

// n^2 - 1
// Big-O = O(2^n)
