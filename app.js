// navigation global var
const navigation = document.getElementById('navbar__list');
// sections global var
const sections = document.querySelectorAll('section');
//creating a function that creats/builds the desired dynamic navbar for our page 
const creatingNav = function() {
    //a variable to store the nav items before adding it using innerHTML
    let nav2 = '';
    // going over all the sections 
    for(var section of sections) {
        
        //declaring a variable for the href 
        const sectionLink = section.id;
        //declaring variable for getting the name that will be seen on the nav menu
        const sectionName = section.dataset.nav;

        //additon of <li> elements to the empty variable nav to be used in the appending
        nav2 += `<li><a class="menu__link" href="#${sectionLink}">${sectionName}</a></li>`;

    }
    // appending elements to the navigation by changing the html using innerHTML property of js
    navigation.innerHTML = nav2;


};
//succesfully showing the navbar on the site 

creatingNav();


//getting the value for the top boundary using get bounding client rectangle property
const rect = function(section) {
    section.getBoundingClientRect().top;
 };

 //defining section 
 let sections= document.getElementsByTagName("section")
 //a function thar adds the active class to the section in the view port 
 const addition = function(section){
     section.classList.add('your-active-class');
     //the style is added inside the css stylesheet for convinience 
 };
 
 let sections= document.getElementsByTagName("section")
 //a function that removes the out of view port section from the active class
 const removal = function(section){
     section.classList.remove('your-active-class');
 
 
 };
 
 //trying to implement the functions together to achieve the active class
 for(var section of sections){
     if(rect >= 0 && rect < 300){
         addition('section');
     }
     else{
         removal('section');
     }
 }