// Init
const github = new Github();
const ui = new UI();

// listen to submit event
document.getElementById("btn-submit").addEventListener("click", e => {
  const userInput = document.getElementById("searchUser").value;
  if (userInput !== "") {
    github.getUser(userInput).then(data => {
      if (data.profile.message === "Not Found") {
        // Show alert
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        // Show Profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // Clear the profile
    console.log("Input is empty");
  }
});
