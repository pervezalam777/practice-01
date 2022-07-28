// ES6 onwards 
export class Person {
  // properties
  name = 'Human';
  cAge = 18;

  // methods
  render() {
    console.log('render method called...')
  }

  // getter and setter
  getName() {
    console.log('called.. via getter')
    return this.name;
  }

  setName(value) {
    // can add validation here
    console.log('value in setter', value)
    this.name = value;
  }

  //The following is the Getter
  get age() {
    return this.cAge;
  }

  // The following is the setter
  set age(value) {
    if(value >= 18 && value <= 80){
      this.cAge = value;
    } else {
      console.log('Invalid age provided', value, ' of', this.name)
    }
  }
}