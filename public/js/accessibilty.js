// Read Aloud Button
const readAloudButton = document.getElementById('read-aloud');

// Add click event listener to the button
readAloudButton.addEventListener('click', function() {
    // Select all elements whose text content you want to read aloud
    const elementsToRead = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li, a, span, button, label');

    // Initialize speech synthesis utterance
    const speech = new SpeechSynthesisUtterance();

   // Array to store text contents
   let textContents = [];

   // Loop through elements and store text content in order of appearance
   elementsToRead.forEach(element => {
       textContents.push(element.textContent.trim());
   });

   // Concatenate text content
   const textToRead = textContents.join(' ');
console.log(textToRead)
   // Set the text to read aloud
   speech.text = textToRead;

    // set speech speed
    speech.rate=.5

    // Use default voice
 speechSynthesis.speak(speech);
});
// Focus button

document.addEventListener('DOMContentLoaded', function() {
    const focusButton = document.getElementById('focus-button');
    const inputField = document.getElementById('myInput'); // Replace 'myInput' with your actual input field ID
  
    if (focusButton && inputField) {
      focusButton.addEventListener('click', function() {
        inputField.focus();
      });
    }
  });
  
  // JavaScript to handle input focus and redirection
  document.getElementById('focus-button').addEventListener('click', function() {
    var searchInput = document.getElementById('search-input');
    
    // Toggle the visibility of the input field
    searchInput.classList.toggle('hidden');
    
    // Focus on the input field when it is shown
    if (!searchInput.classList.contains('hidden')) {
      searchInput.focus();
    }
  });

  document.getElementById('search-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent the default action of the enter key

      // Redirect to the login page
      window.location.href = '/login';
    }
  });