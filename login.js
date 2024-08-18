//Toggles button for the Login and Register


function RegisInput() {
    document.getElementById('register').style.display = "block";
    document.getElementById('login').style.display = "none";
    document.getElementById('registBtn').style.color = "rgb(255, 94, 14)";
    document.getElementById('loginBtn').style.color = "black";
}

// Function to register a new user
function Register() {
    // Get the values from the registration form
    var newUsername = document.getElementById('RegisterUsername').value;
    var newPassword = document.getElementById('RegisterPassword').value;

    // Check if fields are not empty
    if (newUsername === "" || newPassword === "") {
        alert("Please fill in all fields.");
        return;
    }
    // Validate username
    if (!isValidUsername(newUsername)) {
        alert("Invalid username. Please choose a username between 3 and 20 characters long, containing only letters, numbers, hyphens, and underscores.");
        return;
    }

    // Check password strength
    var passwordStrength = checkPasswordStrength(newPassword);
    if (passwordStrength === "Weak") {
        alert("Password is weak.");
        alert("Password must contain alphabet, numbers and at least 8 characters long.");
        return;
    } else if (passwordStrength === "Moderate") {
        alert("Password strength is moderate. Consider choosing a stronger password.");
    }

    // Check if username already exists in localStorage
    if (localStorage.getItem(newUsername) !== null) {
        alert("Username already exists. Please choose a different one.");
        return;
    }

    //Validate username
    // Create an object to store user data
    var userData = {
        username: newUsername,
        password: newPassword
    };

    // Store the user data in localStorage adn session storage
    localStorage.setItem(newUsername, JSON.stringify(userData.username));
    sessionStorage.setItem(newUsername, JSON.stringify(userData.password));

    // Optional: You can display a success message or redirect the user to the login page
    alert("Thank you for registering. We will keep you updated with the latest news via email in the future.");

    window.location.href = "login.html";
}


function checkPasswordStrength(password) {
    // Check password length
    if (password.length < 8) {
        return "Weak"; // Password is too short
    }

    // Regular expressions to check for various criteria
    let hasLowerCase = /[a-z]/.test(password);
    let hasUpperCase = /[A-Z]/.test(password);
    let hasNumbers = /[0-9]/.test(password);
    let hasSymbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

    // Strength evaluation based on criteria met
    if (hasLowerCase && hasUpperCase && hasNumbers && hasSymbols) {
        return "Strong";
    } else if ((hasLowerCase || hasUpperCase) && hasNumbers && !hasSymbols) {
        return "Moderate";
    } else {
        return "Weak";
    }
}

// Function to validate the username during registration
function isValidUsername(username) {
    // Check if the username is between 3 and 20 characters long, only contains letters, numbers, hyphens, and underscores
    let pattern = /^[a-zA-Z0-9_-]{3,20}$/;

    // Test if the username matches the pattern
    return pattern.test(username);
}


document.getElementById('recipeForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let query = document.getElementById('query').value;

    // Fetch recipes from the Spoonacular API
    const apiKey = 'YOUR_SPOONACULAR_API_KEY';
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=6&apiKey=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const recipesContainer = document.getElementById('recipes');
            recipesContainer.innerHTML = '';

            if (data.results && data.results.length > 0) {
                data.results.forEach(recipe => {
                    const recipeElement = document.createElement('div');
                    recipeElement.classList.add('recipe');
                    
                    recipeElement.innerHTML = `
                        <img src="${recipe.image}" alt="${recipe.title}">
                        <h3>${recipe.title}</h3>
                        <p><a href="https://spoonacular.com/recipes/${recipe.title}-${recipe.id}" target="_blank">View Recipe</a></p>
                    `;
                    recipesContainer.appendChild(recipeElement);
                });
            } else {
                recipesContainer.innerHTML = '<p>No recipes found. Try a different search.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching the recipes:', error);
        });
});


});

