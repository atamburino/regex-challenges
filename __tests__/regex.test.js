const {
    matchJavaScript,
    // validateEmail,
    // extractNumbers,
    // replaceWhitespace,
    // validatePhoneNumber,
    // extractHexColors,
    // validateUrl,
    // validateDate,
    // countVowels,
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
} = require('../regex-challenges');

describe('Regex Challenges', () => {
    test('Match a specific word', () => {
        expect(matchJavaScript('I love JavaScript')).toBe(true);
        expect(matchJavaScript('I love javascript')).toBe(false); // Case-sensitivity check
    });

    // test('Validate email address', () => {
    //     expect(validateEmail('test@example.com')).toBe(true);
    //     expect(validateEmail('TEST@EXAMPLE.COM')).toBe(true); // Case-insensitivity check
    //     expect(validateEmail('invalid-email')).toBe(false);
    // });

    // test('Extract numbers', () => {
    //     expect(extractNumbers('abc123def456')).toEqual(['123', '456']);
    //     expect(extractNumbers('No numbers here')).toEqual([]);
    // });

    // test('Replace whitespace', () => {
    //     expect(replaceWhitespace('Hello World')).toBe('Hello_World');
    //     expect(replaceWhitespace('multiple   spaces')).toBe('multiple_spaces');
    // });

    // test('Validate phone number', () => {
    //     expect(validatePhoneNumber('(123) 456-7890')).toBe(true);
    //     expect(validatePhoneNumber('(123) 456-7890 ')).toBe(false); // Extra whitespace should fail
    // });

    // test('Extract hexadecimal colors', () => {
    //     expect(extractHexColors('Colors: #FF5733, #fff, and #123abc')).toEqual(['#FF5733', '#fff', '#123abc']);
    //     expect(extractHexColors('no colors')).toEqual([]);
    // });

    // test('Validate URL', () => {
    //     expect(validateUrl('https://example.com')).toBe(true);
    //     expect(validateUrl('https://EXAMPLE.COM')).toBe(true); // Case-insensitivity for domain
    //     expect(validateUrl('ftp://example.com')).toBe(false);
    // });

    // test('Validate dates', () => {
    //     expect(validateDate('12/25/2023')).toBe(true);
    //     expect(validateDate('01/01/2022')).toBe(true);
    //     expect(validateDate('25/12/2023')).toBe(false); // Invalid format
    // });

    // test('Count vowels', () => {
    //     expect(countVowels('hello')).toBe(2);
    //     expect(countVowels('HELLO')).toBe(2); // Case-insensitivity check
    //     expect(countVowels('xyz')).toBe(0);
    // });

    // test('Extract domain names', () => {
    //     expect(extractDomain('test@example.com')).toBe('example.com');
    //     expect(extractDomain('TEST@EXAMPLE.COM')).toBe('EXAMPLE.COM'); // Ensure case preservation
    //     expect(extractDomain('invalid')).toBe(null);
    // });

    // test('Match HTML tags', () => {
    //     expect(matchHtmlTags('<div><p>Hello</p></div>')).toEqual(['<div>', '<p>', '</p>', '</div>']);
    //     expect(matchHtmlTags('No tags here')).toEqual([]);
    // });

    // test('Find capitalized words', () => {
    //     expect(findCapitalizedWords('Hello World')).toEqual(['Hello', 'World']);
    //     expect(findCapitalizedWords('No Caps here')).toEqual(['No', 'Caps']);
    //     expect(findCapitalizedWords('no caps')).toEqual([]);
    // });

    // test('Match repeated words', () => {
    //     expect(matchRepeatedWords('This is is a test Test')).toEqual(['is is']); // Case-sensitivity check
    //     expect(matchRepeatedWords('No repeats here')).toEqual([]);
    // });

    // test('Validate password', () => {
    //     expect(validatePassword('Password1')).toBe(true);
    //     expect(validatePassword('password')).toBe(false);
    //     expect(validatePassword('PASSWORD1')).toBe(false); // Must include lowercase
    // });

    // test('Match Unicode characters', () => {
    //     expect(matchUnicodeChars('😀')).toEqual(['😀']);
    //     expect(matchUnicodeChars('abcABC')).toEqual(['a', 'b', 'c', 'A', 'B', 'C']);
    // });

    // test('Validate credit card numbers', () => {
    //     expect(validateCreditCard('1234-5678-9101-1121')).toBe(true);
    //     expect(validateCreditCard('1234 5678 9101 1121')).toBe(true);
    //     expect(validateCreditCard('1234567891011121')).toBe(true);
    //     expect(validateCreditCard('12345-6789-1011-121')).toBe(false);
    // });

    // test('Replace non-word characters', () => {
    //     expect(replaceNonWordChars('hello world!')).toBe('hello-world-');
    //     expect(replaceNonWordChars('Hello@World')).toBe('Hello-World');
    // });

    // test('Split by multiple delimiters', () => {
    //     expect(splitByDelimiters('a,b|c;d')).toEqual(['a', 'b', 'c', 'd']);
    //     expect(splitByDelimiters('one|two,three;four')).toEqual(['one', 'two', 'three', 'four']);
    // });

    // test('Check multiline start', () => {
    //     expect(checkMultilineStart('hello\nworld\nhello')).toEqual(['hello', 'hello']);
    //     expect(checkMultilineStart('Hello\nworld')).toEqual([]);
    // });

    // test('Validate U.S. street address', () => {
    //     // Valid examples
    //     expect(validateUSAddress('123 N Olive Lane\nCity, ST 12345')).toBe(true);
    //     expect(validateUSAddress('456 W Main St\nSomewhere, TX 67890')).toBe(true);

    //     // Invalid examples
    //     expect(validateUSAddress('123 Olive Lane, City ST 12345')).toBe(false); // Missing newline
    //     expect(validateUSAddress('123 Olive Lane\nCity ST 12345')).toBe(false); // Missing comma
    //     expect(validateUSAddress('123 Olive Lane\nCity, ST')).toBe(false); // Missing ZIP code
    //     expect(validateUSAddress('Olive Lane\nCity, ST 12345')).toBe(false); // Missing house number
    // });
});
