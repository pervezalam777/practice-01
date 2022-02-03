// Object.create()
const PervezObject = {
  name: 'Pervez',
  age:38, 
  address: "delhi", 
  languageSpeak:['hindi', 'english', 'urdu'],
  salary: '13L', 
  experience: 10
}

const ArifObject = Object.create(PervezObject);
ArifObject.name = 'Arif';
ArifObject.salary = '12L';
ArifObject.languageSpeak = ['hindi', 'english', 'urdu', 'Arabic']

console.log('Pervez object: ', PervezObject);
console.log('Arif object: ', ArifObject);
console.log('Arif prototype values: ', ArifObject.languageSpeak, ArifObject.address);

console.log('languages...',PervezObject.languageSpeak === ArifObject.languageSpeak)
