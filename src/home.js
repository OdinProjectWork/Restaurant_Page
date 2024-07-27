//Create the Home page for our restaurant site
function Home() {

    const banner = document.createElement("div");
    banner.setAttribute("id","banner");
    banner.textContent = "POKEMON RESTAURANT";
    //start with creating the main title of the home section
    const homeHeader = document.createElement("div");
    homeHeader.setAttribute("id", "title");

    function createCard(text){
        const welcomeCard = document.createElement("div");
        welcomeCard.setAttribute("class","main-welcome");
        welcomeCard.textContent = text;
        return welcomeCard;
    }

    let introduction = "Hello! Welcome to the Poke Restaurant! We have a variety of different kinds of foods based on Pokemon!";
    let address = "451 GoldenRod Corner 1234";
    homeHeader.appendChild(banner);
    homeHeader.appendChild(createCard(introduction));
    homeHeader.appendChild(createCard(address));

    return homeHeader;
}

export default Home;