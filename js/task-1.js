
function slugify(text) {
    const textToLowerCase = text.toLowerCase();
    const textSplit = textToLowerCase.split(' ');
    const slugify = textSplit.join("-");
    return slugify;
 };

console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
