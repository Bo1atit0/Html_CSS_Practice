const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/sbb.jpg") {
        myImage.setAttribute("src", "images/sbb2.jpg");
    } else {
        myImage.setAttribute("src", "images/sbb.jpg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
myButton.onclick = () => {
    setUserName();
};

function setUserName() {
    const myName = prompt("Enter your name.");
    if (!myName) {
        setUserName();
    }
    localStorage.setItem("name", myName);
    myHeading.textContent = `Shop with StyleBybata, ${myName}`;

}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Shop with StyleBybata, ${storedName}`;
}
