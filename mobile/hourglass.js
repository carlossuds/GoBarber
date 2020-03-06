/* eslint-disable no-plusplus */
const example = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

function hourglass(matrix) {
  let max = 0;

  for (let a = 0; a < 4; a++) {
    for (let b = 0; b < 4; b++) {
      const top = matrix[a][b] + matrix[a][b + 1] + matrix[a][b + 2];
      const mid = matrix[a + 1][b + 1];
      const bot =
        matrix[a + 2][b] + matrix[a + 2][b + 1] + matrix[a + 2][b + 2];

      const soma = top + mid + bot;

      if (soma > max) {
        max = soma;
      }
    }
  }

  console.log(`MÁXIMO: ${max}`);
}
hourglass(example);
