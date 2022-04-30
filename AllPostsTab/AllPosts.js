// Waits for the DOM to load before changing anything
window.addEventListener("load", function () {

    //Selects each button on the "AllPosts" page
    let MarsTagButton = document.getElementById("MarsTagButton");
    let AstronautsTagButton = document.getElementById("AstronautsTagButton");
    let GalaxiesTagButton = document.getElementById("GalaxiesTagButton");
    let PeopleButton = document.getElementById("InfluentialPeopleTagButton");

    //selects each section (post) by their tag (alt attribute).
    let AstronautPosts = document.querySelectorAll('section[alt="Astronauts"]');
    let MarsPosts = document.querySelectorAll('section[alt="MarsPost"]');
    let GalaxiesPosts = document.querySelectorAll('section[alt="Galaxies"]');
    let PeoplePosts = document.querySelectorAll('section[alt="InfluentialPeople"]');

    //selects all posts wrapped in a section tag
    let AllPosts = document.querySelectorAll('section');


    //each event first turns all posts to their default style and default order
    //then it changes the style of all the selected posts and changes order to one
    MarsTagButton.addEventListener("click", function () {
        for (let Post of AllPosts) {
            Post.style.backgroundColor = "white";
            Post.style.order = 2;
        }
        for (let MarsPost of MarsPosts) {
            MarsPost.style.backgroundColor = "pink";
            MarsPost.style.order = 1;
        }
    });
    AstronautsTagButton.addEventListener("click", function () {
        for (let Post of AllPosts) {
            Post.style.backgroundColor = "white";
            Post.style.order = 2;
        }
        for (let AstronautPost of AstronautPosts) {
            AstronautPost.style.backgroundColor = "pink";
            AstronautPost.style.order = 1;
        }
    });
    GalaxiesTagButton.addEventListener("click", function () {
        for (let Post of AllPosts) {
            Post.style.backgroundColor = "white";
            Post.style.order = 2;
        }
        for (let GalaxiesPost of GalaxiesPosts) {
            GalaxiesPost.style.backgroundColor = "pink";
            GalaxiesPost.style.order = 1;
        }
    });
    PeopleButton.addEventListener("click", function () {
        for (let Post of AllPosts) {
            Post.style.backgroundColor = "white";
            Post.style.order = 2;
        }
        for (let PeoplePost of PeoplePosts) {
            PeoplePost.style.backgroundColor = "pink";
            PeoplePost.style.order = 1;
        }
    });
});
