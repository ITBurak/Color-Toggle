//Navbar Toggle 
let toggleNavStatus = false; 

const toggleNav = function() {
    const getSidebar = document.querySelector('.nav-sidebar');
    const getSidebarUl = document.querySelector('.nav-sidebar ul');
    const getSidebarTitle = document.querySelector('.nav-sidebar span');
    const getSidebarLinks = document.querySelectorAll('.nav-sidebar a');
    
    if (toggleNavStatus === false) {
        
        getSidebarUl.style.visibility = 'visible';
        getSidebar.style.width = '272px';
        getSidebarTitle.style.opacity = '0.5';

        let arraylength = getSidebarLinks.length;
        for (let i = 0; i < arraylength; i++) {
            getSidebarLinks[i].style.opacity = '1';
        }

        toggleNavStatus = true;
    }
    
    else if (toggleNavStatus === true) {
       
        getSidebar.style.width = '50px';
        getSidebarTitle.style.opacity = '0';

        let arraylength = getSidebarLinks.length;
        for (let i = 0; i < arraylength; i++) {
            getSidebarLinks[i].style.opacity = '0';
        }

        getSidebarUl.style.visibility = 'hidden';

        toggleNavStatus = false;
    }

};

//Mouse toggle event
const mouseEnter = document.getElementById('btn-toggle-nav');
mouseEnter.addEventListener ('click', toggleNav, false);

const mouseLeave = document.getElementById('nav_ul')
mouseLeave.addEventListener ('click', toggleNav, true);

//Creating the color function
const pageInstruction = document.getElementById('colorInstruction');  
const pageAlert = document.getElementById('colorAlert');
const colorSelector = 'Select a color on the menu to change the background color. Or try using the keyboard. Numbers 1-5!';

pageInstruction.innerHTML = colorSelector;

const changeColor = function (color) {
    document.body.style.background = color;
}

const colorRunHome = function() {
    changeColor('white');
    pageInstruction.innerHTML = 'Back to default, select another color!'
}

const home = document.getElementById('white');
home.onclick = colorRunHome;

const colorRunRed = function() {
    changeColor('red');
    pageInstruction.innerHTML = 'Background color changed to Red';
}

const red = document.getElementById('red');
red.onclick = colorRunRed;

const colorRunOrange = function() {
    changeColor('orange');
    pageInstruction.innerHTML = 'Background color changed to Orange';
}

const orange = document.getElementById('orange');
orange.onclick = colorRunOrange;

const colorRunPurple = function() {
    changeColor('purple');
    pageInstruction.innerHTML = 'Background color changed to Purple';
}

const purple = document.getElementById('purple');
purple.onclick = colorRunPurple;


const colorRunGreen = function() {
    changeColor('green');
    pageInstruction.innerHTML = 'Background color changed to Green';
}

const green = document.getElementById('green');
green.onclick = colorRunGreen;

//keyboard events
const keyBoard = document.getElementsByTagName('BODY') [0];

keyBoard.addEventListener('keydown', e =>{
    if(e.keyCode === 49){
        document.body.style.background = 'white';
        pageInstruction.innerHTML = 'Back to default by keyboard, select another color!'
    }
});

keyBoard.addEventListener('keydown', e =>{
    if(e.keyCode === 50){
        document.body.style.background = 'red';
        pageInstruction.innerHTML = 'Background color changed to Red by keyboard';
    }
});

keyBoard.addEventListener('keydown', e =>{
    if(e.keyCode === 51){
        document.body.style.background = 'orange';
        pageInstruction.innerHTML = 'Background color changed to Orange by keyboard'
    }
});

keyBoard.addEventListener('keydown', e =>{
    if(e.keyCode === 52){
        document.body.style.background = 'purple';
        pageInstruction.innerHTML = 'Background color changed to Purple by keyboard'
    }
});

keyBoard.addEventListener('keydown', e =>{
    if(e.keyCode === 53){
        document.body.style.background = 'green';
        pageInstruction.innerHTML = 'Background color changed to Green by keyboard'
    }
});













