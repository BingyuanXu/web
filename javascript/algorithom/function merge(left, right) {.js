function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;
  
  while (i < len(left) && j < len(right)) {

    if (left[i] < right[j]) {
      result.append(left[i]);
      i += 1;
    } else {
      result.append(right[j]);
      j += 1;
    }
  }

  while (i < len(left)) {
    result.append(left[i]);
    i += 1;
  }

  while (j < len(right)) {
    result.append(right[j]);
    j += 1;
  }

  return result
}

function merge_sort(L) {
  if (len(L) < 2) {
    return L[:];
  } else {
    middle = len(L) / 2;
    left = merge_sort(L[: middle]);
    right = merge_sort(L[middle:]);
    return merge(left, right);
  }
}

let a = [1, 2, 3, 4, 5454, 3, 23, 2, 22, 77, 23, 3, 3, 34, 44, 3454, 34235, 224, 455, 4234, 3, 3, 2, 222, 22];
console.log(merge_sort(a));