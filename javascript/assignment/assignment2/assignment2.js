const str1 = `Mr. and Mrs. Dursley, of number four, Privet Drive, were proud to say that they were perfectly normal, thank you very much. They were the last people you'd expect to be involved in anything strange or mysterious, because they just didn't hold with such nonsense.`;

outPut(str1);

function outPut(aStr) {
  console.log(`There are a total of ${totalWords(aStr)} words in the paragraph. ${diffWordsArray(aStr).length} of them are unique.`);
  console.log(`There are ${vowelsNum(aStr)} vowels in the paragraph and ${totalPunctuation(aStr)} pieces of punctuation.`);
  console.log(`The most commonly occurring word is "${mostTimes(aStr).word}", it appears ${mostTimes(aStr).num} times.`);
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
  const wordsNum = noRepeatArray.map(ele => Object.fromEntries([[`word`, ele], [`num`, 0]]));

  for (let obj of wordsNum) {
    for (let aWord of lowercaseNoPunctuationArray) {
      if (aWord === obj.word) {
        obj.num++;
      }
    }
  }

  wordsNum.sort(function (a, b) {
    if (b.num === a.num) {
      return b.word.length - a.word.length;
    }
    return b.num - a.num;
  });

  return wordsNum[0];
}

function vowelsNum(aStr) {
  const lowercaseArray = aStr.toLowerCase().split(``);
  let counter = 0;

  for (let ele of lowercaseArray) {
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