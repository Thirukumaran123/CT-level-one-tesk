
    function changeColor() {
      const button = document.getElementById('colorButton');
      const colors = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#9B59B6', '#E74C3C'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      button.style.backgroundColor = randomColor;
    }

    function displayGreeting() {
      const currentHour = new Date().getHours();
      let greetingMessage;

      if (currentHour >= 5 && currentHour < 12) {
        greetingMessage = "Good Morning! Welcome to Ourpage";
      } else if (currentHour >= 12 && currentHour < 18) {
        greetingMessage = "Good Afternoon!Welcome to Ourpage";
      } else {
        greetingMessage = "Good Evening!Welcome to Ourpage";
      }

      alert(greetingMessage);
    }

    window.onload = function() {
      displayGreeting(); 
    }
    function addNumbers() {
      const num1 = parseFloat(document.getElementById('num1').value);
      const num2 = parseFloat(document.getElementById('num2').value);

      if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
      }

      const result = num1 + num2;
      document.getElementById('result').textContent = "Result: " + result;
    }