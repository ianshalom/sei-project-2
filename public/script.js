console.log("Hello Amigo");

var followButt = document.querySelectorAll(".follow-button");

followButt.forEach((buttonClick) => {
    buttonClick.onclick = toggleFunction;
});

function toggleFunction() {
    if (this.value === "Follow") {
        this.value = "Unfollow";
    } else if (this.value === "Unfollow") {
        this.value = "Follow";
    }
}
