// 1 a. Create a function that takes a date in the format "YYYY-MM-DD" as a parameter and returns the day of the week for that date. The function should use the Date object.

function getDayOfWeek(dateString) {
    const date = new Date(dateString);
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[date.getDay()];
    return dayOfWeek;
  }
  
  // Example usage:
  const date = '2023-06-20';
  const dayOfWeek = getDayOfWeek(date);
  console.log(dayOfWeek); // Output: Wednesday
  

//   1. (b) 

   currentDate = new Date();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[currentDate.getDay()];
    return dayOfWeek;
  }
  
  // Example usage:
  const currentDayOfWeek = getCurrentDayOfWeek();
  console.log(currentDayOfWeek); // Output: [Current day of the week]


//   2. a. Write a JavaScript function that takes an array of numbers as input and returns the square root of the sum of squares of all the numbers. Use the Math object to perform the necessary calculations.
  
function getCurrentDayOfWeek() {
    const currentDate = new Date();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[currentDate.getDay()];
    return dayOfWeek;
  }
  
  // Example usage:
  const currentDayOfWeek = getCurrentDayOfWeek();
  console.log(currentDayOfWeek); // Output: [Current day of the week]

  
//   2. b. Implement the function to display the square root of the sum of squares for an array of numbers.

function squareRootOfSumOfSquares(numbers) {
    const sumOfSquares = numbers.reduce((sum, num) => sum + (num * num), 0);
    const squareRoot = Math.sqrt(sumOfSquares);
    return squareRoot;
  }
  
  // Example usage:
  const numbers = [3, 4, 5];
  const result = squareRootOfSumOfSquares(numbers);
  console.log(result); // Output: 7.0710678118654755

  

  //   3.Numbers:


// a. Write a JavaScript function that takes a positive integer as input and returns true if it is a prime number, otherwise returns false.

