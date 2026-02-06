function validateForm() {
    if (!checkEmails()) {
        return false;
    }
    if (!checkDate()) {
        return false;
    }

    var email = document.getElementById("email").value;
    var date = document.getElementById("project-date").value;

    var message = "To: 250094998@aston.ac.uk\n" + "Email: " + email + "\n" + "Date: " + date + "\nWould you like to confirm this submission?";
    return confirm(message);
}

function checkEmails() {
    const email = document.getElementById("email").value;
    const emailConfirmed = document.getElementById("confirm-email").value;

    if (emailConfirmed != email) {
        alert("Email Addresses do not match.");
        return false;
    }
    return true;
}

function checkDate() {
    const projectDateInput = document.getElementById("project-date").value;
    const selectedDate = new Date(projectDateInput);
    const nextDay = new Date();
    nextDay.setDate(nextDay.getDate() + 1);

    if (selectedDate < nextDay) {
        alert("Project Date must be at least one day in the future.");
        return false;
    }
    return true;
}


window.addEventListener("DOMContentLoaded", () => {
    const icon = document.getElementById("theme-icon");
    const github = document.getElementById("github-link");
    const linkedin = document.getElementById("linkedin-link");
    const body = document.body;

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        body.classList.add("dark");
        icon.src = "Images/Logos/light-mode.png";
        icon.alt = "Light Mode";
        github.src = "Images/Logos/GitHub_Invertocat_White_Clearspace.svg";
        linkedin.src = "Images/Logos/InBug-White.png";
    } else {
        body.classList.remove("dark");
        icon.src = "Images/Logos/dark-mode.png";
        icon.alt = "Dark Mode";
        github.src = "Images/Logos/GitHub_Invertocat_Black_Clearspace.svg";
        linkedin.src = "Images/Logos/InBug-Black.png";
    }
});

function changeTheme() {
    const icon = document.getElementById("theme-icon");
    const github = document.getElementById("github-link");
    const linkedin = document.getElementById("linkedin-link");
    const body = document.body;

    body.classList.add("transition");
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        icon.src = "Images/Logos/light-mode.png";
        icon.alt = "Light Mode";
        github.src = "Images/Logos/GitHub_Invertocat_White_Clearspace.svg";
        github.alt = "My Github Profile (Dark Mode)";
        linkedin.src = "Images/Logos/InBug-White.png";
        linkedin.alt = "My Linkedin Profile (Dark Mode)";
    } else {
        localStorage.setItem("theme", "light");
        icon.src = "Images/Logos/dark-mode.png";
        icon.alt = "Dark Mode";
        github.src = "Images/Logos/GitHub_Invertocat_Black_Clearspace.svg";
        github.alt = "My Github Profile (Light Mode)";
        linkedin.src = "Images/Logos/InBug-Black.png";
        linkedin.alt = "My Linkedin Profile (Light Mode)";
    }
}

