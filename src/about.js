function About(){
    //Create the Contact Information
    const about = document.createElement('div');
    about.setAttribute("class","main-welcome");
    about.setAttribute("id","aboutContainer");
    
    //Create the header and the contact information for the header

    //Create the 
    const aboutTitle = document.createElement('h1');
    aboutTitle.setAttribute("id","aboutTitle"); 
    aboutTitle.textContent = "Contact Info";
    about.appendChild(aboutTitle);

    const contactInfo = ["Phone number: 123-456-7890","Email: pokeRestaurant@gmail.com","Twitter: @poke_restaurant","Insta: poke_straunt"];
    const contactList = document.createElement("ul");
    contactList.setAttribute("class","menu-list");

    for(let i = 0;i< contactInfo.length;i++){
        let listItem = document.createElement("li");
        listItem.textContent = contactInfo[i];
        contactList.appendChild(listItem);
    }
    about.appendChild(contactList);
    return about;
}

export default About;