function About(){
    //Create the Contact Information
    const about = document.createElement('div');
    about.setAttribute("class","main-welcome");
    about.setAttribute("id","about");
    
    //Create the header and the contact information for the header
    const phoneNumber = document.createElement('h1');
    phoneNumber.textContent = "123-456-7890";

    //Create the 
    const aboutTitle = document.createElement('h1');
    aboutTitle.setAttribute("id","aboutTitle"); 
    aboutTitle.textContent = "Contact Info";
    about.appendChild(aboutTitle);
    return about;
}

export default About;