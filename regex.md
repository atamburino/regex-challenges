# Mastering Regular Expressions in JavaScript

This lab introduces regular expressions (regex) in JavaScript, focusing on methods, flags, special characters, and patterns. You'll learn how to create and use regex effectively, explore related methods, and practice with examples.

## What is a Regular Expression?
A regular expression (regex) is a sequence of characters that define a search pattern. Regex is used for tasks like validation, searching, and replacing text in strings.

## Methods for Working with Regex in JavaScript

| Method     | Prototype | Purpose                                      | Returns          | Example                                                         |
|------------|-----------|----------------------------------------------|------------------|-----------------------------------------------------------------|
| `.test()`  | `RegExp`  | Tests if a pattern exists in a string.       | `Boolean`        | `/hello/.test('hello world') // true`                           |
| `.exec()`  | `RegExp`  | Executes a search for a match in a string.   | `Array` or `null`| `/(\d+)/.exec('abc123') // ["123"]`                             |
| `.match()` | `String`  | Finds matches of a regex in a string.        | `Array` or `null`| `'abc123'.match(/\d+/) // ["123"]`                              |
| `.replace()` | `String` | Replaces matched substrings with a replacement. | `String`       | `'hello world'.replace(/world/, 'JavaScript') // "hello JavaScript"` |
| `.search()` | `String` | Searches for a regex match and returns its index. | `Number` or `-1`| `'hello'.search(/o/) // 4`                                      |
| `.split()` | `String`  | Splits a string into an array using a regex. | `Array`          | `'a,b,c'.split(/,/) // ["a", "b", "c"]`                         |



## Regex Flags
Flags modify how a regex pattern behaves. Here's a quick overview:

| Flag | Name               | Description                              | Example                                    |
|------|--------------------|------------------------------------------|--------------------------------------------|
| g    | Global             | Finds all matches, not just the first.   | `'aa bb'.match(/a/g) // ["a", "a"]`        |
| i    | Case-insensitive   | Ignores case while matching.             | `'Hello'.match(/hello/i) // ["Hello"]`     |
| m    | Multiline          | Treats `^` and `$` as start/end of lines.| `"a\nb".match(/^b/m) // ["b"]`             |
| s    | Dotall             | Allows `.` to match newline characters.  | `"a\nb".match(/a.b/s) // ["a\nb"]`         |
| u    | Unicode            | Enables full Unicode matching.           | `'😀'.match(/\u{1F600}/u) // ["😀"]`       |



## Special Characters in Regex
| Character | Meaning                                 | Example                                           |
|-----------|-----------------------------------------|---------------------------------------------------|
| `\d`      | Matches any digit (0-9).               | `'abc123'.match(/\d/g) // ["1", "2", "3"]`       |
| `\w`      | Matches any word character (alphanumeric). | `'abc123!'.match(/\w/g) // ["a", "b", "c", "1", "2", "3"]` |
| `\s`      | Matches any whitespace character.      | `'a b\tc'.match(/\s/g) // [" ", "\t"]`           |
| `\D`      | Matches any non-digit.                 | `'abc123'.match(/\D/g) // ["a", "b", "c"]`       |
| `\W`      | Matches any non-word character.        | `'abc123!'.match(/\W/g) // ["!"]`                |
| `\S`      | Matches any non-whitespace character.  | `'a b'.match(/\S/g) // ["a", "b"]`               |



## Anchors
Anchors match specific positions in a string, not characters.

| Anchor	| Description	| Example |
| ----------|---------------|---------|
|`^ `|	Matches the start of a string. |	`'^hello'.test('hello world') // true `|
|`$` |	Matches the end of a string.   | `'world$'.test('hello world') // true` |



## Quantifiers

| Quantifier | Description            | Example                                  |
|------------|------------------------|------------------------------------------|
| `*`        | 0 or more times.       | `'aaa'.match(/a*/) // ["aaa"]`           |
| `+`        | 1 or more times.       | `'aaa'.match(/a+/) // ["aaa"]`           |
| `?`        | 0 or 1 time.           | `'abc'.match(/a?/) // ["a"]`             |
| `{n}`      | Exactly `n` times.     | `'aaa'.match(/a{3}/) // ["aaa"]`         |
| `{n,}`     | At least `n` times.    | `'aaaa'.match(/a{2,}/) // ["aaaa"]`      |
| `{n,m}`    | Between `n` and `m` times. | `'aaa'.match(/a{1,2}/) // ["aa"]`     |



## Lookaheads and Lookbehinds

| Type                 | Syntax     | Example                                      |
|----------------------|------------|----------------------------------------------|
| Positive Lookahead   | `(?=...)`  | `'abc123'.match(/abc(?=\d+)/) // ["abc"]`    |
| Negative Lookahead   | `(?!...)`  | `'abc123'.match(/abc(?!def)/) // ["abc"]`    |
| Positive Lookbehind  | `(?<=...)` | `'123abc'.match(/(?<=\d{3})abc/) // ["abc"]` |
| Negative Lookbehind  | `(?<!...)` | `'abc123'.match(/(?<!def)abc/) // ["abc"]`   |

## Code Examples for Methods
- Using .test()
```javascript
const regex = /hello/;
console.log(regex.test("hello world")); // true
console.log(regex.test("goodbye world")); // false
```

- Using .exec()
```javascript
const regex = /(\d{3})-(\d{4})/;
const result = regex.exec("My phone: 123-4567");
console.log(result);
// ["123-4567", "123", "4567", index: 10, input: "My phone: 123-4567"]
```
- Using .match()
```javascript
const str = "hello world hello";
const matches = str.match(/hello/g);
console.log(matches); // ["hello", "hello"]
```

- Using .replace()
```javascript
const str = "hello world";
const result = str.replace(/world/, "JavaScript");
console.log(result); // "hello JavaScript"
```

- Using .search()
```javascript
const str = "hello world";
const index = str.search(/world/);
console.log(index); // 6
```


- Using .split()
```javascript
const str = "a,b,c";
const result = str.split(/,/);
console.log(result); // ["a", "b", "c"]
```

