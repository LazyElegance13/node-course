const fs = require("fs");
const { json } = require("stream/consumers");
const book = {
    title: "Ego is the Enemy",
    author: "Ryan Holiday"
}

const bookJSON = JSON.stringify(book);

// console.log(bookJSON);

// const parseData = JSON.parse(bookJSON);
// console.log(parseData.author);

// fs.writeFileSync("1-json.json", bookJSON);

// const dataBuffer = fs.readFileSync("1-JSON.json");
// const dataJSON = dataBuffer.toString(); 
// const data = JSON.parse(dataJSON);
// console.log(data.title);


const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

data.name = "Lazy Lucifer";
data.age = 40;

const revisedDataJSON = JSON.stringify(data);
fs.writeFileSync("1-json.json", revisedDataJSON);