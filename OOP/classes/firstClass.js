// ES6 onwards 
export class Component {
  // properties
  name = 'default name';

  // methods
  render() {
    console.log('render method called...')
  }

  static assignEvents() {
    console.log('assign event is static function')
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
}