function isPrime(number) {
    // Check if number is less than 2
    if (number < 2) {
      return false;
    }
  
    // Check for divisibility by numbers up to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  // Example usage:
  const num = 17;
  const result = isPrime(num);
  console.log(result); // Output: true
  

// b. Implement the function to check if a given positive integer is a prime number.

function isPrime(number) {
    // Check if number is less than 2
    if (number < 2) {
      return false;
    }
  
    // Check for divisibility by numbers up to the number - 1
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  // Example usage:
  const num = 17;
  const result = isPrime(num);
  console.log(result); // Output: true
  


// 4.Window Object:


// a. Create a function that opens a new window with a specified URL and dimensions (width and height).

function openWindow(url, width, height) {
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;
    const options = `width=${width},height=${height},left=${left},top=${top}`;
  
    window.open(url, '', options);
  }
  
  // Example usage:
  const url = 'https://www.example.com';
  const width = 800;
  const height = 600;
  openWindow(url, width, height);
  

// b. Implement the function to open a new window with the URL "https://www.example.com" and dimensions 800x600.

function openWindow() {
    const url = 'https://www.example.com';
    const width = 800;
    const height = 600;
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;
    const options = `width=${width},height=${height},left=${left},top=${top}`;
  
    window.open(url, '', options);
  }
  
  // Example usage:
  openWindow();

  

//   5.Navigator Object:


// a. Write a JavaScript function that detects the user's browser name and version using the navigator object.

function getBrowserInfo() {
    const userAgent = navigator.userAgent;
    let browserName;
    let browserVersion;
  
    // Detect browser name
    if (userAgent.includes('Firefox')) {
      browserName = 'Firefox';
    } else if (userAgent.includes('Chrome')) {
      browserName = 'Chrome';
    } else if (userAgent.includes('Safari')) {
      browserName = 'Safari';
    } else if (userAgent.includes('Edge')) {
      browserName = 'Edge';
    } else if (userAgent.includes('Opera') || userAgent.includes('OPR')) {
      browserName = 'Opera';
    } else if (userAgent.includes('Trident') || userAgent.includes('MSIE')) {
      browserName = 'Internet Explorer';
    } else {
      browserName = 'Unknown';
    }
  
    // Detect browser version
    if (userAgent.includes('Version/')) {
      browserVersion = userAgent.split('Version/')[1].split(' ')[0];
    } else if (userAgent.includes('Chrome/')) {
      browserVersion = userAgent.split('Chrome/')[1].split(' ')[0];
    } else if (userAgent.includes('Firefox/')) {
      browserVersion = userAgent.split('Firefox/')[1].split(' ')[0];
    } else if (userAgent.includes('Safari/')) {
      browserVersion = userAgent.split('Safari/')[1].split(' ')[0];
    } else if (userAgent.includes('Edge/')) {
      browserVersion = userAgent.split('Edge/')[1].split(' ')[0];
    } else if (userAgent.includes('OPR/')) {
      browserVersion = userAgent.split('OPR/')[1].split(' ')[0];
    } else if (userAgent.includes('Opera/')) {
      browserVersion = userAgent.split('Opera/')[1].split(' ')[0];
    } else if (userAgent.includes('MSIE ')) {
      browserVersion = userAgent.split('MSIE ')[1].split(';')[0];
    } else {
      browserVersion = 'Unknown';
    }
  
    return {
      name: browserName,
      version: browserVersion
    };
  }
  
  // Example usage:
  const browserInfo = getBrowserInfo();
  console.log(browserInfo.name); // Output: [Browser Name]
  console.log(browserInfo.version); // Output: [Browser Version]
  


// b. Implement the function to display the user's browser name and version.

function displayBrowserInfo() {
    const userAgent = navigator.userAgent;
    let browserName;
    let browserVersion;
  
    // Detect browser name
    if (userAgent.includes('Firefox')) {
      browserName = 'Firefox';
    } else if (userAgent.includes('Chrome')) {
      browserName = 'Chrome';
    } else if (userAgent.includes('Safari')) {
      browserName = 'Safari';
    } else if (userAgent.includes('Edge')) {
      browserName = 'Edge';
    } else if (userAgent.includes('Opera') || userAgent.includes('OPR')) {
      browserName = 'Opera';
    } else if (userAgent.includes('Trident') || userAgent.includes('MSIE')) {
      browserName = 'Internet Explorer';
    } else {
      browserName = 'Unknown';
    }
  
    // Detect browser version
    if (userAgent.includes('Version/')) {
      browserVersion = userAgent.split('Version/')[1].split(' ')[0];
    } else if (userAgent.includes('Chrome/')) {
      browserVersion = userAgent.split('Chrome/')[1].split(' ')[0];
    } else if (userAgent.includes('Firefox/')) {
      browserVersion = userAgent.split('Firefox/')[1].split(' ')[0];
    } else if (userAgent.includes('Safari/')) {
      browserVersion = userAgent.split('Safari/')[1].split(' ')[0];
    } else if (userAgent.includes('Edge/')) {
      browserVersion = userAgent.split('Edge/')[1].split(' ')[0];
    } else if (userAgent.includes('OPR/')) {
      browserVersion = userAgent.split('OPR/')[1].split(' ')[0];
    } else if (userAgent.includes('Opera/')) {
      browserVersion = userAgent.split('Opera/')[1].split(' ')[0];
    } else if (userAgent.includes('MSIE ')) {
      browserVersion = userAgent.split('MSIE ')[1].split(';')[0];
    } else {
      browserVersion = 'Unknown';
    }
  
    console.log(`Browser Name: ${browserName}`);
    console.log(`Browser Version: ${browserVersion}`);
  }
  
  // Example usage:
  displayBrowserInfo();



  //   6.Geolocation:


// a. Implement a JavaScript function that retrieves the user's current location (latitude and longitude) using the geolocation API.

function getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          console.log(`Latitude: ${latitude}`);
          console.log(`Longitude: ${longitude}`);
        },
        function (error) {
          console.log(`Error getting location: ${error.message}`);
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }
  
  // Example usage:
  getCurrentLocation();

  

//   7.JS Common Events:

// a. When the user clicks anywhere on the page, display an alert with the coordinates (x, y) of the click.

function displayClickCoordinates(event) {
    const x = event.clientX;
    const y = event.clientY;
    alert(`Clicked at coordinates (x, y): (${x}, ${y})`);
  }
  
  // Add event listener to listen for click events on the page
  document.addEventListener('click', displayClickCoordinates);
  

// b. When the user presses any key on the keyboard, display an alert with the key code of the pressed key.

function displayKeyCode(event) {
    const keyCode = event.keyCode || event.which;
    alert(`Key code: ${keyCode}`);
  }
  
  // Add event listener to listen for keydown events on the page
  document.addEventListener('keydown', displayKeyCode);

  

// c. When the user moves the mouse over an image, change the image source to another image of your choice.

function changeImageSource() {
    const image = document.getElementById('myImage');
    image.src = 'new-image.jpg';
  }
  
  // Add event listener to listen for mouseover events on the image
  const imageElement = document.getElementById('myImage');
  imageElement.addEventListener('mouseover', changeImageSource);



  //   8.HTML DOM Document:

// a. Create a webpage with a button and a paragraph element.

<!DOCTYPE html>
<html>
<head>
  <title>Button Example</title>
  <style>
    /* Optional: Add some basic styling */
    button {
      padding: 10px 20px;
      font-size: 16px;
    }
    p {
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <button id="myButton">Click Me</button>
  <p id="myParagraph">This is a paragraph element.</p>

  <!-- Optional: Add JavaScript logic for button click -->
  <script>
    const button = document.getElementById('myButton');
    const paragraph = document.getElementById('myParagraph');

    button.addEventListener('click', function() {
      paragraph.textContent = 'Button clicked!';
    });
  </script>
</body>
</html>


// b. Implement a JavaScript function that changes the text content of the paragraph element to "Button Clicked!" when the button is clicked.

<!DOCTYPE html>
<html>
<head>
  <title>Button Example</title>
  <style>
    /* Optional: Add some basic styling */
    button {
      padding: 10px 20px;
      font-size: 16px;
    }
    p {
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <button id="myButton">Click Me</button>
  <p id="myParagraph">This is a paragraph element.</p>

  <!-- Optional: Add JavaScript logic for button click -->
  <script>
    function changeParagraphText() {
      const paragraph = document.getElementById('myParagraph');
      paragraph.textContent = 'Button Clicked!';
    }

    const button = document.getElementById('myButton');
    button.addEventListener('click', changeParagraphText);
  </script>
</body>
</html>


// 9.JS DOM Working with Form Input:


<!DOCTYPE html>
<html>
<head>
  <title>Button and Form Validation Example</title>
  <style>
    /* Optional: Add some basic styling */
    .error {
      color: red;
      font-size: 14px;
      margin-bottom: 5px;
    }
  </style>
</head>
<body>
  <button id="myButton">Click Me</button>
  <p id="myParagraph">This is a paragraph element.</p>

  <hr>

  <form id="myForm">
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name">
      <div id="nameError" class="error"></div>
    </div>

    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email">
      <div id="emailError" class="error"></div>
    </div>

    <div>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password">
      <div id="passwordError" class="error"></div>
    </div>

    <div>
      <label for="confirmPassword">Confirm Password:</label>
      <input type="password" id="confirmPassword" name="confirmPassword">
      <div id="confirmPasswordError" class="error"></div>
    </div>

    <button type="submit">Submit</button>
  </form>

  <!-- Optional: Add JavaScript logic for button click and form validation -->
  <script>
    const button = document.getElementById('myButton');
    const paragraph = document.getElementById('myParagraph');

    button.addEventListener('click', function() {
      paragraph.textContent = 'Button Clicked!';
    });

    const form = document.getElementById('myForm');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      resetErrors();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirmPassword').value;

      if (!validateName(name)) {
        displayError('nameError', 'Name should not be empty and should contain only letters.');
      }

      if (!validateEmail(email)) {
        displayError('emailError', 'Please enter a valid email address.');
      }

      if (!validatePassword(password)) {
        displayError('passwordError', 'Password should have a minimum length of 8 characters and contain at least one uppercase letter, one lowercase letter, and one digit.');
      }

      if (!validateConfirmPassword(password, confirmPassword)) {
        displayError('confirmPasswordError', 'Passwords do not match.');
      }

      if (validateName(name) && validateEmail(email) && validatePassword(password) && validateConfirmPassword(password, confirmPassword)) {
        form.submit();
      }
    });

    function resetErrors() {
      const errorElements = document.getElementsByClassName('error');
      Array.from(errorElements).forEach(function(element) {
        element.textContent = '';
      });
    }

    function displayError(elementId, errorMessage) {
      const errorElement = document.getElementById(elementId);
      errorElement.textContent = errorMessage;
    }

    function validateName(name) {
      const nameRegex = /^[A-Za-z]+$/;
      return name.trim() !== '' && nameRegex.test(name);
    }

    function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }

    function


    {/* 10.DOM Manipulate CSS Class:


a. Create a webpage with a button and a paragraph element. */}

    <!DOCTYPE html>
