import { Person, GENDERS } from "./person.js";

export class Trans extends Person {
  constructor(pName, pAge) {
    super(pName, pAge, GENDERS.TRANS)
  }

  tellMeAboutYourSelf() {
    console.log('Hi, I am', this.name);
    console.log('I am trans and why you people hate me? :(');
  }
}