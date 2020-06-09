export default class utils {
   // Addition
   static add(input1, input2) {
      // A1: any JavaScript value
      // A2: any JavaScript value
      // R: a single JavaScript value
      return input1 + input2;
   }

   // Subtraction
   static subtract(input1, input2) {
      // A1: any number
      // A2: any number
      // R: the result of subtraction
      return input1 - input2;
   }

   // Multiplication
   static multiplication(input1, input2) {
      // A1: any number
      // A2: any number
      // R: the result of multiplication
      return input1 * input2;
   }

   // Division
   static division(input1, input2) {
      // A1: any number
      // A2: any number
      // R: the result of division
      return input1 / input2;
   }

   // Increment

   static increment(input) {
      // A1: any number
      // R: the input number plus one
      input++;
      return input;
   }

   // Decrement
   static decrement(input) {
      // A1: any number
      // R: the input number plus one
      input--;
      return input;
   }

   // Multiplication with decimals
   static decimalMultiplication(input1, input2) {
      // A1: any number
      // A2: any number
      // R: the result of multiplication
      return input1 * input2;
   }

   // Division with decimals
   static decimalDivision(input1, input2) {
      // A1: any number
      // A2: any number
      // R: the result of division
      return input1 / input2;
   }

   // Compound Assignment with Augmented Addition
   static compoundAdd(input) {
      // A1: any number
      // R: 5 plus the number given
      var compoundAddNumber = 5;
      return (compoundAddNumber += input);
   }

   // Concatenating string with +
   static concatenate(input1, input2) {
      // A1: a string
      // A2: a string
      // R: the two strings put together with a space in between
      return input1 + " " + input2;
   }

   // Concatenating strings with +=
   static concatentatePlusEqual(input1, input2) {
      // A1: a string
      // A2: a string
      // R: the two strings put together
      var firstString = input1;
      return (firstString += input2);
   }

   // String with variable
   static concatentateVariable(input1, input2) {
      // A1: a string
      // A2: a string
      // R: the two strings put into a sentence
      return (
         "My name is " + input1 + " " + input2 + " and don't you forget it!"
      );
   }

   // Length of a string
   static stringLength(input) {
      // A1: a string
      // R: outputs the length of the string
      var stringLength = 0;
      var string = input;
      stringLength = string.length;
      return stringLength;
   }

   // Bracket notation to find the first letter of a string
   static bracketFirstLetter(input) {
      // A1: a string
      // R: the first letter of the string
      var firstLetter = "";
      var string = input;
      firstLetter = string[0];
      return firstLetter;
   }

   // Bracket notation to find the nth letter of a string
   static bracketNthLetter(input1, input2) {
      // A1: a string
      // A2: a number
      // R: the nth letter from the beginning of a string
      var nthLetter = input2;
      nthLetter--;
      var string = input1;
      let returnLetter = string[nthLetter];
      return returnLetter;
   }

   // Bracket notation to find the last letter of a string
   static bracketLastLetter(input) {
      // A1: a string
      // R: the las letter of the string
      var lastLetter = "";
      var string = input;
      lastLetter = string[string.length - 1];
      return lastLetter;
   }

   // Bracket notation to find the nth to the last letter of a string
   static bracketNthLastLetter(input1, input2) {
      // A1: a string
      // A2: a number
      // R: the nth letter from the end of a string
      var nthlastLetter = "";
      var nthLetter = input2;
      nthLetter++;
      var string = input1;
      nthlastLetter = string[string.length - nthLetter];
      return nthlastLetter;
   }

   // Manipulate Arrays with push
   static pushArray(input1, input2) {
      // A1: a string or number
      // A2: a string or number
      // R: the array with the two inputs inserted into the end
      var array = [7, 3];
      array.push([input1, input2]);
      return array + " Added " + input1 + " and " + input2 + " to the array.";
   }

   // Manipulate Arrays with pop
   static popArray() {
      // R: the array with the last value removed
      var array = [7, 3, 4];
      let removedPart = array.pop();
      return array + " Removed " + removedPart + " from the array.";
   }

   // Manipulate Arrays with shift
   static shiftArray() {
      // R: the array with the first value removed
      var array = [7, 3, 4];
      let removedPart = array.shift();
      return array + " Removed " + removedPart + " from the array.";
   }

   // Manipulate Arrays with unshift
   static unShiftArray(input1, input2) {
      // A1: a number
      // A2: a number
      // R: the array with the first array removed and a new array inserted from user input
      var array = [
         [3, 5],
         [8, 7],
      ];
      var removedArray = array.shift();
      array.unshift([input1, input2]);
      return (
         array +
         " Removed " +
         removedArray +
         " and added " +
         input1 +
         " and " +
         input2 +
         " to the array."
      );
   }

   // Shopping List
   static shoppingList(input1, input2) {
      // A1: an input
      // A2: an input
      // R: and array with the last array removed and the first array inserted into it
      const array = [
         ["Beer", 5],
         ["Ice Cream", 7],
      ];
      const removedArray = array.pop();
      array.unshift([input1, input2]);
      return (
         array[0][0] +
         "-" +
         array[0][1] +
         " , " +
         array[1][0] +
         "-" +
         array[1][1] +
         ". " +
         " Removed " +
         removedArray[0] +
         " then added " +
         input1 +
         " and " +
         input2 +
         " to the array."
      );
   }

   // Stand in line

   static standInLine(input) {
      const arr = [1, 2, 3, 4, 5, 6];
      // R: removes and states the first number and adds the inputed number to the end
      const removedNumber = 0;
      arr.push(input);
      removedNumber = arr.shift();
      return (
         removedNumber +
         " has gone to the window! The line numbers are now " +
         arr +
         "\n Have a nice day!"
      );
   }

   // COUNTING CARDS

   static countingCards(card1, card2, card3, card4, card5) {
      const count = 0;
      switch (card1) {
         case 2:
         case 3:
         case 4:
         case 5:
         case 6:
            count++;
            break;
         case 10:
         case "J":
         case "Q":
         case "K":
         case "A":
            count--;
            break;
         default:
            break;
      }
      switch (card2) {
         case 2:
         case 3:
         case 4:
         case 5:
         case 6:
            count++;
            break;
         case 10:
         case "J":
         case "Q":
         case "K":
         case "A":
            count--;
            break;
         default:
            break;
      }
      switch (card3) {
         case 2:
         case 3:
         case 4:
         case 5:
         case 6:
            count++;
            break;
         case 10:
         case "J":
         case "Q":
         case "K":
         case "A":
            count--;
            break;
         default:
            break;
      }
      switch (card4) {
         case 2:
         case 3:
         case 4:
         case 5:
         case 6:
            count++;
            break;
         case 10:
         case "J":
         case "Q":
         case "K":
         case "A":
            count--;
            break;
         default:
            break;
      }
      switch (card5) {
         case 2:
         case 3:
         case 4:
         case 5:
         case 6:
            count++;
            break;
         case 10:
         case "J":
         case "Q":
         case "K":
         case "A":
            count--;
            break;
         default:
            break;
      }

      if (count > 0) {
         return count + " Bet";
      } else {
         return count + " Hold";
      }
   }

   // RECORD COLLECTION

   static recordCollection(id, prop, value) {
      const collection = {
         1000: {
            album: "Pretty Hate Machine",
            artist: "Nine Inch Nails",
            tracks: ["Down In It", "Head Like a Hole"],
         },
         2000: {
            album:
               "Ministry Psalm 69: The Way to Succeed and the Way to Suck Eggs",
            artist: "Ministry",
            tracks: ["Jesus Built My Hotrod", "Just One Fix"],
         },
         3000: {
            artist: "Pink Floyd",
            tracks: [],
         },
         4000: {
            album: "The Black Album",
         },
      };

      if (value === "") delete collection[id][prop];
      else if (prop === "tracks") {
         collection[id][prop] = collection[id][prop] || [];
         collection[id][prop].push(value);
      } else {
         collection[id][prop] = value;
      }
      console.log(collection);
      return "Please view the console for the updated collection.";
   }

   // ITERATE ODD NUMBERS WITH A FOR LOOP

   static forOddNumbers(input) {
      const oddArray = [];
      for (let count = 1; count <= input; count += 2) {
         oddArray.push(count);
      }
      return oddArray;
   }

   // PROFILE LOOKUP

   static profileLookup(name, prop) {
      const contacts = [
         {
            firstName: "Akira",
            lastName: "Laine",
            number: "0543236543",
            likes: ["Pizza", "Coding", "Brownie Points"],
         },
         {
            firstName: "Harry",
            lastName: "Potter",
            number: "0994372684",
            likes: ["Hogwarts", "Magic", "Hagrid"],
         },
         {
            firstName: "Sherlock",
            lastName: "Holmes",
            number: "0487345643",
            likes: ["Intriguing Cases", "Violin"],
         },
         {
            firstName: "Kristian",
            lastName: "Vos",
            number: "unknown",
            likes: ["JavaScript", "Gaming", "Foxes"],
         },
      ];
      for (let count = 0; count < contacts.length; count++) {
         if (contacts[count].firstName === name) {
            if (contacts[count].hasOwnProperty(prop)) {
               return contacts[count][prop];
            } else {
               return "No such property";
            }
         }
      }
      return "No such contact";
   }

   // GENERATE RANDOM WHOLE NUMBERS WITHIN A RANGE

   static randomRange(myMin, myMax) {
      return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
   }

   // REMOVE ITEMS USING SPLICE

   static spliceArr(input1, input2) {
      const arr = [2, 4, 5, 1, 7, 5, 2, 1];
      arr.splice(input1, input2);
      return arr;
   }

   // ADD ITEMS USING SPLICE

   static addSlpiceArr(input1, input2, input3, input4) {
      const arr = [2, 4, 5, 1, 7, 5, 2, 1];
      arr.splice(input1, input2, input3, input4);
      return arr;
   }

   // CHECK FOR THE PRESENCE OF AN ELEMENT WITH indexOf()

   static indexOfCheck(input) {
      let fruits = ["apples", "pears", "oranges", "peaches", "pears"];
      if (fruits.indexOf(input) >= 0) {
         return true;
      }
      return false;
   }

   // CHECK THE TYPE OF VARIABLE

   static variableType(input) {
      console.log(typeof input);
      return typeof input;
   }

   // RETURN PART OF AN ARRAY USING SLICE METHOD

   static sliceArray(beginSlice, endSlice) {
      const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const newArray = numArray.slice(beginSlice, endSlice);
      return newArray;
   }

   // REMOVE ELEMENTS WITH SLICE INSTEAD OF SPLICE

   static spliceBad(begin, end) {
      const spliceArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const sliceArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const newSpliceArray = spliceArray.splice(begin, end);
      const newSliceArray = sliceArray.slice(begin, end);
      return (
         "The Array splice pulled from after splice: " +
         spliceArray +
         " . " +
         "The Array Splice made: " +
         newSpliceArray +
         " . " +
         "The Array slice pulled from after slice: " +
         sliceArray +
         " . " +
         "The Array slice made: " +
         newSliceArray
      );
   }

   // COMBINE TWO ARRAYS USING THE CONCAT METHOD

   static arrayConcat(arr1, arr2) {
      return arr1.concat(arr2);
   }

   // ADD ELEMENTS TO THE END OF AN ARRAY USING CONAT INSTEAD OF PUSH

   static pushVSconcat(userArr) {
      const pushArray = [1, 2, 3, 4, 5];
      const concatArray = [1, 2, 3, 4, 5];
      pushArray.push(userArr);
      const newConcatArray = concatArray.concat(userArr);
      return (
         "Push changed it's original array to :" +
         pushArray +
         " . " +
         "While concat didn't change its orginal array, it just made a new one: " +
         "   Original Array: " +
         concatArray +
         "   New Array: " +
         newConcatArray
      );
   }

   // USE THE REDUCE METHOD TO ANALYZE DATA

   static reduceArray(startArray) {
      const addArray = startArray
         // filters out negative numbers
         .filter((num) => num > 0)
         // adds the numbers together to produce a sum
         .reduce((arrSum, num) => arrSum + num);
      return addArray;
   }

   // USE HIGHER-ORDER FUNCTIONS MAP, FILTER, OR REDUCE TO SOLVE AN COMPLEX PROBLEM

   static complexProblem(userArray, userPow) {
      const powArray = userArray
         // filters out the negative numbers, decimals, and odd numbers.
         .filter(
            (num) => num > 0 && num % parseFloat(num) === 0 && num % 2 === 0
         )
         // take the remaining numbers and raises them to the power a user has given
         .map((num) => Math.pow(num, userPow));
      return powArray;
   }

   // SORT AN ARRAY ALPHABETICALLY USING THE SORT METHOD\

   static sortArray() {
      const userArray = ["l", "g", "a", "c", "d", "b", "f", "z", "h", "l", "a"];
      return userArray.sort(function (a, b) {
         // compares the values with conditional ? if the same it doesnt move it if it is less than then it gets moved forward
         return a === b ? 0 : a < b ? -1 : 1;
      });
   }

   // SPLIT A STRING INTO AN ARRAY USING THE SLIP METHOD

   static splitArray(userString) {
      const stringArray = userString.split(/\W/);
      return stringArray;
   }

   // COMBINE AN ARRAY INTO A STRING USING THE JOIN METHOD

   static joinArray(userString) {
      // Takes the string and turns it into an array then turns it back into a string.
      const newArray = userString.split(/\W/).join(" ");
      return newArray;
   }

   // APPLY FUNCTIONAL PROGRAMMING TO CONVERT STRINGS INTO A URL SLUG

   static slug(userString) {
      return userString
         .split(/\W/)
         .filter((obj) => {
            return obj !== "";
         })
         .join("-")
         .toLowerCase();
   }

   // USE THE EVERY METHOD TO CHECK THAT EVERY ELEMENT IN AN ARRAY MEETS A CRITERIA

   static everyArray(userArray) {
      return userArray.every(function (isPositive) {
         return isPositive > 0;
      });
   }

   // USE THE SOME METHOD TO CHECK THAT ANY ELEMENTS IN AN ARRYA MEET A CHRITERIA

   static someArray(userArray) {
      return userArray.some(function (isPositive) {
         return isPositive > 0;
      });
   }

   // CONVERT CELSIUS TO FAHRENHEIT

   static celsiusToFahrenheit(userTempCelsius) {
      return userTempCelsius * (9 / 5) + 32; // took temp celcuis and made it farenheit
   }

   // REVERSE A STRING

   static makeStringBackwards(userString) {
      return userString.split("").reverse().join("");
   }

   // FACTORALIZE A NUMBER

   static factoralize(userNum) {
      // need the given number and a starting point for the factoral
      let userProduct = 0;
      for (userProduct = 1; userNum > 0; userNum--) {
         // declared the product and set the for loop to run while the userNum is greater than zero
         userProduct *= userNum; // takes the value of the product and multiplies it by the userNum each time until the userNum is at 1
      }
      return userProduct;
   }

   // FIND THE LONGEST WORD IN A STRING

   static findLongestWordLength(userStr) {
      return Math.max(
         ...userStr // ...userStr takes all of the values/words of the string and puts them in a array
            .split(" ") // takes the sentence and makes and array out of it with each word
            .map((word) => word.length)
      ); // uses Math.max from the line above to only get the longest length value of the words
      // the line above makes an array of numerical values of the word lengths
   }

   // RETURN THE LARGEST NUMBER IN THE ARRAYS

   static largestNumberArrays(userArray1, userArray2) {
      const numberLargestArray = [userArray1]; // put first array as a sub array of the new array
      numberLargestArray.push(userArray2); // added the second array as a second sub array in the new array
      return numberLargestArray.map(function (largeGroup) {
         // start of the map with the function for the large group of numbers
         return largeGroup.reduce(function (firstNumber, secondNumber) {
            // reduce with the function to call the numbers in the subArray
            return firstNumber > secondNumber ? firstNumber : secondNumber; // uses an if statement with ternary operators
            // ternary operators are difficult look to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
            /* ternary goes like this the condtional (the part in the parentesis in an if statement),
          then the ? ,then the part if true return or change, then :, then the part if false return or change,
          so: ** contitional statement ? true return/change : false return/change */
         });
      });
   }

   // CONFIRM THE ENDING

   static endingConfirmed(userString, userEnding) {
      return userString.slice(-userEnding.length) === userEnding;
      /* used slice to pull the last characters from the string researching the slice mdn and stack overflow, i found
    out that if you just use a negative number, it will pull from the end of the string to the beginning.  This function 
    just uses the target string's length to pull the last characters from the first sting and it then compares the two. */
   }

   // REPEAT A STRING REPEAT A STRING
   static stringRepeat(userString, userRepeatNumber) {
      let repeatString = ""; // base empty string
      for (let count = 0; count < userRepeatNumber; count++) {
         // runs the loop until count gets to the number the user specified
         repeatString += userString; // for loop to add the userString to the repeatString
      }
      return repeatString;
   }

   //  TRUNCATE A STRING

   static stringTruncate(userString, userNum) {
      return userString.length > userNum // conditional to check if the string length is longer than the number given
         ? userString.slice(0, userNum) + "..." // if yes then slice from the beginning to the number specified
         : userString; // if no then just return the string
   }

   // FINDERS KEEPERS

   static findersKeepers(userArray, userSelection) {
      let functionType = // this lets users select what function they are using
         userSelection === 2
            ? function (num) {
                 // if user enters 2 it will look for an even number
                 return num % 2 === 0;
              }
            : function (num) {
                 return num % 2 !== 0; // if the user enters 1 it will look and odd number
              };
      return userArray.filter(functionType)[0]; // returns the first odd/even number by using filter(the function) the [0] makes the filter stop when if finds the first value that satifies the function
   }

   // BOO WHO

   static booWho(userInput) {
      return userInput === true || userInput === false ? true : false; // checks to see if the user input is a boolean primitive(true/false) otherwise it returns false
      // could have done typeOf to make shorter instead of boolean (return typeOf userInput === "boolean";)
   }

   // TITLE CASE A SENTENCE

   static titleCase(userStr) {
      return userStr
         .toLowerCase() // makes everything lowercase
         .split(" ") // turns the string into an array with each array object a word
         .map(function (strObj) {
            //taking each word from the array
            return strObj.replace(
               // using replace to change each word
               strObj.charAt(0), // the first argument of replace is pointing to what is being replaced, here is the first letter because charAt(0) will point to the first letter of strObj
               strObj.charAt(0).toUpperCase(0) // the second argument is what is replacing the first, in this case a capitalized letter
            );
         })
         .join(" "); // turns the array back into a string
   }

   // SLICE AND SPLICE

   static sliceSplice(userArray1, userArray2, userSelection) {
      let arrayModified = userArray2.slice(); // copies the second array so the original wont change
      arrayModified.splice(userSelection, 0, userArray1); // takes the copied second array and using slice inserts the first aray into it.
      return arrayModified;
      // slice(where are we inserting this, how many should we delete, insert and/or delete from where)
   }

   // FALSY BOUNCER

   static falsyBouncer(userArray) {
      return userArray.filter(function (trueTrue) {
         // uses a filter get rid of false values
         return trueTrue; // since false values in function only show true values, we dont need more than this. (I was notified by the internet that putting !! infron of the variable is a better way of writing this.)
      });
   }

   // WHERE DO I BELONG

   static whereDoIBelong(userArray, userNumber) {
      userArray.push(userNumber); // adds user number to that array
      userArray.sort(function (a, b) {
         // sorts the array in increasing order
         return a - b;
      });
      return (
         "The now sorted array is: " +
         userArray +
         " The position of your number in that array is: " +
         userArray.indexOf(userNumber) // shows the position of the userNumber in the array
      );
   }

   // SCRIPTING MUTATIONS

   static mutation(userArray) {
      let mainObj = userArray[0].toLowerCase().split(""); // lowercase and split first element of the array
      let testObj = userArray[1].toLowerCase().split(""); // lowercase and split second element of the array
      for (let letter = 0; letter < testObj.length; letter++) {
         // runs the for loop for each letter of the seceond element
         if (mainObj.indexOf(testObj[letter]) < 0) {
            // if statement is testing to see if the letter is in the index of the first element if not return false
            return false;
         }
      }
      return true; // if the if statement passes everything then return true
   }

   // CHUNKY MONKEY

   static chunkyMonkey(userArray, userSize) {
      let finalArray = []; // new array fo the sliced up arrays to go into
      for (
         let subArrSize = 0;
         subArrSize < userArray.length;
         subArrSize += userSize // must increment by the userSize to make sure we get the same output for each sub array
      ) {
         finalArray.push(userArray.slice(subArrSize, subArrSize + userSize)); // chops up the main array into small arrays and puts them into the new array as sub arrays.
      }
      console.log(finalArray);
      return finalArray;
   }

   // MATCH LITERAL STRINGS

   static matchLiteralStrings(userString) {
      let matchTest = /Bob/; // /Bob/ is looking for lerally bob in the string
      return matchTest.test(userString); // .test only gives true or false
   }

   // MATCH A SINGLE CHARACTER WITH MULTIPLE POSSIBILITITES

   static singleCharacterMultiPosibilities(userString) {
      let vowelTest = /[aeiou]/gi; // looking for any vowel in brackets i= not case sensitive g= the entire string
      return userString.match(vowelTest); // .match gives you the stuff in the string and is written in reverse order from .test
   }

   // MATCH SINGLE CHARCTERS NOT SPECIFIED

   static notSpecifiedSingleCharacter(userString) {
      let notThese = /[^aeiou0-9]/gi; // the ^ means look for charcters that are not these you can also put a range of numbers/letters with a - too
      return userString.match(notThese);
   }

   // MATCH CHARCTERS THAT OCCUR ONE OR MORE TIMES

   static charctersThatOccurMuli(userString) {
      let multiOccur = /l+/gi; // the + means to record the charcter in the same element of an array if there is more than one back to back
      return userString.match(multiOccur);
   }

   //  FIND ONE OR MORE CRIMINALS IN A HUNT

   static criminalHunt(userString) {
      let criminalLook = /C+/; // just looking for C next to each other
      return userString.match(criminalLook);
   }

   // MATCH BEGINNING STRING PATTERNS

   static beginningStringPatterns(userString) {
      let beginningPatterns = /^The/; // just looking to see if the string begins with the, the ^ outside of brackets is used to search for patterns
      return beginningPatterns.test(userString);
   }

   // MATCH ENDING STING PATTERNS

   static endingStringPatterns(userString) {
      let endingPatterns = /cat$/; // the $ at the end is testing to see if the string end with the pattern at the end
      return endingPatterns.test(userString);
   }

   // MATCH ALL LETTERS AND NUMBERS

   static matchAllLettersAndNumbers(userString) {
      let matchTest = /\w/g; // the /\w/ is the same as /[A-Za-z0-9_]/ so its a shorter way of writing it
      return userString.match(matchTest).length; // counting the alphanumeric characters of the string
   }

   // MATCH EVERYTHING BUT LETTERS AND NUMBERS

   static matchAllButLettersAndNumbers(userString) {
      let matchTest = /\W/g; // the /\W/ is the same as /[^A-Za-z0-9_]/ so it will look for everything that isnt a character or number
      return userString.match(matchTest).length; // counting non-alphanumeric characters of a string
   }

   // MATCH ALL NUMBERS

   static matchNumbers(userString) {
      let matchNumbers = /\d/g; // the /\d/ is the same as /[0-9]/
      return userString.match(matchNumbers).length; // counting the numeric characters in a string
   }

   // MATCH ALL NON-NUMBERS

   static matchNonNumbers(userString) {
      let matchNonNumbers = /\D/g; // the /\D/ is the same as /[^0-9]/
      return userString.match(matchNonNumbers).length; // counting the non-numeric chracters in a string
   }

   // MATCH NON-WHITESPACE CHARACTERS IN A STRING

   static matchNonWhitespace(userString) {
      let matchNonWhitespace = /\S/g; // the /\S/ looks for all characters that arent whitespace
      return userString.match(matchNonWhitespace).length; // counting all characters that arent whitespace
   }

   // POSITIVE AND NEGATIVE LOOKAHEAD

   static positiveNegativeLookahead(userString) {
      let passwordCheck = /^\D(?=\w{5,})(?=\w*\d{2})/;
      /* the ^\D makes sure there is not number at the start of the string, 
    the (?=\w{5,}) makes sure the string is at least five characters long, 
    (?=\w*\d{2}) makes sure there are at least consecutive numbers at the end
    the * means there can be zero to unlimited times this can happen
    the negative lookhead != just makes sure something is not in the string. */
      return passwordCheck.test(userString);
   }

   // CHECK FOR MIXED GROUPING OF CHARACTERS

   static mixedGroupingOfCharacters(userString) {
      let mixedGroupingCheck = /(Barack|Michelle).*Obama/;
      /* the (|) means the first name in the check can be one or the other, 
    the .* means any like middle name can be put in */
      return mixedGroupingCheck.test(userString);
   }

   // USE CAPTURE GROUPS TO SEARCH AND REPLACE

   static searchAndReplace(userString) {
      let search = /(\w+)\s(\w+)\s(\w+)/; // looks for and separates each word by space
      return userString.replace(search, "$3 $2 $1");
      // replaces each word with the third term second term and thrid term from the search using the "$3 $2 $1"
   }

   // REMOVE WHITESPACE FROM START AND END

   static removeWhiteSpace(userString) {
      let beinningAndEndWhitespaceSearch = /^\s+|\s+$/g;
      /* ^\s+ looks for whitespace at the beginning,
    | = or
    \s+$ looks for whitespace at the end 
    g = globally on the string */
      return userString.replace(beinningAndEndWhitespaceSearch, "");
      // replaces whitespace with nothing effectively removing it
   }
}