<html>
<head>
  <title>DOM Manipulation Example</title>
  <style>
    .highlight {
      background-color: yellow;
    }
  </style>
</head>
<body>
  <button id="myButton">Highlight Text</button>
  <p id="myParagraph">This is a paragraph element.</p>

  <!-- Optional: Add JavaScript logic for button click and CSS class manipulation -->
  <script>
    const button = document.getElementById('myButton');
    const paragraph = document.getElementById('myParagraph');

    button.addEventListener('click', function() {
      paragraph.classList.toggle('highlight');
    });
  </script>
</body>
</html>



{/* b. Implement a JavaScript function that adds a CSS class named "highlight" to the paragraph element when the button is clicked. The "highlight" class should change the background color of the paragraph to yellow. */}


<!DOCTYPE html>
<html>
<head>
  <title>DOM Manipulation Example</title>
  <style>
    .highlight {
      background-color: yellow;
    }
  </style>
</head>
<body>
  <button id="myButton">Highlight Text</button>
  <p id="myParagraph">This is a paragraph element.</p>

  <!-- Optional: Add JavaScript logic for button click and CSS class manipulation -->
  <script>
    function highlightParagraph() {
      const paragraph = document.getElementById('myParagraph');
      paragraph.classList.add('highlight');
    }

    const button = document.getElementById('myButton');
    button.addEventListener('click', highlightParagraph);
  </script>
