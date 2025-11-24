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

  const renderTwoHeroes = (hero1, hero2) => {
    element.innerHTML = `${hero1.name} - ${hero2.name}`;
  }

  const id1 = '5d86371f2343e37870b91ef1';
  const id2 = '5d86371f9f80b591f499df32';

  let hero1;

  //! Promise All
  Promise.all([
    findHero(id1),
    findHero(id2),
  ])
  .then(([hero1, hero2]) => renderTwoHeroes(hero1, hero2))
  .catch(renderError);

  //! Forma 2
  // findHero(id1)
  //   .then(hero => {
  //     hero1 = hero;
  //     return findHero(id2);
  //   }).then(hero2 => {
  //     renderTwoHeroes(hero1, hero2);
  //   }).catch(renderError);

  //! Forma 1
  // findHero(id1)
  //   .then((hero) => {
  //     findHero(id2)
  //       .then((hero2) => {
  //         renderTwoHeroes(hero, hero2);
  //       }).catch(renderError);
  //   })
  //   .catch(renderError);
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
