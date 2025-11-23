import { heroes } from './heroes';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promisesComponent = (element) => {
  const renderHero = (hero) => {
    element.innerHTML = hero.name;
  }

  const renderError = (error) => {
    element.innerHTML = error;
  }

  const id1 = '5d86371f2343e37870b91ef1';
  findHero(id1)
    .then(renderHero)
    .catch(renderError);
}

/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */
const findHero = (id) => {
  return new Promise((resolve, reject) => {
    const hero = heroes.find(hero => hero.id === id);

    if (hero) {
      console.log(hero)
      resolve(hero);
      return;
    }

    reject(`Hero with id: ${id} not found`);
  });
}
