// const names = "David";

// // console.log(global);

// // global.setTimeout(() => console.log(names), 5000);

// console.log(__dirname);
// console.log(__filename);


// const { people, ages } = require("./modules");
// console.log(ages, typeof people);

// console.log(people[1]);

// const os = require("os");

// console.log(os.platform(), os.homedir());

const fs = require("fs");

// fs.readFile("./docs/blogs.txt", (err, data) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(data.toString());
//     }
// });

// fs.writeFile("./docs/blogs1.txt", "You dey mad!", () => {
//     console.log("File written!");
// })

// fs.mkdir("./assets", (err) => {
//     if(err){
//         console.log(err);
//     } else{
//         console.log("file created");
//     }
// })

const readStreams = fs.createReadStream("./docs/blogs.txt", {encoding: "utf-8"});
const writeStreams = fs.createWriteStream("./docs/blogs1.txt");

// readStreams.on("data", (chunk) => {

//     console.log("_________________ NEW CHUNK_________________");
//     console.log(chunk);

//     writeStreams.write("\n NEW CHUNK \n");
//     writeStreams.write(chunk);

// });

readStreams.pipe(writeStreams);