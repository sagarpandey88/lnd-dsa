//Given a number N return the index value of fibonacci sequence

// 0 , 1 , 1, 2, 3, 5, 8, 13, 21

function findFibbo(n) {
  if (n < 2) {
    return n;
  }

  return findFibbo(n - 1) + findFibbo(n - 2);
}

export function init() {
  console.log(findFibbo(8));
}
