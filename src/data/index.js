//Fake database

//array that has all the characters
const characters = [
    { id: 1, name: "James P. Sullivan", image: "https://static.wikia.nocookie.net/pixar/images/0/04/Sully_Monsters_University.jpg", isGood: true },
    { id: 2, name: "Mike Wazowski", image: "https://static.wikia.nocookie.net/disney/images/9/9e/Mike_KHIII.png", isGood: true },
    { id: 3, name: "Randall Boggs", image: "https://static.wikia.nocookie.net/pixar/images/8/86/Randall.png", isGood: false },
    { id: 4, name: "Boo", image: "https://static.wikia.nocookie.net/pixar/images/7/7c/Boo.png", isGood: true},
  ];
  
  let nextId = 5;
  
  const newCharacters = [
    { name: "Roz", image: "https://static.wikia.nocookie.net/heroes-of-the-characters/images/e/e5/Roz_%28Monsters_Inc._-_Render%29.png", isGood: false },
    { name: "Henry J. Waternoose III", image: "https://static.wikia.nocookie.net/villains/images/c/c4/Mr_Waternoose.png", idGood: false },
  ];
  
  // Function that returns one random monster from the newCharacters array
  function getNewRandomCharacter() {
    const index = Math.floor(Math.random() * newCharacters.length);
    const newCharacter = { ...newCharacters[index] };
    newCharacter.id = nextId;
    nextId++;
    return newCharacter;
  }
  
  export { characters, getNewRandomCharacter };