// const fs = require('fs');
// const http = require('http')
// const path = require('path')
// const url = require('url')
const os = require('os')

// //Read
// //Async
// fs.readFile('demo.txt', 'utf8', (err, data)=>{
//     if(err){
//         console.log('Error while reading file', err);
//         return
//     }
//     console.log('File contents', data);
// })
//  // Read
//  // Sync
// try {
//     const data = fs.readFileSync('demo.txt', 'utf8');
//     console.log('File contents:', data);
//   } catch (err) {
//     console.error('Error reading file:', err);
//   }

//   //writing files
//   //Async
//   const Async = 'Hello, World!';
//   fs.writeFile('write.txt', Async, (err) => {
//     if (err) {
//       console.error('Error writing file:', err);
//       return;
//     }
//     console.log('File written successfully');
//   });
  
//   //Write file
//   //Sync
//   const write = 'Hello, World!';
// try {
//   fs.writeFileSync('writefileAsync.txt', write);
//   console.log('File written successfully');
// } catch (err) {
//   console.error('Error writing file:', err);
// }

// // //Append
// // //Async
// const append = 'Appended text';
// fs.appendFile('demo.txt', `\n${append}`, (err) => {
//   if (err) {
//     console.error('Error appending to file:', err);
//     return;
//   }
//   console.log('File appended successfully');
// });

// // //Append
// // // Sync
// const content = 'Appended Sync text';
// try {
//     fs.appendFileSync('demo.txt', `\n${content}`);
//     console.log('File appended successfully');
//   } catch (err) {
//     console.error('Error appending to file:', err);
//   }

// //   //Delete
//   fs.unlink('example.txt', (err) => {
//     if (err) {
//       console.error('Error deleting file:', err);
//       return;
//     }
//     console.log('File deleted successfully');
//   });
  
//   try {
//     fs.unlinkSync('example.txt');
//     console.log('File deleted successfully');
//   } catch (err) {
//     console.error('Error deleting file:', err);
//   }
  
//   fs.mkdir('exampleDir',  (err) => {
//     if (err) {
//       console.error('Error creating directory:', err);
//       return;
//     }
//     console.log('Directory created successfully');
//   });
  
//   fs.rmdir('exampleDir', (err) => {
//     if (err) {
//       console.error('Error removing directory:', err);
//       return;
//     }
//     console.log('Directory removed successfully');
//   });
  

//   try {
//     fs.mkdirSync('exampleDir', { recursive: true });
//     console.log('Directory created successfully');
//   } catch (err) {
//     console.error('Error creating directory:', err);
//   }
  
//   try {
//     fs.rmdirSync('exampleDir');
//     console.log('Directory removed successfully');
//   } catch (err) {
//     console.error('Error removing directory:', err);
//   }
  


  



// // Http

// const server = http.createServer((req,res)=>{

//   const logs = `${Date()} : ${req.url}New Request recieved \n`

//   fs.appendFile('http.txt', logs, (err, data)=>{
//     switch (req.url) {
//       case '/': res.end("Homepage")
//         break;
//       case '/about': res.end("about page")
    
//       default:
//         break;
//     }
//   })

// })

// server.listen(8000, (()=>{console.log("Server Started")}))





//path

// console.log(__filename)
// console.log(__dirname);

    //basename

// console.log(path.basename(__filename))
// console.log(path.basename(__dirname))

    // extname
  
// console.log(path.extname(__filename))
// console.log(path.extname(__dirname))

  //parse
// console.log(path.parse(__filename))

//format

// console.log(path.format(path.parse(__filename)))

//absolute

// console.log(path.isAbsolute(__filename))
// console.log(path.isAbsolute("./"))

//join

// console.log(path.join("Folder1", "Folder2", "index.html"));
// console.log(path.join("/Folder1", "//Folder2", "index.html"));
// console.log(path.join("/Folder1", "//Folder2", "../index.html"));
// console.log(path.join(__dirname,"index.html"));

//resolve

// console.log(path.resolve("Folder1", "Folder2", "index.html"));
// console.log(path.resolve("/Folder1", "//Folder2", "index.html"));
// console.log(path.resolve("/Folder1", "//Folder2", "../index.html"));
// console.log(path.resolve(__dirname,"index.html"));










//OS


// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.freemem());
// console.log(os.freemem());
// console.log(os.hostname());
// console.log(os.homedir());
// console.log(os.machine());
// console.log(os.networkInterfaces());
// console.log(os.platform());


//URL



