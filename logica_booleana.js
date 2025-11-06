const regresaTrue = () => {
  console.log('Regresa true');
  return true;
}

const regresaFalse = () => {
  console.log('Regresa false');
  return false;
}

console.log(regresaTrue() && regresaFalse());
console.log(regresaTrue() || regresaFalse());

console.log('Not');
console.log(!true);
console.log(!false);
// console.log(!!true);
// console.log(!!!true);

console.log('And');
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log('Or');
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
