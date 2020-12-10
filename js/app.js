/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll(".section");
console.log(sections);
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function isInViewPort (element){
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}





/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function listMaker (listOfObjects){
    let emptyList = '';
    for(let obj of listOfObjects ){
        emptyList += `<li> <a href="#${obj.id}">  ${obj.dataset.nav}  </a> </li>`;
    }
    
    return emptyList;
}

const navList = document.querySelector('#navbar__list');
navList.innerHTML = listMaker(sections); 

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


