
export const GENDERS = {
  FEMALE: 'Female',
  MALE: 'Male',
  TRANS: 'Transgender'
}
// ES6 onwards 
export class Person {
  name = 'Human';
  age = 30;
  gender = GENDERS.TRANS

  constructor(pName, pAge, pGender) {
    // Add condition for Name validation
    this.name = this.isValidName(pName) ? pName: this.name;

    // Add condition for age validation
    this.age = this.isValidAge(pAge) ? pAge: this.age;

    // Add condition for gender validation
    this.gender = this.isValidGender(pGender) ? pGender : this.gender;
    
  }

  isValidName(value) {
    const validName  = typeof value === 'string' && value.length > 2;
    if(validName === false) {
      console.log('Not a valid name', value)
    }
    return validName
  }

  isValidAge(value) {
    return typeof value === 'number' && value >= 18 && value <= 60;
  }

  isValidGender(value) {
    return typeof value === 'string' && Object.values(GENDERS).indexOf(value) !== -1;
  }

  tellMeAboutYourSelf() {
    console.log('Hi, my name is', this.name);
    console.log('My age is', this.age);
    console.log('I am a', this.gender)
  }
}