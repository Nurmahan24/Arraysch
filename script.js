function Start() {
    const message = document.getElementById("message");

/*
1. Split message words and store it in an array.
2. Display in CONSOLE the number of elements in the array and the most frequent word in the array
*/


var numberOfElementsInTheArray;
var space = ' ';
var arrayOfStrings = document.getElementById("message").value;

//function for split words in array
function splitString(message, space) {
    var arrayOfStrings = document.getElementById("message").value.split(space);
  
    numberOfElementsInTheArray = console.log(arrayOfStrings.length + ' elements: ' + arrayOfStrings.join(' / '));
  }

  //function for found most freq word
  function WordsString(arrayOfStrings){
    var arrayOfStrings = document.getElementById("message").value.split(space);
   
      var o = (arrayOfStrings).reduce(function(o, s) {
        o.freq[s] = (o.freq[s] || 0) + 1;
        if(!o.freq[o.most] || o.freq[s] > o.freq[o.most])
            o.most = s;
        return o;
    }, { freq: { }, most: 0 + '' });
    console.log("The most frequent word of the message is " + o.most);
  }

  //splitString(tempestString, space); just hint for me
 //calling function for split this array

console.log(`"${
    WordsString(arrayOfStrings)
    //theMostFrequentWord calling
    }"`)
console.log(`The number of words in the message is ${
    splitString(numberOfElementsInTheArray, space)}`)
    //function for random number
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
      p = getRandomInt(3);

// Random phrases and its pictures (represented as an array of objects)
const randomPhrasesAndPictures = [
    {
        phrase: "A wizard is never late, nor is he early. He arrives precisely when he means to. (c) Gandalf The Grey",
        imageURL: "https://lh3.googleusercontent.com/proxy/zHYUtIFhvkGC3VGNULLKzWEZuxYZQBGWsAHlgqbAYgOQz5rnEuKbDsDLPuXGcE-BbZyUsktqm_LCEM6imgT8gBA8IhL4SZgjscJBU6X5I4UbD4xxi6_8nGgy-VSApCkSBsCVBTRS7PRe75V6Ed72N4dFdMYs4MaB6WE"
    },
    {
        phrase: "We must all face the choice between what is right and what is easy. (c) Albus Dumbledore",
        imageURL: "https://www.magicalquote.com/wp-content/uploads/2020/02/We-must-all-face-the-choice-between-what-is-right-and-what-is-easy.jpg"
    },
    {
        phrase: "You are a wizard, Harry (c) Hagrid",
        imageURL: "https://thejapanhobbyist.files.wordpress.com/2017/03/64013553.jpg"
    }
] 
//trying to output the random text. img.
randomPhrasesAndPictures[p].phrase.readfile("hello.txt", "img.jpg")  //don't understand how to do that ;(
if (p == 0){
    console.log(randomPhrasesAndPictures[0]);
    let fileContent = readFileSync(randomPhrasesAndPictures[0].phrase + randomPhrasesAndPictures[0].imageURL)
        console.log(fileContent);
} 
else if (p == 1){
    console.log(randomPhrasesAndPictures[1]);
    let fileContent1 = readFileSync(randomPhrasesAndPictures[1].phrase + randomPhrasesAndPictures[1].imageURL)
    console.log(fileContent1);
}
else if (p == 2){
    console.log(randomPhrasesAndPictures[2]);
    let fileContent2 = readFileSync(randomPhrasesAndPictures[2].phrase + randomPhrasesAndPictures[2].imageURL)
    console.log(fileContent2);
}
}