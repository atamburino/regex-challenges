// Match a Specific Word
// Example: "I love JavaScript" -> true; "I love javascript" -> false

//Function for match JS with a parameter called input.
const matchJavaScript = (input) => {
  
  // The forward slashes (/) are delimiters that enclose the pattern.
  // This pattern is a literal string match, meaning it will look for the exact text "I love JavaScript" in the input. 
  // The regex is case-sensitive,
  const regex = /I love JavaScript/;

  // Use the .test() method to check if the input string matches the regex
  // .test() returns true if the input matches, or false if it does not
  return regex.test(input);
};

// Validate Email Address
// Example: "test@example.com" -> true; "invalid-email" -> false
const validateEmail = (email) => {
  const regex = /test@example.com/i;
  return regex.test(email);
};


// Extract Numbers
// Example: "abc123def456" -> ["123", "456"]; "no numbers" -> []
const extractNumbers = (input) => {
  // \d+ means:
  //   - \d: matches any digit (0-9)
  //   - +: matches one or more of the preceding character (digits in this case)
  // g: global flag, finds all matches in the string, not just the first one
  const regex = /\d+/g;

  // Self notes:
  // - If no matches are found, .match() returns null
  // - The || [] provides a fallback to an empty array if no matches exist
  return (input.match(regex) || []);
};

// Replace Whitespace
// Example: "Hello World" -> "Hello_World"; "a b c" -> "a_b_c"
const replaceWhitespace = (input) => {
  // \s+ matches one or more whitespace characters (spaces, tabs, newlines)
  // g is the global flag to replace all instances, not just the first one
  // + means "one or more" of the preceding character
  return input.replace(/\s+/g, '_');
};

// Validate Phone Number
// Example: "(123) 456-7890" -> true; "123-456-7890" -> false
const validatePhoneNumber = (input) => {
  // THE WHY
  // ^ : start of the string
  // \( : literal opening parenthesis
  // \d{3} : exactly 3 digits
  // \) : literal closing parenthesis
  // \s : exactly one space
  // \d{3} : exactly 3 digits
  // - : literal hyphen
  // \d{4} : exactly 4 digits
  // $ : end of the string
  const regex = /^\(\d{3}\)\s\d{3}-\d{4}$/;
  return regex.test(input)
};

// Extract Hexadecimal Colors
// Example: "Colors: #FFF, #123ABC" -> ["#FFF", "#123ABC"]; "no colors" -> []
const extractHexColors = (str) => {

  const hexColorRegex = /#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})\b/g;

  //.match finds matches and returns them as an array
  return (str.match(hexColorRegex) || []);
};

// Validate URL
// Example: "https://example.com" -> true; "ftp://example.com" -> false
const validateUrl = (url) => {
  
  const urlRegex = /^https?:\/\/[^\s/$.?#].[^\s]*$/i;
  
  return urlRegex.test(url);
};

// Validate Dates
// Example: "12/25/2023" -> true; "25/12/2023" -> false
const validateDate = (date) => {

  // This regex checks to see if the first two numbers are 1-12, the next step checks 1-39  // and the \d{4} checks for last 4 of the year.
  const dateRegex = /^(0?[1-9]|1[0-2])\/([0-3][0-9])\/\d{4}$/;
  return dateRegex.test(date);
};

// Count Vowels
// Example: "hello" -> 2; "xyz" -> 0
const countVowels = (string) => {
  
  // G flag finds all matches globally
  /// i glag makes it case-insensitive
  const vowelRegex = /[aeiou]/gi;

  // match returns an array of matches or null
  const matches = string.match(vowelRegex);

  // if matches exist -> reuturn the length
  // if no matches return 0
  return matches ? matches.length : 0;

};

// Extract Domain Names
// Example: "test@example.com" -> "example.com"; "invalid" -> null
const extractDomain = () => {};

// Match HTML Tags
// Example: "<div><p>Hello</p></div>" -> ["<div>", "<p>", "</p>", "</div>"]; "text" -> []
const matchHtmlTags = () => {};

// Find Capitalized Words
// Example: "Hello World" -> ["Hello", "World"]; "no caps" -> []
const findCapitalizedWords = () => {};

// Match Repeated Words
// Example: "This is is a test test" -> ["is is", "test test"]; "no repeats" -> []
const matchRepeatedWords = () => {};

// Validate Password
// Example: "Password1" -> true; "password" -> false
const validatePassword = () => {};

// Match Unicode Characters
// Example: "😀" -> ["😀"]; "abcABC" -> ["a", "b", "c", "A", "B", "C"]
const matchUnicodeChars = () => {};

// Validate Credit Card Numbers
// Example: "1234-5678-9012-3456" -> true; "1234-5678" -> false
const validateCreditCard = () => {};

// Replace Non-Word Characters
// Example: "hello world!" -> "hello-world-"; "Hello@World" -> "Hello-World"
const replaceNonWordChars = () => {};

// Split by Multiple Delimiters
// Example: "a,b|c;d" -> ["a", "b", "c", "d"]; "one|two;three,four" -> ["one", "two", "three", "four"]
const splitByDelimiters = () => {};

// Check Multiline Start
// Example: "hello\nworld\nhello" -> ["hello", "hello"]; "Hello\nworld" -> []
const checkMultilineStart = () => {};

// Validate U.S. Street Address
// Example: "123 N Olive Lane\nCity, ST 12345" -> true; "123 Olive Lane, City ST 12345" -> false
const validateUSAddress = () => {};

module.exports = {
  matchJavaScript,
  validateEmail,
  extractNumbers,
  replaceWhitespace,
  validatePhoneNumber,
  extractHexColors,
  validateUrl,
  validateDate,
  countVowels,
  // extractDomain,
  // matchHtmlTags,
  // findCapitalizedWords,
  // matchRepeatedWords,
  // validatePassword,
  // matchUnicodeChars,
  // validateCreditCard,
  // replaceNonWordChars,
  // splitByDelimiters,
  // checkMultilineStart,
  // validateUSAddress,
};
