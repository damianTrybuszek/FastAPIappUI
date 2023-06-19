const allUsers = document.querySelector(".allUsers");
const allUsersList = document.querySelector(".allUsersList");
const allUsersListBody = document.querySelector(".allUsersListBody");
const USERS_URL = "http://localhost:8000/api/v1/users";

async function fetchAllUsers() {
  try {
    const response = await fetch(USERS_URL, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseText = await response.json();
    responseText.forEach((element) => {
      const row = document.createElement("tr");
      for (const key in element) {
        if (element.hasOwnProperty(key)) {
          const cell = document.createElement("td");
          const cellText = document.createTextNode(`${element[key]}`);
          cell.appendChild(cellText);
          row.appendChild(cell);
        }
      }
      allUsersListBody.appendChild(row);
    });
  } catch (error) {
    console.error(error);
  }
}
window.addEventListener("load", fetchAllUsers);
