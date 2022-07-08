# DOM
- Document Object Model 
  - Object oriented related
  - Only one DOM in the HTML page
  - If there is an iframe tag then it has its own DOM
  - Communication between iframe DOM and main DOM is possible but they are independent.
  - window.document === document is true

# NOTES
## document.getElementById()
- return very first element find with id
- return only one DOM element

## document.getElementsByTagName()
- return multiple DOM element as HTMLCollection object
- HTMLCollection object looks like Array but it is not Array
- HTMLCollection has length property so the we can iterate over the values

## document.getElementsByClassName('navigation')
- return multiple DOM element as HTMLCollection object
- HTMLCollection object looks like Array but it is not Array
- HTMLCollection has length property so the we can iterate over the values

## document.querySelector('.navigation')
- return very first element find with class name
- string start with '.' means search for class name
- string start with '#' means search for id
- string without any special character search for tag name

## document.querySelectorAll('.navigation')
- return multiple DOM element as NodeList object
- string start with '.' means search for class name
- string start with '#' means search for id
- string without any special character search for tag name


# Ref
document.querySelectorAll('#header .navigation')
​