function isValidPassword(password, username) {

return (
    password.length >= 8 &&
    password !== username &&
    !password.includes(" ")
);
}
const username = prompt("Enter your username");
const password = prompt("Enter your password");