//o(n)
function findFactorialRecrusively(number) {
  //base case
  if (number == 2) {
    return 2;
  }

  return number * findFactorialRecrusively(number - 1);
}

export function init() {
  console.log(findFactorialRecrusively(3));
}
