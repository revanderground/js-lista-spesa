let even=true; 
let shoppingList = [
    'banane',
    'lamponi',
    'carote',
    'insalata',
    'pomodori',
    'latte',
    'nutella',
    'pasta',
    'sugo',
    'carne di maiale',
    'petti di pollo',
    'sofficini findus',
    'kit kat',
    'sottilette kraft',
    'pane',
    'melanzane',
    'grano padano',
    'ricotta',
    'carta'
]

const cartElement= document.querySelector('.cart');
console.log(cartElement);

let i=0;

while (i < shoppingList.length){
    const shoppingItem = document.createElement('li');
    shoppingItem.innerHTML = shoppingList[i];  
    cartElement.append(shoppingItem); 

    if(i % 2 == 0){
        shoppingItem.classList.add('active');
        even=true;

    } 

    i++;   
}

const listItems = document.querySelectorAll('li')

const button = document.querySelector('#button')
button.addEventListener('click', function(){
    if (even === true) { 
        for (let i = 0; i < listItems.length; i++) {
            if (i % 2 === 0) {
                listItems[i].classList.remove('active')
            } else {
                listItems[i].classList.add('active')
            }
        }
    } else { 
        for (let i = 0; i < listItems.length; i++) {
            if (i % 2 === 0) {
                listItems[i].classList.add('active')
            } else {
                listItems[i].classList.remove('active')
            }
        }
    }
    even = !even
})