// const nums = [1,2,2,3,4,5,5,6,6,7,8,9];

// // const uniqueNums = nums.filter((item, position) => {
// //     return (
// //         nums.indexOf(item) === position
// //     )
// // });

// // console.log(uniqueNums);

// function uniqueNums (nums){
//     const uniqueElement = {};
//     const result = [];
//     for(let element of nums){
//         if(!uniqueElement[element]){
//             result.push(element)
//         }
//         uniqueElement[element] = element
//     }
//     return result
// }

// console.log(uniqueNums(nums));

// function summation (n){
//     let sum = 0;
//     for (let i=1; i<=n; i++){
//         sum+=i;
//     }
//     return sum;
// }

// console.log(summation(4));

// function summation (n){
//     return (n * (n+1)/2);
// }

// console.log(summation(3))

// function fivonaci(n) {
//   if (n <= 1) {
//     return 1;
//   }
//   return fivonaci(n - 1) + fivonaci(n - 2);
// }
// fivonaci(100);

// function fivonaci ( n ){
//     let fib = [0,1];
//     for(let i = 2;  i<n; i++){
//         fib[i] = fib[i-1]+ fib[i-2]
//     }
//     return fib;
// }

// console.log(fivonaci(11))

// function factorial(n) {
//   // n* (n-1) * (n-1-1) * ...
//   // (3 * 2)
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//     result = result * i
//   }
//   return result;
// }

// console.log(factorial(5));

// function factorial(n){
//     let result = 1;
//     for ( let i =2; i<=n; i++){
//         result = result * i
//     }
//     return result;
// }

// console.log(factorial(5))

// function isPrime(n){
//     if( n < 2 ){
//         return false;
//     }
//     for( let i = 2; i<Math.sqrt(n); i++){
//         if(n%i === 0){
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isPrime(5));
// console.log(isPrime(6));
// console.log(isPrime(12));
// console.log(isPrime(13));

// function isPowerOfTwo(n) {
//   if (1 < n) {
//     return false;
//   }
//   while (n > 1) {
//     if (n % 2 !== 0) {
//       return false;
//     }
//     n = n/2
//   }
//   return true;
// }

// console.log(isPowerOfTwo(4));

// function isPowerOfTwo(n) {
//   if (n < 1) {
//     return false;
//   }
//   while (n > 1) {
//     if (n % 2 !== 0) {
//       return false;
//     }
//     n = n / 2;
//     Math.floor(n);
//   }
//   return true;
// }

// console.log(isPowerOfTwo(1));
// console.log(isPowerOfTwo(2));
// console.log(isPowerOfTwo(3));
// console.log(isPowerOfTwo(4));
// console.log(isPowerOfTwo(13));

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

console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(4));
console.log(isPowerOfTwo(3));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(7));

function isfivonaci(n) {
  const fib = [1, 2];
  if (n < 1) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }
  return fib;
}

console.log(isfivonaci(4));
console.log(isfivonaci(5));

function isFactorial(n) {
  let result = 1;
  if (n < 1) {
    return false;
  }
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
}

console.log(isFactorial(4));
console.log(isFactorial(5));

function isPrimeOfBitWise(n) {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
}

console.log(isPrimeOfBitWise(2));
console.log(isPrimeOfBitWise(3));
console.log(isPrimeOfBitWise(4));
console.log(isPrimeOfBitWise(6));

// function isPrime(n){
//     if( n < 2 ){
//         return false;
//     }
//     for( let i = 2; i<Math.sqrt(n); i++){
//         if(n%i === 0){
//             return false;
//         }
//     }
//     return true;
// }

function recursiveFivonaci(n) {
  if (n < 2) {
    // 무한 루프를 회피하기 위한 방어
    return n;
  }
  return recursiveFivonaci(n - 1) + recursiveFivonaci(n - 2);

  // O(n) - Iterative
  // O(n^2) - Recursive
}

// 0,1,1,2,3,5,8,13,21,34,55, ...
// [0,1,2,3,4,5,6,7,8,9,10]

console.log(recursiveFivonaci(3));
console.log(recursiveFivonaci(4));
console.log(recursiveFivonaci(5));
console.log(recursiveFivonaci(8));

// 재귀(recursion)을 만들 때 중요한 점 2가지
// 1. 문제를 비교적 작은 방법으로 만들 생각을 하라.
// 2. 무한 루프를 회피하기 위해 기본 장치를 구현하라. (예를 들어 n<2이하가 되었을 때)

// 팩토리얼은 인자로 받은 n의 수만큼 양의 수를 곱한 값이다.
// 이를 수학적으로 표시하자면 n! = n * (n-1)!이다. ( 4! = 4*3! 인 것과 같이)

function factorial(n) {
  let result = 1;
  if (n < 2) {
    return n;
  }
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
}

console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));

function recursiveFactorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);

  // if n === 3 =>
  // 3*recursiveFactorial(2) => 3*2*recursiveFactorial(1) => 3*2*1*recursiveFactorial(0) => 3*2*1*1 => recursiveFactorial(3) === 6
}

console.log(recursiveFactorial(2));
console.log(recursiveFactorial(3));
console.log(recursiveFactorial(4));
console.log(recursiveFactorial(5));

function binarySearch(arr, target) {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(binarySearch([1, 3, 4, 5, 10, 11], 1));
console.log(binarySearch([1, 3, 4, 5, 10, 11], 10));
console.log(binarySearch([1, 3, 4, 5, 10, 11], 13));

// function binarySearch2(arr, target) {
//   let leftIndex = 0;
//   let rightIndex = arr.length - 1;

//   while (leftIndex <= rightIndex) {
//     let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
//     if(target === arr[middleIndex]){
//         return middleIndex;
//     }
//     if(target < arr[middleIndex]){
//       // target이 만약 2이고 middleIndex가 3일 경우 => rightIndex는 middle의-1 인 2가 되고 시작지점인 0부터 2까지 중에 반으로 나눠 다시 검색할 것이다.
//       return rightIndex - 1;
//     }else{
//       // target이 만약 4이고 middleIndex가 3일 경우 => leftIndex는 middle의 +1인 4가 되고 시작지점인 4부터 끝지점까지를 반으로 나눠 다시 검색할 것이다.
//       return leftIndex + 1;
//     }
//   }
//   return -1;
// }

function recursiveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, leftIndex, rightIndex) {
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (target === arr[middleIndex]) {
    return middleIndex;
  }
  if (target < arr[middleIndex]) {
    return search(arr, target, leftIndex, middleIndex - 1);
  } else {
    return search(arr, target, middleIndex + 1, rightIndex);
  }
  if (leftIndex > rightIndex) {
    return -1;
  }
}

console.log(recursiveBinarySearch([1, 3, 4, 5, 10, 11], 1));
console.log(recursiveBinarySearch([1, 3, 4, 5, 10, 11], 10));
console.log(recursiveBinarySearch([1, 3, 4, 5, 10, 11], 13));
