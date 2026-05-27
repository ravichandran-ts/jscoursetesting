let count = 0; // Initialize count to 0

function increaseCount() {
  count++; // Increment the count by 1
  displayCount(); // Display the count
  checkCountValue(); // Check count value and display messages
}

function displayCount() {
document.getElementById('countDisplay').innerHTML=count; // Display the count in the HTML
}

function checkCountValue() {
  if (count === 10) {
    alert("Your Instagram post gained 10 followers! Congratulations!");
  } else if (count === 20) {
    alert("Your Instagram post gained 20 followers! Keep it up!");
  }
}

function resetCount() {
    if (count != 0) {
        count = 0; //reset count value to 0
        displayCount(); //Display the count
        alert("Followers count has been reset now"); //Pop-up box to alert user about count reset
    } else {
        alert("Followers count is already zero");
    }
}
