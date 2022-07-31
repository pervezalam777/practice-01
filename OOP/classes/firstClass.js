// ES6 onwards 
export class Component {
  // properties
  name = 'default name';
  cType = 'default type';

  // methods
  render() {
    console.log('render method called...')
  }

  static assignEvents() {
    console.log('assign event is static function')
  }

  // methods or function
  getName() {
    console.log('called.. via getter')
    return this.name;
  }

  // methods or function
  setName(value) {
    // can add validation here
    console.log('value in setter', value)
    this.name = value;
  }

  //The following is the Getter
  get type() {
    return this.cType;
  }

  //The following is the Setter
  set type(value) {
    console.log('can add validation', value)
    this.cType = value;
  }
}