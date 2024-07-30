import Celebi from './celebi.png';
import Cinccino from './cinccino.png';

function Menu(){
    const menu = document.createElement('div');
    menu.setAttribute("id","menu");

    const menuTitle = document.createElement('h1');
    menuTitle.setAttribute("id","menuTitle");
    menuTitle.textContent = "Menu";
    menu.appendChild(menuTitle);


    //Create the main card for the restaurant


    //Our list of menu items
    const sweets = ["Pokeball Mouse Bombe Cake.........$8.00","Skitties.........$3.00","Poke-Pops.........$3.00","Kanto Style Pudding.........$4.00","Eeveelution Surprise.........$10.00","Vanillish Scoop.........$7.00"];
    const lunches = ["Poke-pizza.........$8.00","Moomoo Caprese Salad.........$9.00","Poke-Burger.........$8.00","Poke-Dog.........$1.50","Poke-Bento.........$14.00"];
    const drinks = ["Moomoo Milk.........$4.00","Kanto Style Coffee.........$5.00","Lemon Soda.........$6.00","Paladean Coke.........$4.00"];


    //Create the images for the menu
    const celebi = new Image();
    celebi.src = Celebi;
    celebi.setAttribute("id","celebi");

    const sweetsContainer = document.createElement("div");
    sweetsContainer.setAttribute("id","sweets-container");
    //Create the main card for the restaurant
    const sweetCard = document.createElement('div');
    sweetCard.setAttribute("class","main-welcome");
    const sweetsList = document.createElement("ul");
    sweetsList.setAttribute("class","menu-list");

    for(let i = 0;i < sweets.length;i++){
        let listItem = document.createElement("li");
        listItem.textContent = sweets[i];
        sweetsList.appendChild(listItem);
    }

    sweetCard.textContent ="Sweets";
    sweetCard.appendChild(sweetsList);
    sweetsContainer.appendChild(celebi);
    sweetsContainer.appendChild(sweetCard);
    menu.appendChild(sweetsContainer);
    
    const cincinno = new Image();
    cincinno.src = cincinno;
    cincinno.setAttribute("id","cincinno");
    
    const lunchContainer = document.createElement("div");
    lunchContainer.setAttribute("id","lunch-container");

    const lunchCard = document.createElement('div');
    lunchCard.setAttribute("class","main-welcome");
    const lunchesList = document.createElement("ul");
    lunchesList.setAttribute("class","menu-list");

    for(let i = 0;i < lunches.length;i++){
        let listItem = document.createElement("li");
        listItem.textContent = lunches[i];
        lunchesList.appendChild(listItem);
    }

    lunchCard.textContent = "Lunches";
    lunchCard.appendChild(lunchesList);
    lunchContainer.appendChild(lunchCard);
    menu.appendChild(lunchCard);

    const drinkCard = document.createElement('div');
    drinkCard.setAttribute("class","main-welcome");
    const drinksList = document.createElement("ul");
    drinksList.setAttribute("class","menu-list");

    for(let i = 0;i < drinks.length;i++){
        let listItem = document.createElement("li");
        listItem.textContent = drinks[i];
        drinksList.appendChild(listItem);
    }

    drinkCard.textContent = "Drinks";
    drinkCard.appendChild(drinksList);
    menu.appendChild(drinkCard);

    return menu;
}

export default Menu;