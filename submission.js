const findSum = function (array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

const findFrequency = function (array) {
  let answer = { most: '', least: '' };
  let mostCount = 1;
  let leastCount = 1;
  for (let i = 0; i < array.length; i++) {
    let count = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[i] === array[j]) {
        count++;
        // console.log(count);
      }
    }
    if (count <= leastCount) {
      leastCount = count;
      answer.least = array[i];
    } else if (count > mostCount) {
      mostCount = count;
      answer.most = array[i];
    }
  }
  return answer;
};

const isPalindrome = function (str) {
  let revStr = str.split('').reverse().join('');
  if (str === revStr) {
    return true;
  } else {
    return false;
  }
};

const largestPair = function (array) {
  let bigProd = 0;
  for (let i = 1; i < array.length; i++) {
    let thisProd = array[i] * array[i - 1];
    if (thisProd > bigProd) {
      bigProd = thisProd;
    }
  }
  return bigProd;
};

const removeParenth = function (str) {
  let openParenIdx = str.indexOf('(');
  const closeParenIdx = str.indexOf(')');
  if (str[0] === '(') {
    openParenIdx = 0;
  }
  const firstPart = str.slice(0, openParenIdx);
  const lastPart = str.slice(closeParenIdx + 1);
  console.log(firstPart + lastPart);
};

const scoreScrabble = function (str) {
  let score = 0;
  let lowerStr = str.toLowerCase();
  for (let i = 0; i < lowerStr.length; i++) {
    switch (lowerStr[i]) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
      case 'l':
      case 'c':
      case 'n':
      case 'r':
      case 's':
      case 't':
        score += 1;
        break;
      case 'd':
      case 'g':
        score += 2;
        break;
      case 'b':
      case 'c':
      case 'm':
      case 'p':
        score += 3;
        break;
      case 'f':
      case 'h':
      case 'v':
      case 'w':
      case 'y':
        score += 4;
        break;
      case 'k':
        score += 5;
        break;
      case 'j':
      case 'x':
        score += 8;
        break;
      case 'q':
      case 'z':
        score += 10;
    }
  }
  return score;
};
