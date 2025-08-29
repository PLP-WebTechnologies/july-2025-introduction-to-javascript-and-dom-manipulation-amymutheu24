function checkAge() {
    let age = prompt("Enter age: ");
    age = Number(age);

    if (age >= 18) {
        console.log("You are an adult")
        alert("You are an adult!")
        document.getElementById("output").innerText("You are an adult!")

    } else {
        console.log("You are a child!")
        alert("You are a child!")
        document.getElementById("output").innerText("You are a child")
    }
}


// functions

function calculateTotal() {
    let price = 200;
    let quantity = 3;
    let total = getTotal(price, quantity) // helper function
    console.log("Price: " + price + ", Quantity: " + quantity + ", Total: " + total);
    alert("Total cost: $" + total)
    document.getElementById("output").innerText = "Total cost: $" + total;
}

//helper function that is reusable

function getTotal() {
    return price * quantity;
}

//loops
function loopExample() {
    let numbers = [1, 2, 3, 4, 5];
    let result = "";

    // For loop
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i] + " ";
    }

    // While loop (countdown)
    let countdown = 3;
    while (countdown > 0) {
        result += "\nCountdown: " + countdown;
        countdown--;
    }

    document.getElementById("output").innerText = result;
}


// DOM
function domExample() {
    let output = document.getElementById("output");

    // 1. Change text
    output.innerText = "The DOM has been updated!";

    // 2. Toggle color
    output.classList.toggle("highlight");

    // 3. Create a new element dynamically
    let newElement = document.createElement("p");
    newElement.innerText = " New paragraph added dynamically!";
    document.body.appendChild(newElement);
}