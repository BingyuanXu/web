function outPut(aStr) {
  console.log(`There are a total of ${totalWords(aStr)} words in the paragraph. ${diffWordsArray(aStr).length} of them are unique.`);
  console.log(`There are ${vowelsNum(aStr)} vowels in the paragraph and ${totalPunctuation(aStr)} pieces of punctuation.`);
  console.log(`The most commonly occurring word is "${mostTimes(aStr)[0]}", it appears ${mostTimes(aStr)[1]} times.`);
}

function toLowercaseNoPunctuationArray(aStr) {
  const noPunctuation = aStr.replace(/[\.,;]/g, ``).toLowerCase();
  return noPunctuation.split(` `);
}

function totalWords(aStr) {
  const toSplit = aStr.split(` `);
  return toSplit.length;
}

function diffWordsArray(aStr) {
  const lowercaseNoPunctuationArray = toLowercaseNoPunctuationArray(aStr);
  const noRepeatArray = lowercaseNoPunctuationArray.filter(function (ele, index) {
    let ifNotSame = true;

    for (let x = 0; x < index; x++) {
      ifNotSame = ifNotSame && ele !== lowercaseNoPunctuationArray[x];
    }

    return ifNotSame;
  });
  return noRepeatArray;
}

function mostTimes(aStr) {
  const lowercaseNoPunctuationArray = toLowercaseNoPunctuationArray(aStr);
  const noRepeatArray = diffWordsArray(aStr);
  const wordsNum = noRepeatArray.map(ele => Object.fromEntries([[`word`,ele],[`num`, 0]]));
  const wordsNumObject = Object.fromEntries(wordsNum);

  for (ele in wordsNumObject) {
    for (word of lowercaseNoPunctuationArray) {
      if (word === ele) {
        wordsNumObject[ele]++;
      }
    }
  }

  wordsNum.sort(function (a, b) {
    if (b[1] === a[1]) {
      return b[0].length - a[0].length;
    }

    return b[1] - a[1];
  });

  return wordsNum[0];
}

function vowelsNum(aStr) {
  const lowercaseArray = aStr.toLowerCase().split(``);
  let counter = 0;

  for (ele of lowercaseArray) {
    if (ele === `a` || ele === `e` || ele === `i` || ele === `o` || ele === `u`) {
      counter++;
    }
  }

  return counter;
}

function totalPunctuation(aStr) {
  const noPunctuationStr = toLowercaseNoPunctuationArray(aStr).join(``);
  const noSpaceStr = aStr.replace(/\s/g, ``);
  return noSpaceStr.length - noPunctuationStr.length;
}

function mostTimes(aStr) {
  const lowercaseNoPunctuationArray = toLowercaseNoPunctuationArray(aStr);
  const noRepeatArray = diffWordsArray(aStr);
  const wordsNum = noRepeatArray.map(ele => Object.fromEntries([[`word`,ele],[`num`, 0]]));

  for (ele of wordsNum) {
    for (word of lowercaseNoPunctuationArray) {
      if (word === ele.word) {
        ele.num++;
      }
    }
  }

  wordsNum.sort(function (a, b) {
    if (b.num === a.num) {
      return b.word.length - a.word.length;
    }

    return b.num - a.num;
  });

  return wordsNum;
}



let str1 = `Mr. and Mrs. Dursley, of number four, Privet Drive, were proud to say that they were perfectly normal, thank you very much. They were the last people you'd expect to be involved in anything strange or mysterious, because they just didn't hold with such nonsense.`;

let str2 = `Mr. Dursley was the director of a firm called Grunnings, which made drills. He was a big, beefy man with hardly any neck, although he did have a very large mustache. Mrs. Dursley was thin and blonde and had nearly twice the usual amount of neck, which came in very useful as she spent so much of her time craning over garden fences, spying on the neighbors. The Dursleys had a small son called Dudley and in their opinion there was no finer boy anywhere.`

console.log(mostTimes(str2));
