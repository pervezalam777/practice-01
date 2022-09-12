// ES6 onwards 
export class Person {
  
  setName(val, personInstance) {
    this.name = val;
    console.log(val, '-is same-->', personInstance === this);
    return this;
  }

  setAge(val) {
    this.age = val;
    return this;
  }

  setGender(val) {
    this.gender = val;
    return this;
  }

  tellMeAboutYourSelf() {
    console.log('Hi, my name is', this.name);
    console.log('My age is', this.age);
    console.log('I am a', this.gender)
  }
}