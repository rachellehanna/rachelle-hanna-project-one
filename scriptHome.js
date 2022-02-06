//loading page

//wait 2sec and then hide loading icon and display content

setTimeout(function () {
    const loadingContainer = document.querySelector(".loadingContainer");
    loadingContainer.style.display = "none";

    const nav = document.querySelector("nav");
    nav.style.display = "block";

    document.querySelector("header").style.display = "block";
    document.querySelector("main").style.display = "block";
    document.querySelector("footer").style.display = "block";
}, 2000);