</body>
</html>



{/* 11.Create Element & Append Element:


a. Create a webpage with an empty unordered list (<ul>). */}

<!DOCTYPE html>
<html>
<head>
  <title>Create Element & Append Element Example</title>
</head>
<body>
  <ul id="myList"></ul>

  <!-- Optional: Add JavaScript logic for creating and appending list items -->
  <script>
    const list = document.getElementById('myList');

    function addItemToList(text) {
      const listItem = document.createElement('li');
      listItem.textContent = text;
      list.appendChild(listItem);
    }

    // Example usage
    addItemToList('Item 1');
    addItemToList('Item 2');
    addItemToList('Item 3');
  </script>
</body>
</html>



{/* 12.DOM Change Attribute Value:


a. Create a webpage with an image element (<img>) that has an initial source URL. */}

<!DOCTYPE html>
<html>
<head>
  <title>DOM Change Attribute Value Example</title>
</head>
<body>
  <img id="myImage" src="initial_image.jpg" alt="Initial Image">

  <!-- Optional: Add JavaScript logic for changing the image source -->
  <script>
    const image = document.getElementById('myImage');

    function changeImageSource(newSource) {
      image.src = newSource;
    }

    // Example usage
    changeImageSource('new_image.jpg');
  </script>
</body>
</html>



{/* b. Implement a JavaScript function that changes the source URL of the image element when a button is clicked. Use a different image URL of your choice. */}

<!DOCTYPE html>
<html>
<head>
  <title>DOM Change Attribute Value Example</title>
