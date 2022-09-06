import { Person, GENDERS } from "./person.js";

export class Female extends Person {
  constructor(pName, pAge) {
    //Should be on top of every other statement in constructor
    super(pName, pAge, GENDERS.FEMALE);
  }

  tellMeAboutYourSelf() {
    super.tellMeAboutYourSelf();
    
    console.log('I have a very good voice!!!!')
  }
}