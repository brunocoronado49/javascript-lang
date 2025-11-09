const heroes = ['batman', 'superman', 'spiderman', 'ironman'];

console.log('************* For tradicional *************');
for (let i = 0; i < heroes.length; i++) {
  const hero = heroes[i];
  console.log(`${i} - ${hero}`);
}

console.log('************* For in *************');
for (const i in heroes) {
  console.log(`${i} - ${heroes[i]}`);
}

console.log('************* For of *************');
for (const hero of heroes) {
  console.log(hero);
}