</head>
<body>
  <img id="myImage" src="initial_image.jpg" alt="Initial Image">
  <button id="myButton">Change Image</button>

  <!-- Optional: Add JavaScript logic for changing the image source -->
  <script>
    const image = document.getElementById('myImage');
    const button = document.getElementById('myButton');

    function changeImageSource() {
      image.src = 'new_image.jpg';
    }

    button.addEventListener('click', changeImageSource);
  </script>
</body>
</html>


{/* 13.DOM Query Selector:


a. Create a webpage with multiple paragraphs containing different classes and IDs. */}


<!DOCTYPE html>
<html>
<head>
  <title>DOM Query Selector Example</title>
</head>
<body>
  <p id="paragraph1" class="highlight">Paragraph 1</p>
  <p id="paragraph2" class="highlight">Paragraph 2</p>
  <p id="paragraph3" class="highlight">Paragraph 3</p>
  <p id="paragraph4" class="normal">Paragraph 4</p>
  <p id="paragraph5" class="normal">Paragraph 5</p>

  <!-- Optional: Add JavaScript logic to query and manipulate the paragraphs -->
  <script>
    const highlightedParagraphs = document.querySelectorAll('.highlight');
    const normalParagraphs = document.querySelectorAll('.normal');

    console.log("Highlighted paragraphs:");
    highlightedParagraphs.forEach(paragraph => {
      console.log(paragraph.textContent);
    });

    console.log("Normal paragraphs:");
    normalParagraphs.forEach(paragraph => {
      console.log(paragraph.textContent);
    });
  </script>
</body>
</html>

{/* b. Implement a JavaScript function that selects all paragraphs with a specific class and changes their text color to red. */}



<!DOCTYPE html>
<html>
<head>
  <title>DOM Query Selector Example</title>
  <style>
    .highlight {
      color: red;
    }
  </style>
</head>
<body>
  <p class="highlight">Paragraph 1</p>
  <p class="highlight">Paragraph 2</p>
  <p class="highlight">Paragraph 3</p>
  <p>Paragraph 4</p>
  <p>Paragraph 5</p>

  <!-- Optional: Add JavaScript logic to change the text color -->
  <script>
    function changeTextColor() {
      const paragraphs = document.querySelectorAll('.highlight');
      paragraphs.forEach(paragraph => {
        paragraph.style.color = 'red';
      });
    }

    // Example usage
    changeTextColor();
  </script>
</body>
</html>


{/* 14.AJAX Get Request: */}


{/* a. Implement a JavaScript function that sends an AJAX GET request to the following URL: "https://api.example.com/data". */}

function sendGetRequest() {
  const url = "https://api.example.com/data";
  const xhr = new XMLHttpRequest();

  xhr.open("GET", url, true);

  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        const response = xhr.responseText;
        console.log("Response:", response);
        // Perform further operations with the response
      } else {
        console.error("Error:", xhr.status);
      }
    }
  };

  xhr.send();
}


{/* 15.AJAX Post Request:


a. Implement a JavaScript function that sends an AJAX POST request to the following URL: "https://api.example.com/submit". */}

function sendPostRequest() {
  const url = "https://api.example.com/submit";
  
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ key1: "value1", key2: "value2" })
  };
  
  fetch(url, requestOptions)
    .then(response => response.json())
    .then(data => {
      console.log("Response:", data);
      // Perform further operations with the response
    })
    .catch(error => {
      console.error("Error:", error);
    });
}



{/* b. Send a JSON payload with the following data: { "name": "John Doe", "email": "johndoe@example.com" }. */}

function sendPostRequest() {
  const url = "https://api.example.com/submit";
  
  const data = {
    name: "John Doe",
    email: "johndoe@example.com"
  };
  
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };
  
  fetch(url, requestOptions)
    .then(response => response.json())
    .then(data => {
      console.log("Response:", data);
      // Perform further operations with the response
    })
    .catch(error => {
      console.error("Error:", error);
    });
}


