document.getElementById('calcBtn').addEventListener('click', function () {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    const resultDiv = document.getElementById('result');
  
    let result;
  
    if (isNaN(num1) || isNaN(num2)) {
      resultDiv.textContent = "Please enter both numbers.";
      return;
    }

    switch (operation) {
      case "add":{
        result = num1 + num2;
        break;
      }
      case "subtract":{
        result = num1 - num2;
        break;
      }
      case "multiply":{
        result = num1 * num2;
        break;
      }
      case "divide":{
        result = num1 / num2;
        break;
      }
        
      default:{
        resultDiv.textContent = "Invalid input.";
        return;
      }
    }
    resultDiv.textContent = "Result: " + result;
  });
  