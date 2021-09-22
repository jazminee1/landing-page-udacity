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


window.addEventListener('scroll',function(){
    sections.forEach(section){
        const rect =  section.getBoundingClientRect();
        if(rect>0 && rect> 300){
            section.classList.add('your-active-class');
        }
        else{
            section.classList.remove('your-active-class')
        }


    }
})