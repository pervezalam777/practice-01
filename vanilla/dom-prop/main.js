//IIFE is used in ES5 but with ES6 onward we can use modules
(function(){
 const navULElement = document.querySelector('#header');
 console.log(navULElement.firstChild);

 const eleLI = document.createElement('li');
 eleLI.classList = ['navigation some'];
 eleLI.id = 'item';
 //eleLI.innerText = 'Fourth';

 const eleAnc = document.createElement('a');
 eleAnc.href = '#'
 eleAnc.innerText = 'Fourth';

 eleLI.append(eleAnc);

 // navULElement -> Available on DOM
 navULElement.append(eleLI);

 const eleMain = document.querySelector('main');

 eleMain.append(navULElement);
})();