const shoppingList = [
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
    i++;
    
}

