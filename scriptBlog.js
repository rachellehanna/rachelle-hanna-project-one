//set up event listener on post comment button
//grab references to inputs
//grab values from inputs

const button = document.querySelector(".blogForm button");
button.addEventListener("click", function (event) {
    event.preventDefault();
    const inputName = document.getElementById("name");
    const inputEmail = document.getElementById("email");
    const inputComment = document.getElementById("comment");

    const name = inputName.value;
    const email = inputEmail.value;
    const comment = inputComment.value;

    //if user does not fill out all of the inputs, there is an alert

    if (name === "" || email === "" || comment === "") {
        alert("You must complete all the fields!");
        return;
    }
    //we take the strings and create element

    const commentContainerDiv = document.createElement("div");
    commentContainerDiv.classList.add("commentContainer");
    const newContent = document.createTextNode(`${name} says ${comment}`);
    commentContainerDiv.appendChild(newContent);

    const commentsContainer = document.querySelector(".commentsContainer");
    commentsContainer.appendChild(commentContainerDiv);

    inputName.value = "";
    inputEmail.value = "";
    inputComment.value = "";
});
