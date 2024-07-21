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
  function parseJSON(input) {
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

    //This function is going to parse an object that is passed from input
    function parseObject() {
      const obj = {};
      index++; //The starting element is { so we are going to skip it
      skipWhitespace(); //We are going to skip any white space

      ////If there is a empty object we need to use this handle that.
      if (input[index] === "}") {
        index++;
        return obj;
      }

      //This is going to loop over every element in the input.
      while (true) {
        skipWhitespace();
        const key = parseString();
        skipWhitespace();

        if (input[index] !== ":") {
          throw new SyntaxError('Expected ":" after key in object');
        }

        index++; //Skipping : from the input
        skipWhitespace();

        const value = parseValue();
        obj[key] = value;
        skipWhitespace();

        if (input[index] === "}") {
          index++; //Skip }
          return obj;
        }

        if (input[index] !== ",") {
          throw new SyntaxError('Expected "," or "}" after value in object');
        }
        index++; //Skip ,
      }
    }

    //This function is responsible for parsing array elements in the input
    function parseArray() {
      const arr = [];
      index++; //Skip starting [
      skipWhitespace();

      //If there is a empty array we need to use this handle that.
      if (input[index] === "]") {
        index++;
        return obj;
      }

      while (true) {
        skipWhitespace();
        arr.push(parseValue()); //This is addig the parsed value to the array
        skipWhitespace();

        if (input[index] === "]") {
          index++; //Skip ]
          return arr;
        }

        if (input[index] !== ",") {
          throw new SyntaxError('Expected "," or "]" after value in array');
        }
        index++;
      }
    }

    //This function is responsible for parsing string in the input
    function parseString() {
      //Parsed result will be stored here
      let str = "";
      index++; //Skip '"'

      //Loop will go untill it sees '"'
      while (input[index] !== '"') {
        if (input[index] === "\\") {
          index++;
          //This is going to check and see if the sequence is a Unicode
          if (input[index] === "u") {
            //This is going to get 4 cherectors from the input
            let hex = input.substr(index + 1, 4);

            //This is going to make sure the extrected cherectos are valid Hexadecimal numbers
            if (!/^[0-9a-fA-F]{4}$/.test(hex)) {
              throw new SyntaxError("Invalid Unicode escape sequence");
            }

            //This is converting the hexadecimal code point to a character and append it to the result string
            std += String.fromCharCode(parseInt(hex, 16));
            index += 4; //Skip next 4 character
          } else {
            //Common escape sequence to their corresponding charector
            const escapeChar = {
              '"': '"',
              "\\": "\\",
              "/": "/",
              b: "\b",
              f: "\f",
              n: "\n",
              r: "\r",
              t: "\t",
            };

            //This is going to append escape sequence to the result string, if the escape requence is not recognized it will append the charectors as is.
            str += escapeChar[input[index]] || input[index];
          }
        } else {
          //If current char is not a escape char append it to the str.
          str += input[index];
        }
        index++;
      }
      index++;
    }

    index++; //Skip '"'
    return str;
  }

  return parseValue();
});
