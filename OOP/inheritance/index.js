import { Male } from "./male.js";
import { Female } from "./female.js";
import { Trans } from "./trans.js";

(function() {
  const ram = new Male('Ram', 33);
  ram.tellMeAboutYourSelf();

  const seeta = new Female('Seeta', 28);
  seeta.tellMeAboutYourSelf();

  const fakePerson = new Male(20, 'fake', 'child')
  fakePerson.tellMeAboutYourSelf();

  const trans = new Trans('Lovely', 25);
  trans.tellMeAboutYourSelf();
})()