const path = require('path')
const fs = require('fs')  //File System

// fs.mkdir(path.join(__dirname, 'notes'), (err) => {
//     if (err) throw err;
//
//     console.log('The folder created')
// });

//
// fs.mkdir(path.join(__dirname, 'notes'), (err) => {
//     if (err) throw new Error(err)
//
//     console.log('Folder was created')
//

// fs.write(
//     path.join(__dirname, 'notes', 'mynote.txt'),
//     'Hello world',
//     (err) => {
//         if (err) throw err
//         console.log('Файл был создан')
//
//          fs.append(
//              path.join(__dirname, 'notes', 'mynotes.txt'),
//              'From append file',
//              (err) => {
//                  if (err) throw err
//                  console.log('File was change')
//              }
//          )
//     }
// )
//
// fe.readFile(
//     path.join(__dirname, 'notes', 'mynotes.txt ')
// )