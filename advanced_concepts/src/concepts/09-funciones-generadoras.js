/**
 *
 * @param {HTMLDivElement} element
 */
export const funcionesGeneradorasComponent = (element) => {
  const myGenerator = myGenerateFunction();
  console.log(myGenerator.next());
  console.log(myGenerator.next());
  console.log(myGenerator.next());

  const gen = idGenerator();

  const button = document.createElement('button');
  button.innerText = 'Click me';
  element.append(button);

  const renderValue = () => {
    const { value } = gen.next();
    button.innerText = `Click ${value}`;
  }

  button.addEventListener('click', renderValue);
}

function* idGenerator() {
  let currentId = 0;

  while(true) {
    yield ++currentId;
  }
}

function* myGenerateFunction() {
  yield 'First value';
  yield 'Second value';
  yield 'Third value';

  return 'Ya no hay valores';
}
