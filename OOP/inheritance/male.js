import { Person, GENDERS } from "./person.js";

export class Male extends Person {
  constructor(pName, pAge) {
    super(pName, pAge, GENDERS.MALE)
  }
}