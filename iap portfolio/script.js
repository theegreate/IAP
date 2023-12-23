function displayMessage() {
  // Get the input value
  var contributionInput = document.getElementById('contribution');
  var contribution = contributionInput.value;

  // Display the contribution on the page
  var userContributions = document.getElementById('userContributions');
  userContributions.innerHTML += '<p>User Contribution: ' + contribution + '</p>';

  // Clear the input field
  contributionInput.value = '';
}