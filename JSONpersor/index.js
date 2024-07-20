document.getElementById("parseButton").addEventListener("click", function () {
  const jsonInput = document.getElementById("jsonInput").value;
  const jsonOutput = document.getElementById("output");

  //This try catch blocks will try to output the data as JSON but if there is an error it will print the error.
  try {
    const parsedData = parseJSON(jsonInput);
    jsonOutput.textContent = JSON.stringify(parsedData, null, 2);
  } catch (e) {
    jsonOutput.textContent = "Invalid JSON type: " + e.message;
  }

  //This function is going to parse the data into JSON
  function parsedData(input) {
    let index = 0;

    //This function calles other parsing functions based on the type of value being passed from the input
    function parseValue() {
      skipWhitespace(); //If the input is just whitespace it will skip the value
      if (input[index] === "{") {
        //If the index is { it means that it is Object and will call parseObject function
        return parseObject();
      }
      if (input[index] === "[") {
        //If the index is [] it means that it is Array and will call parseArray function
        return parseArray();
      }
      if (input[index] === `"`) {
        //If the index is "" it means that it is String and will call parseString function
        return parseString();
      }
      if (input[index] === "t" || input[index] === "f") {
        //If the index is t or f it means that it is true or a false value and will call parseBoolean function
        return parseBoolean();
      }
      if (input[index] === "n") {
        //If the index is n it means that it is null value and will call parseNull function
        return parseNull();
      }
      if (isDigit(input[index]) || input[index] === "-") {
        //If the index is a number it means that it is numeric value and will call parseNumber function
        return parseNumber();
      }
    }
  }
});
