function Menu(){
    const menu = document.createElement('div');
    menu.setAttribute("id","menu");


    //Create the main card for the restaurant
    const card = document.createElement('div');
    card.setAttribute("class","menu-item");
    card.textContent = "Here is a list of our wonderful different Cuisines!";
    menu.appendChild(card);
    return menu;
}

export default Menu;