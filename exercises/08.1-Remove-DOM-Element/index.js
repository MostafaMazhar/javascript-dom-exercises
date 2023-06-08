// your code here
// if you check the HTML, you will find that the second LI has the id=secondElement
// you can use that to your advantage as a CSS selector
let li2 = document.querySelector('#secondElement');
li2.parentNode.removeChild(li2);
