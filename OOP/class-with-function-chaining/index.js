import { Person } from "./person.js";

(function() {
  const ram = new Person();
  ram.setName('Ram', ram).setAge(30).setGender('male')
  ram.tellMeAboutYourSelf();
  console.log('------------------------------')
  const seeta = new Person();
  seeta.setGender('female').setName('Seeta', ram).setAge(28);
  seeta.tellMeAboutYourSelf();

  console.log('------------------------------')
  const fakePerson = new Person()
  fakePerson.setAge('Fake').setName(30, ram).setGender('abc')
  fakePerson.tellMeAboutYourSelf();
})()