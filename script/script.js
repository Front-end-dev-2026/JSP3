function isValidPassword(password, username) {
    if (
        password.length >= 8 &&
        password !== username &&
        !password.includes(" ")
    ) {return true;

    } else {return false;

    }

}
const username = prompt("Enter your username");
const password = prompt("Enter your password");

if (isValidPassword(password, username)) {
    console.log("Correct");
} else {
    console.log("Incorrect");
}