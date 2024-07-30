//Create the Home page for our restaurant site
import Clod from './clod.png'
import Lax from './lax.png'
function Home() {

    const banner = document.createElement("div");
    banner.setAttribute("id", "banner");
    banner.textContent = "POKEMON RESTAURANT";
    //start with creating the main title of the home section
    const homeHeader = document.createElement("div");
    homeHeader.setAttribute("id", "title");

    function createCard(text, id) {
        const welcomeCard = document.createElement("div");
        welcomeCard.setAttribute("class", "main-welcome");
        welcomeCard.setAttribute("id", id)
        welcomeCard.textContent = text;
        return welcomeCard;
    }

    let introduction = "Hello! Welcome to the Poke Restaurant! We have a variety of different kinds of foods based on Pokemon!";
    let address = "451 GoldenRod Corner 1234";

    let times = ["Monday...... 10AM-9PM", "Tuesday...... 10AM-9PM", "Wednesday...... 10AM-9PM", "Thursday......10AM-9PM", "Friday......10AM-7PM", "Saturday......10AM-7PM", "Sunday......10AM-7PM"];

    let scheduleUL = document.createElement("ul");
    scheduleUL.setAttribute("id","menu-list");
    for(let i =0; i<times.length; i++){
        let li = document.createElement("li");
        li.textContent = times[i];
        scheduleUL.append(li);
    }

    homeHeader.appendChild(banner);

    const welcomeContainer = document.createElement("div");
    welcomeContainer.setAttribute("id", "welcome-container");


    //create the icons for the home page
    const clod = new Image();
    clod.src = Clod;

    const lax = new Image();
    lax.src = Lax;
    lax.setAttribute("id", "snorlax");

    welcomeContainer.appendChild(clod);
    welcomeContainer.appendChild(createCard(introduction, "welcome"));

    const addressContainer = document.createElement("div");
    addressContainer.setAttribute("id", "address-container");
    addressContainer.append(lax);
    addressContainer.appendChild(createCard(address, "address"));

    const scheduleContainer = document.createElement("div");
    scheduleContainer.setAttribute("id","schedule-container");
    scheduleContainer.appendChild(scheduleUL);


    homeHeader.appendChild(welcomeContainer);

    const schedule = document.createElement("div");
    schedule.setAttribute("class", "main-welcome");
    schedule.setAttribute("id", "schedule");

    const header = document.createElement("h1");
    header.textContent = "Hours";
    header.style.textDecoration = "underline";
    schedule.appendChild(header);
    schedule.appendChild(scheduleUL);
    scheduleContainer.appendChild(schedule);

    homeHeader.append(scheduleContainer);
    homeHeader.appendChild(addressContainer);


    return homeHeader;
}

export default Home;