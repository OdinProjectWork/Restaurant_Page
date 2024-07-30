import Clod from './clod.png'
import Home from './home.js'
import About from './about.js'
import Menu from './menu.js'
import './style.css'

if(module.hot){
    module.hot.accept();
}
function appendContent(){
    const content = document.getElementById('content');

    //reference the buttons for home, about and menu
    const homeButton = document.getElementById('home');
    const aboutButton = document.getElementById('about');
    const menuButton = document.getElementById('menu');

    content.appendChild(Home());
    

    homeButton.onclick = () =>{
        content.innerHTML ="";
        content.appendChild(Home());
    }

    menuButton.onclick = () =>{
        content.innerHTML = "";
        content.appendChild(Menu());
    }

    aboutButton.onclick = ()=>{
        content.innerHTML = "";
        content.appendChild(About());
    }
    return content;
}
const container = document.getElementById('container');
container.appendChild(appendContent());
