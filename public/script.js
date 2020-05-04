console.log("Hello Amigo");

var followButt = document.querySelectorAll(".follow-button");

followButt.forEach((buttonClick) => {
    buttonClick.onclick = toggleFunction;
});

function toggleFunction() {
    if (this.innerHTML === "Follow") {
        this.innerHTML = "Unfollow";
    } else if (this.innerHTML === "Unfollow") {
        this.innerHTML = "Follow";
    }
}
