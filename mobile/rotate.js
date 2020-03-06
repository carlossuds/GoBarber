function rotate(ar, amount) {
  const ar1 = [];

  for (let i = 1; i <= ar; i++) {
    ar1.push(i);
  }
  const antes = Date.now();
  const removed = ar1.splice(0, amount);

  removed.forEach(r => ar1.splice(ar1.length, 0, r));
  console.log(Date.now() - antes);
  return ar1;
}

rotate(100000, 100000);
