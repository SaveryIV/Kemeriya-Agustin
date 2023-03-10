//Minimum Distances

function minimumDistances(a) {
  // Write your code here
  let minDist = Infinity,
    hash = {};

  for (let i = 0; i < a.length; i++) {
    if (hash[a[i]] == undefined) {
      hash[a[i]] = i;
    } else {
      minDist = Math.min(minDist, Math.abs(i - hash[a[i]]));
      hash[a[i]] = i;
    }
  }

  return minDist == Infinity ? -1 : minDist;
}

//Breaking the Records

let max = scores[0],
  min = scores[0],
  maxCount = 0,
  minCount = 0;

for (let i = 1; i < scores.length; i++) {
  if (max > scores[i]) {
    max = scores[i];
    maxCount++;
  }

  if (min < scores[i]) {
    min = scores[i];
    minCount++;
  }
}

return [minCount, maxCount];
