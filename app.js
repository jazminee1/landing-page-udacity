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
const navigation = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const navigationBuilder = function(){
    let navInterface ='';
    sections.forEach(function(section){
        const sectionDataNav = section.dataset.nav;
        const sectionID = section.id;
        navInterface += `<li><a class="menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`;
    });
    navigation.innerHTML = navInterface;
}
navigationBuilder();

// getting the boundaries of the section
const boundaries = function(section) {
    return Math.floor(section.getBoundingClientRect().top);
}
 //cancelling the active class 
 const cancelActive = function(section){
     section.classList.remove('your-active-class');
     section.style.cssText = 'background-color :linear-gradient(0deg, rgba(136,203,171,1) 0%;';

 };
 //adding the active class
 const addingActive = function (conditional,section){
     if (conditional){
         section.classList.add('your-active-class')
         section.style.cssText = "background-color : purple;";
     };
 };

 //activating the function

 const activateSection =  function() {
    sections.forEach(function(section) {
        const elementOffSet = boundaries(section);

        inviewport = () => elementOffSet <= 440 && elementOffSet >= -150;

        cancelActive(section);
        addingActive(inviewport(),section);
    });
};

window.addEventListener('scroll' ,activateSection);


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
