// ES6 onwards 
export class Person {
  // Add default properties
  // here
  //

  constructor(pName, pAge, pGender) {
    // Add condition for Name validation
    this.name = pName;

    // Add condition for age validation
    this.age = pAge;

    // Add condition for gender validation
    this.gender = pGender;
  }

  tellMeAboutYourSelf() {
    console.log('Hi, my name is', this.name);
    console.log('My age is', this.age);
    console.log('I am a', this.gender)
  }
}