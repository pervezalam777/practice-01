# Object Oriented Programing

## Classes
First class citizen for the object oriented programming.
- [x] class without constructor
```javascript
class Person {
  cAge = 18,
  get age() { this.cAge }
  set age(value) { this.cAge} 
}
```
- [x] Class with constructor
<br />
Constructor is a special function or method which is called by default when you create instance or object of a class
  - Name of constructor should be `constructor`
  - `constructor` should be created when you want to supply some argument(s) while creating an instance of a class
  - Parameter should be stored on class level variables

```javascript
class Person {
  cAge = 18,
  constructor(age) {
    this.cAge = age
  }
  get age() { this.cAge }
  set age(value) { this.cAge} 
}
```
- [ ] Use of constants for class properties
- [ ] Access modifiers
- [-] Static methods

## Inheritance (Is-a)
- [x] What is inheritance
- [x] what is super?
- [x] Parent and child
- [ ] Multiple inheritance (`Not available in javascript`)
- [ ] Multi-level inheritance

## Encapsulation
## polymorphism

## Composition (has-a)
## Factory function

## getter/setter with object {}

# How to install light server

```console
> npm install -g lite-server

html file location > lite-server .
```