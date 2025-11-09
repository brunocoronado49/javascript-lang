const heroes = ['batman', 'superman', 'spiderman', 'ironman'];

console.log('************* For tradicional *************');
for (let i = 0; i < heroes.length; i++) {
  const hero = heroes[i];
  console.log(`${i} - ${hero}`);
}

console.log('************* For in *************');
for (const hero in heroes) {
  console.log(`${hero} - ${heroes[hero]}`);
}

console.log('************* For of *************');
for (const hero of heroes) {
  console.log(hero);
}
